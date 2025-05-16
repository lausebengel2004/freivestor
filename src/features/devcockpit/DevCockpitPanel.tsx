// src/features/devcockpit/panel/DevCockpitPanel.tsx
import React, { useState, useEffect, lazy, Suspense } from "react";
import AgentenManifestGeneratorPanel from "@features/devcockpit/panel/AgentenManifestGeneratorPanel";
import LastSaveStatusPanel from "@features/devcockpit/ui/LastSaveStatusPanel";
import WriteAgentStatusPanel from "@features/devcockpit/panel/WriteAgentStatusPanel";
import CommitTrackingPanel from "@features/devcockpit/panel/CommitTrackingPanel";




// 📦 Lazy-Imports (nur UI-kompatible Panels)
const StrukturUeberblickPanel = lazy(() => import("./panel/StrukturUeberblickPanel"));
const AgentenStatusPanel = lazy(() => import("./panel/AgentenStatusPanel"));
const AgentenMeldungPanel = lazy(() => import("./panel/AgentenMeldungPanel"));
const AgentenDesignerPanel = lazy(() => import("./panel/AgentenDesignerPanel"));
const AgentenStatusTabelle = lazy(() => import("./ui/AgentenStatusTabelle"));
const SystemLogViewer = lazy(() => import("./SystemLogViewer"));
const ArchivInspectorAgent = lazy(() => import("./panel/ArchivInspectorAgent"));
const AgentenManifestDiffPanel = lazy(() => import("@features/devcockpit/panel/AgentenManifestDiffPanel"));

import CommitMonitorAgentPanel from "@agenten/dev/system/CommitMonitorAgent";

import RollenSwitch from "@features/devcockpit/ui/RollenSwitch";

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
      <RollenSwitch />
      <h3>🧠 DevCockpit</h3>

    <div className="tab-bar">
     {TABS.map((tab) => (
    <button
      key={tab}
      onClick={() => setActiveTab(tab)}
      className={`tab-button ${activeTab === tab ? "active-tab" : ""}`}
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
            <StrukturUeberblickPanel />
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
          </>
        )}

        {activeTab === "Tools" && (
          <>
            <LastSaveStatusPanel />
            <AgentenManifestDiffPanel />
            <AgentenManifestGeneratorPanel />
            <WriteAgentStatusPanel />            
            <AgentenDesignerPanel />
            <ArchivInspectorAgent />
            <CommitTrackingPanel />
            <CommitMonitorAgentPanel />
            
          </>
        )}
      </Suspense>

      <hr />
      <button onClick={onClose} style={{ marginTop: "1rem" }}>
        Schließen
      </button>
    </div>
  );
};

export default DevCockpitPanel;
