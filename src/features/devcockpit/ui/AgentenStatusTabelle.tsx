import React from "react";
import { agentenMetaMap } from "@agenten/dev/agentenMetaMap";

const AgentenStatusTabelle: React.FC = () => {
  return (
    <div style={{ marginTop: "1rem" }}>
      <h4>🧾 Aktive Agenten (Details)</h4>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th>Name</th>
            <th>Typ</th>
            <th>Kontext</th>
            <th>UI</th>
            <th>Auto</th>
            <th>Diagnose</th>
          </tr>
        </thead>
        <tbody>
          {agentenMetaMap.map((agent) => (
            <tr key={agent.id}>
              <td>{agent.name}</td>
              <td>{agent.typ}</td>
              <td>{agent.kontext}</td>
              <td>{agent.sichtbar ? "✅" : "❌"}</td>
              <td>{agent.autostart ? "✅" : "❌"}</td>
              <td>{agent.diagnosefähig ? "✅" : "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AgentenStatusTabelle;
