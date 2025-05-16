// src/features/devcockpit/panel/WriteAgentStatusPanel.tsx
import React, { useState, useEffect } from "react";

interface AgentStatus {
  key: string;
  label: string;
}

const AGENTS: AgentStatus[] = [
  { key: "agenten::snapshot::lastRun", label: "SnapshotAgent" },
  { key: "agenten::diagnose::lastRun", label: "DiagnoseAgent" },
  { key: "agenten::release::lastRun", label: "ReleaseTagAgent" },
];

const WriteAgentStatusPanel: React.FC = () => {
  const [statuses, setStatuses] = useState<Record<string,string>>({});

  useEffect(() => {
    const load = () => {
      const s: Record<string,string> = {};
      AGENTS.forEach(({ key }) => {
        s[key] = localStorage.getItem(key) || "";
      });
      setStatuses(s);
    };
    load();
    const onStorage = (e: StorageEvent) => {
      if (AGENTS.some(a => a.key === e.key)) {
        load();
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return (
    <div style={{ marginTop: "1rem", padding: "1rem", background: "#111", color: "#eee", border: "1px solid #333", borderRadius: 4 }}>
      <h4>📝 Schreib-Agenten-Status</h4>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {AGENTS.map(({ key, label }) => {
          const ts = statuses[key];
          return (
            <li key={key}>
              {label}:{" "}
              {ts
                ? new Date(ts).toLocaleString()
                : <em>noch nicht ausgeführt</em>}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WriteAgentStatusPanel;
