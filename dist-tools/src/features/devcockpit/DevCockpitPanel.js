import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect, lazy, Suspense } from "react";
// 📦 Einheitliche Lazy-Imports aus dem panel-Verzeichnis
const StrukturUeberblickPanel = lazy(() => import("./panel/StrukturUeberblickPanel"));
const AgentenStatusPanel = lazy(() => import("./panel/AgentenStatusPanel"));
const AgentenMeldungPanel = lazy(() => import("./panel/AgentenMeldungPanel"));
const AgentenDesignerPanel = lazy(() => import("./panel/AgentenDesignerPanel"));
const CommitMonitorPanel = lazy(() => import("./panel/CommitMonitorPanel"));
const AgentenStatusTabelle = lazy(() => import("./ui/AgentenStatusTabelle"));
const DiagnoseDownloadButton = lazy(() => import("./ui/DiagnoseDownloadButton"));
const DiagnosePaketButton = lazy(() => import("./ui/DiagnosePaketButton"));
const SystemLogViewer = lazy(() => import("./SystemLogViewer"));
const ArchivInspectorAgent = lazy(() => import("./panel/ArchivInspectorAgent"));
import RollenSwitch from "@features/devcockpit/ui/RollenSwitch"; // UI-Elemente separat
import { useSystemLog } from "./devCockpitContext";
import "./DevCockpitWrapper.css";
const TABS = ["Status", "Details", "Log", "Tools"];
const TAB_STORAGE_KEY = "freivestor::cockpitTab";
const DevCockpitPanel = ({ onClose }) => {
    const { logs } = useSystemLog();
    const [activeTab, setActiveTab] = useState(() => {
        return localStorage.getItem(TAB_STORAGE_KEY) || "Status";
    });
    useEffect(() => {
        localStorage.setItem(TAB_STORAGE_KEY, activeTab);
    }, [activeTab]);
    return (_jsxs("div", { className: "devcockpit-panel", children: [_jsx(RollenSwitch, {}), _jsx("h3", { children: "\uD83E\uDDE0 DevCockpit" }), _jsx("div", { className: "tab-bar", children: TABS.map(tab => (_jsx("button", { onClick: () => setActiveTab(tab), className: activeTab === tab ? "active-tab" : "", children: tab }, tab))) }), _jsx("hr", {}), _jsxs(Suspense, { fallback: _jsx("div", { children: "Lade Inhalte..." }), children: [activeTab === "Status" && (_jsxs(_Fragment, { children: [_jsx("h4", { children: "Meta" }), _jsx(StrukturUeberblickPanel, {}), _jsx(AgentenStatusPanel, {}), _jsx(AgentenMeldungPanel, {})] })), activeTab === "Details" && _jsx(AgentenStatusTabelle, {}), activeTab === "Log" && (_jsxs(_Fragment, { children: [_jsx("ul", { children: logs.map((log, i) => (_jsx("li", { children: log }, i))) }), _jsx("hr", {}), _jsx(SystemLogViewer, {}), _jsx(CommitMonitorPanel, {})] })), activeTab === "Tools" && (_jsxs(_Fragment, { children: [_jsx(AgentenDesignerPanel, {}), _jsx(ArchivInspectorAgent, {}), _jsx(DiagnoseDownloadButton, {}), _jsx(DiagnosePaketButton, {})] }))] }), _jsx("hr", {}), _jsx("button", { onClick: onClose, style: { marginTop: "1rem" }, children: "Schlie\u00DFen" })] }));
};
export default DevCockpitPanel;
