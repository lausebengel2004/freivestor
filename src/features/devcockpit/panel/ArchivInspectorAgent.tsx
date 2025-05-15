import React, { useState } from "react";
import { ARCHIV_INSPEKTOR_CONFIG } from "../config/archiv-inspector.config";
import { generateArchivScanMarkdown } from "../utils/generateArchivScanMarkdown";
import { loadLatestArchivScan } from "../utils/loadLatestArchivScan";

const ArchivInspectorAgent: React.FC = () => {
  const [scanResults, setScanResults] = useState<null | string[][]>(null);
  const [berichtText, setBerichtText] = useState<string | null>(null);

  const handleExport = () => {
    if (!scanResults) return;
    const content = generateArchivScanMarkdown(scanResults);
    const blob = new Blob([content], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "archivscan_export.md";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleLadeBericht = async () => {
    const content = await loadLatestArchivScan();
    setBerichtText(content || "Kein Bericht gefunden.");
  };

  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "1rem", marginBottom: "1rem", background: "#fdfdfd" }}>
      <h4>🧹 ArchivInspectorAgent</h4>
      <p>
        Konfiguration erkannt: <strong>{ARCHIV_INSPEKTOR_CONFIG.ordner.length}</strong> Ordner,{" "}
        <strong>{ARCHIV_INSPEKTOR_CONFIG.dateitypen.length}</strong> Dateitypen
      </p>

      <div style={{ marginBottom: "1rem" }}>
        <button onClick={handleLadeBericht} style={{ marginRight: "1rem", marginTop: "0.5rem" }}>
          📂 Letzten Bericht öffnen
        </button>
        <button onClick={handleExport} disabled={!scanResults} style={{ marginTop: "0.5rem" }}>
          📥 Export aktives Ergebnis
        </button>
      </div>

      {berichtText && (
        <div style={{ marginTop: "1rem", whiteSpace: "pre-wrap", background: "#f6f6f6", padding: "1rem", border: "1px solid #ccc", borderRadius: "6px", maxHeight: "400px", overflowY: "auto" }}>
          <h5>📄 Berichtsvorschau</h5>
          <code style={{ fontSize: "0.8rem" }}>{berichtText}</code>
        </div>
      )}
    </div>
  );
};

export default ArchivInspectorAgent;
