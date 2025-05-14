import React, { useState } from "react";
import CommitMonitorAgent from "@agenten/dev/system/CommitMonitorAgent";

const CommitMonitorPanel: React.FC = () => {
  const [summary, setSummary] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const anzeigen = async () => {
    const { summary, body } = await CommitMonitorAgent.run();
    setSummary(summary);
    setBody(body);
  };

  const copy = {
    summary: () => navigator.clipboard.writeText(summary),
    body: () => navigator.clipboard.writeText(body),
    full: () => navigator.clipboard.writeText(`${summary}\n\n${body}`)
  };

  return (
    <div className="commit-monitor" style={{ marginTop: "1rem" }}>
      <button onClick={anzeigen}>🧠 Commit-Vorschlag generieren</button>

      {summary && (
        <div style={{ marginTop: "1.5rem" }}>
          <h4>🟩 Commit-Zeile (Summary)</h4>
          <pre style={{ background: "#111", color: "#0f0", padding: "0.75rem", borderRadius: "6px" }}>
            {summary}
          </pre>
          <button onClick={copy.summary}>📋 Zeile kopieren</button>

          <h4 style={{ marginTop: "1.5rem" }}>📝 Commit-Text (Beschreibung)</h4>
          <pre style={{ background: "#111", color: "#fff", padding: "1rem", borderRadius: "6px" }}>
            {body}
          </pre>
          <button onClick={copy.body} style={{ marginRight: "0.5rem" }}>
            📋 Text kopieren
          </button>
          <button onClick={copy.full}>📋 Alles kopieren</button>
        </div>
      )}

      {!summary && (
        <p style={{ marginTop: "1rem" }}>
          📭 Noch keine Vorschläge generiert. Klicke auf den Button oben.
        </p>
      )}
    </div>
  );
};

export default CommitMonitorPanel;
