import React from "react";
import { agentenManifest } from "@agenten/dev/agentenManifest";

const AgentenUebersichtPanel: React.FC = () => {
  return (
    <div className="agenten-uebersicht-panel">
      <h3>📋 Agentenübersicht</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Typ</th>
            <th>Sichtbar</th>
            <th>Startbar</th>
            <th>Diagnosefähig</th>
          </tr>
        </thead>
        <tbody>
          {agentenManifest.map((agent, index) => (
            <tr key={index}>
              <td>{agent.name}</td>
              <td>{agent.type}</td>
              <td>{agent.sichtbar ? "✅" : "❌"}</td>
              <td>{agent.startbar ? "✅" : "❌"}</td>
              <td>{agent.diagnosefähig ? "✅" : "❌"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AgentenUebersichtPanel;
