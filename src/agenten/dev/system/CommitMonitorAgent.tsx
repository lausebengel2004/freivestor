import React, { useState } from "react";
import { loadLatestArchivScan } from "@features/devcockpit/utils/loadLatestArchivScan";
import { generateCommitTextFromArchivScan } from "@features/devcockpit/utils/generateCommitTextFromArchivScan";
import { generateUnifiedCommitSummary } from "@features/devcockpit/utils/generateUnifiedCommitSummary";
import { useSystemLog } from "@features/devcockpit/devCockpitContext";

// 🧠 Gemeinsame Agentenfunktion (für Panel-Nutzung)
export const CommitMonitorAgent = {
  run: async (logs: string[] = []) => {
    const bericht = await loadLatestArchivScan();

    if (bericht) {
      return {
        summary: "docs: ArchivScan-Änderungen übernommen",
        body: generateCommitTextFromArchivScan(bericht),
      };
    }

    const fallback = await generateUnifiedCommitSummary(logs);
    return {
      summary: "chore: Projektzustand gesichert",
      body: fallback,
    };
  },
};

// 🧩 Interaktive UI-Komponente (z. B. im Tools-Tab)
const CommitMonitorAgentPanel: React.FC = () => {
  const [commitText, setCommitText] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const { logs } = useSystemLog();

  const handleGenerateArchivCommit = async () => {
    const bericht = await loadLatestArchivScan();
    if (!bericht) {
      setCommitText("⚠️ Kein ArchivScan gefunden.");
      return;
    }

    const vorschlag = generateCommitTextFromArchivScan(bericht);
    setCommitText(vorschlag);
  };

  const handleGenerateFullCommit = async () => {
    const full = await generateUnifiedCommitSummary(logs);
    setCommitText(full);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(commitText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "1rem", marginBottom: "1rem", background: "#fefefe" }}>
      <h4>📍 Commit-Vorschlag Generator</h4>
      <p>Wähle aus, auf welcher Basis dein Commit-Vorschlag generiert werden soll.</p>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "1rem" }}>
        <button onClick={handleGenerateArchivCommit}>📦 Aus ArchivScan</button>
        <button onClick={handleGenerateFullCommit}>🧠 Gesamter System-Vorschlag</button>
        <button onClick={handleCopy} disabled={!commitText}>📋 Kopieren</button>
        {copied && <span style={{ color: "green" }}>✔️ kopiert</span>}
      </div>

      {commitText && (
        <pre style={{ background: "#f9f9f9", padding: "1rem", borderRadius: "6px", fontSize: "0.85rem" }}>
          {commitText}
        </pre>
      )}
    </div>
  );
};

export default CommitMonitorAgentPanel;
