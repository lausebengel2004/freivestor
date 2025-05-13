import React from "react";
import { useSystemLog } from "./devCockpitContext";
import DiagnoseDownloadButton from "./DiagnoseDownloadButton";
import DiagnosePaketButton from "./DiagnosePaketButton";
import SystemLogViewer from "./SystemLogViewer";
import CommitVorschlagAgent from "./CommitVorschlagAgent";
import "./DevCockpitWrapper.css";
import { useAutoSyncAgent } from "./agents/AutoSyncAgent";


const DevCockpitPanel: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { logs } = useSystemLog();
  const commit = useAutoSyncAgent();

  return (
    <div className="devcockpit-panel">
      <h3>🧠 DevCockpit</h3>
      <ul>
        {logs.map((log, i) => (
          <li key={i}>{log}</li>
        ))}
      </ul>

      <hr />
      <SystemLogViewer />
      <hr />
      <DiagnoseDownloadButton />
      <DiagnosePaketButton />
      <hr />
      <CommitVorschlagAgent />
      <button onClick={onClose} style={{ marginTop: "1rem" }}>Schließen</button>
      <div style={{ marginTop: "1rem" }}>
  <strong>📄 AutoSync Commit-Vorschlag</strong>
  <pre>{commit}</pre>
</div>
    </div>
    
  );
};

export default DevCockpitPanel;