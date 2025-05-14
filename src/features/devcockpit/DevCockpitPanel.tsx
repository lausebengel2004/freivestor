import React, { useState, useEffect, lazy, Suspense } from "react";

// Tabs dynamisch
const AgentenStatusPanel = lazy(() => import("@features/devcockpit/ui/AgentenStatusPanel"));
const AgentenMeldungPanel = lazy(() => import("@agenten/dev/ui/AgentenMeldungPanel"));
const AgentenDesignerPanel = lazy(() => import("@features/devcockpit/ui/AgentenDesignerPanel"));
const AgentenStatusTabelle = lazy(() => import("@features/devcockpit/ui/AgentenStatusTabelle"));
const CommitMonitorPanel = lazy(() => import("./panel/CommitMonitorPanel"));
const DiagnoseDownloadButton = lazy(() => import("./DiagnoseDownloadButton"));
const DiagnosePaketButton = lazy(() => import("./DiagnosePaketButton"));
const SystemLogViewer = lazy(() => import("./SystemLogViewer"));
import StrukturAgent from "@agenten/dev/meta/StrukturAgent";

import { useSystemLog } from "./devCockpitContext";
import "./DevCockpitWrapper.css";

const TABS = ["Status", "Details", "Log", "Tools"];
const TAB_STORAGE_KEY = "freivestor::cockpitTab";

const DevCockpitPanel: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { logs } = useSystemLog();
  const [activeTab, setActiveTab] = useState(() => {
    return localStorage.getItem(TAB_STORAGE_KEY) || "Status";
  });

  useEffect(() => {
    localStorage.setItem(TAB_STORAGE_KEY, activeTab);
  }, [activeTab]);

  return (
    <div className="devcockpit-panel">
      <h3>🧠 DevCockpit</h3>

      <div className="tab-bar">
        {TABS.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={activeTab === tab ? "active-tab" : ""}
          >
            {tab}
          </button>
        ))}
      </div>

      <hr />

      <Suspense fallback={<div>Lade Inhalte...</div>}>
        {activeTab === "Status" && (
          <>
            <h4>Meta</h4>
            <StrukturAgent />
            <AgentenStatusPanel />
            <AgentenMeldungPanel />
          </>
        )}

        {activeTab === "Details" && <AgentenStatusTabelle />}

        {activeTab === "Log" && (
          <>
            <ul>
              {logs.map((log, i) => (
                <li key={i}>{log}</li>
              ))}
            </ul>
            <hr />
            <SystemLogViewer />
            <CommitMonitorPanel />
          </>
        )}

        {activeTab === "Tools" && (
          <>
            <AgentenDesignerPanel />
            <DiagnoseDownloadButton />
            <DiagnosePaketButton />
          </>
        )}
      </Suspense>

      <hr />
      <button onClick={onClose} style={{ marginTop: "1rem" }}>Schließen</button>
    </div>
  );
};

export default DevCockpitPanel;
