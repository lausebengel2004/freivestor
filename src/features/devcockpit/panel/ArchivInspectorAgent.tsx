import React, { useState } from "react";
import { ARCHIV_INSPEKTOR_CONFIG } from "../config/archiv-inspector.config";
import { generateArchivScanMarkdown } from "../utils/generateArchivScanMarkdown";
import { loadLatestArchivScan } from "../utils/loadLatestArchivScan";
import { parseArchivScanMarkdown } from "../utils/parseArchivScanMarkdown";
import { extractScanTimestamp } from "../utils/extractScanTimestamp";
import { scanArchivStatus } from "../utils/scanArchivStatus";
import { generateArchivScanHtml } from "../utils/generateArchivScanHtml";


const ArchivInspectorAgent: React.FC = () => {
  const [scanResults, setScanResults] = useState<null | string[][]>(null);
  const [berichtText, setBerichtText] = useState<string | null>(null);
  const [statusHinweis, setStatusHinweis] = useState<"aktuell" | "geändert" | "keinExport">("keinExport");

  const handleExport = () => {
    if (!scanResults) return;

    const content = generateArchivScanMarkdown(scanResults);
    const blob = new Blob([content], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    const date = new Date().toISOString().split("T")[0]; // 📁 dynamischer Dateiname
    link.href = url;
    link.download = `archivscan_${date}.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    localStorage.setItem("letzterArchivExport", new Date().toISOString());
    setStatusHinweis("aktuell");
  };

  const handleLadeBericht = async () => {
    const content = await loadLatestArchivScan();
    setBerichtText(content || "Kein Bericht gefunden.");

    if (content) {
      const parsed = parseArchivScanMarkdown(content);
      setScanResults(parsed);

      const scanTimestamp = extractScanTimestamp(content);
      const letzterExport = localStorage.getItem("letzterArchivExport");

      if (!letzterExport) {
        setStatusHinweis("keinExport");
      } else if (scanTimestamp && scanTimestamp > letzterExport) {
        setStatusHinweis("geändert");
      } else {
        setStatusHinweis("aktuell");
      }
    } else {
      setScanResults(null);
      setStatusHinweis("keinExport");
    }
  };

  const handleScanAktivieren = async () => {
    const results = await scanArchivStatus();
    setScanResults(results);
    const markdown = generateArchivScanMarkdown(results);
    setBerichtText(markdown);
    setStatusHinweis("geändert");
  };

  const renderHinweis = () => {
    switch (statusHinweis) {
      case "aktuell":
        return <p style={{ color: "green" }}>🟢 Archivscan ist aktuell exportiert.</p>;
      case "geändert":
        return <p style={{ color: "orange" }}>🟠 Neuer Scan erkannt – bitte erneut exportieren.</p>;
      case "keinExport":
        return <p style={{ color: "red" }}>🔴 Noch kein Export durchgeführt.</p>;
    }
  };

  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "1rem", marginBottom: "1rem", background: "#fdfdfd" }}>
      <h4>🧹 ArchivInspectorAgent</h4>
      <p>
        Konfiguration erkannt: <strong>{ARCHIV_INSPEKTOR_CONFIG.ordner.length}</strong> Ordner,{" "}
        <strong>{ARCHIV_INSPEKTOR_CONFIG.dateitypen.length}</strong> Dateitypen
      </p>

      {renderHinweis()}

      <div style={{ marginBottom: "1rem" }}>
        <button onClick={handleScanAktivieren} style={{ marginRight: "1rem", marginTop: "0.5rem" }}>
          📡 Archiv jetzt scannen
        </button>
        <button onClick={handleLadeBericht} style={{ marginRight: "1rem", marginTop: "0.5rem" }}>
          📂 Letzten Bericht öffnen
        </button>
        <button onClick={handleExport} disabled={!scanResults} style={{ marginTop: "0.5rem" }}>
          📥 Export aktives Ergebnis
        </button>
      </div>

      {berichtText && (
        <>
          <p style={{ fontStyle: "italic", fontSize: "0.85rem", marginTop: "0.5rem" }}>
            🕒 Scan vom: {new Date(extractScanTimestamp(berichtText) ?? "").toLocaleString("de-DE")}
          </p>

          {scanResults && (
            <div style={{ fontSize: "0.9rem", color: "#333", marginBottom: "0.5rem" }}>
              {(() => {
                const gesamt = scanResults.length;
                const aktiv = scanResults.filter(r => r[3] === "aktiv").length;
                const leer = scanResults.filter(r => r[3] === "leer").length;
                const winzig = scanResults.filter(r => r[3] === "winzig").length;
                const unbekannt = scanResults.filter(r => !r[3] || r[3] === "-").length;

                return (
                  <strong>
                    📊 Dateien: {gesamt} →{" "}
                    <span style={{ color: "green" }}>{aktiv} aktiv</span>,{" "}
                    <span style={{ color: "orange" }}>{winzig} prüfen</span>,{" "}
                    <span style={{ color: "red" }}>{leer} leer</span>,{" "}
                    <span style={{ color: "#999" }}>{unbekannt} unbekannt</span>
                  </strong>
                );
              })()}
            </div>
          )}

          <div
            style={{
              marginTop: "0.5rem",
              whiteSpace: "pre-wrap",
              background: "#f6f6f6",
              padding: "1rem",
              border: "1px solid #ccc",
              borderRadius: "6px",
              maxHeight: "400px",
              overflowY: "auto"
            }}
          >
            <h5>📄 Berichtsvorschau</h5>
            <code style={{ fontSize: "0.8rem" }}>{berichtText}</code>
          </div>
        </>
      )}
    </div>
  );
};

export default ArchivInspectorAgent;
