
import React from "react";
import { useToolContext } from "@globalUtils/context/ToolContext";

const DevCockpitSystemLog: React.FC = () => {
  const { aktuellesTool } = useToolContext();

  return (
    <div
      style={{
        marginTop: "2rem",
        padding: "1rem",
        background: "#fff6e6",
        border: "1px solid #f0c36d",
        borderRadius: "8px",
        fontSize: "0.9rem",
      }}
    >
      <h4>🛠 Systemstatus</h4>
      <ul style={{ marginTop: "0.5rem", lineHeight: "1.6" }}>
        <li>🔧 Aktives Tool: <strong>{aktuellesTool}</strong></li>
        <li>🧠 DevCockpitWrapper geladen: ✅</li>
        <li>🔄 ToolContext aktiv: ✅</li>
        <li>🌐 Vite-Umgebung läuft (lokal oder StackBlitz): ✅</li>
      </ul>
      <p style={{ marginTop: "0.5rem", fontSize: "0.85rem", color: "#555" }}>
        Hinweis: Meldungen aus Browser-Extensions werden hier nicht aufgeführt.
      </p>
    </div>
  );
};

export default DevCockpitSystemLog;
