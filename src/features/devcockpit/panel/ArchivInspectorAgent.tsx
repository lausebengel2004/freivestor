import React, { useState } from "react";
import { ARCHIV_INSPEKTOR_CONFIG } from "../config/archiv-inspector.config";
import { generateArchivScanMarkdown } from "../utils/generateArchivScanMarkdown";
import { loadLatestArchivScan } from "../utils/loadLatestArchivScan";
import { parseArchivScanMarkdown } from "../utils/parseArchivScanMarkdown";
import { extractScanTimestamp } from "../utils/extractScanTimestamp";

const ArchivInspectorAgent: React.FC = () => {
  const [scanResults, setScanResults] = useState<null | string[][]>(null);
  const [berichtText, setBerichtText] = useState<string | null>(null);
  const [statusHinweis, setStatusHinweis] = useState<"aktuell" | "geändert" | "keinExport">("keinExport");

  const handleExport = () => {
    if (!scanResults) return;

    // Export ausführen
    const content = generateArchivScanMarkdown(scanResults);
    const blob = new Blob([content], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "archivscan_export.md";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Zeitstempel speichern
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
        <button onClick={handleLadeBericht} style={{ marginRight: "1rem", marginTop: "0.5rem" }}>
          📂 Letzten Bericht öffnen
        </button>
        <button onClick={handleExport} disabled={!scanResults} style={{ marginTop: "0.5rem" }}>
          📥 Export aktives Ergebnis
        </button>
      </div>

      {berichtText && (
        <div
          style={{
            marginTop: "1rem",
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
      )}
    </div>
  );
};

export default ArchivInspectorAgent;
