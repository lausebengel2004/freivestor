import React from "react";
import { getAgentenMeldungen } from "@agenten/dev/agentenMeldungsLog";

const AgentenMeldungPanel = () => {
  const meldungen = getAgentenMeldungen();

  return (
    <div style={{ border: "1px solid #ddd", padding: "1rem", marginBottom: "1rem", borderRadius: "8px", background: "#fffbe6" }}>
      <h4>📝 Letzte Agentenmeldungen</h4>
      {meldungen.length === 0 ? (
        <p><em>Keine Meldungen bisher registriert.</em></p>
      ) : (
        <ul>
          {meldungen.map((m, index) => (
            <li key={index}>
              <strong>{m.agent}</strong> – {m.text} <br />
              <small>{m.zeitpunkt}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AgentenMeldungPanel;
