// src/globalFeatures/globalComponents/devCockpit/DevCockpitSystemLog.tsx
import React from "react";
import { useSystemLog } from "./devCockpitContext";

const DevCockpitSystemLog: React.FC = () => {
  const { logs, agents } = useSystemLog();

  return (
    <div style={{ fontSize: "0.85rem", padding: "0.5rem" }}>
      <strong>🧾 Log</strong>
      <ul style={{ paddingLeft: "1rem" }}>
        {logs.map((log, index) => (
          <li key={index}>{log}</li>
        ))}
      </ul>
      <strong>🤖 Agents</strong>
      <ul style={{ paddingLeft: "1rem" }}>
        {agents.map((agent, index) => (
          <li key={index}>
            {agent.name} – <em>{agent.status}</em>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DevCockpitSystemLog;
