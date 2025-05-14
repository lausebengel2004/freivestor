import React from "react";
//Ui
import AgentenStatusPanel from "@features/devcockpit/ui/AgentenStatusPanel";
import AgentenMeldungPanel from "@agenten/dev/ui/AgentenMeldungPanel";
import CommitMonitorPanel from "./panel/CommitMonitorPanel";

//MetaAgent
import StrukturAgent from "@agenten/dev/meta/StrukturAgent";
import AgentenDesignerAgent from "@agenten/dev/meta/AgentenDesignerAgent";
//SystemAgent


import { useSystemLog } from "./devCockpitContext";
import DiagnoseDownloadButton from "./DiagnoseDownloadButton";
import DiagnosePaketButton from "./DiagnosePaketButton";
import SystemLogViewer from "./SystemLogViewer";
import "./DevCockpitWrapper.css";




const DevCockpitPanel: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { logs } = useSystemLog();

  return (
    <div className="devcockpit-panel">
    <h3>Meta</h3>
    <StrukturAgent />
    <AgentenStatusPanel />
    <AgentenMeldungPanel />
    <AgentenDesignerAgent />
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
      <CommitMonitorPanel />
      <button onClick={onClose} style={{ marginTop: "1rem" }}>Schließen</button>
    </div>
    
  );
};

export default DevCockpitPanel;