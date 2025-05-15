import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { agentenMetaMap } from "@agenten/dev/agentenMetaMap";
const AgentenStatusTabelle = () => {
    return (_jsxs("div", { style: { marginTop: "1rem" }, children: [_jsx("h4", { children: "\uD83E\uDDFE Aktive Agenten (Details)" }), _jsxs("table", { style: { width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }, children: [_jsx("thead", { children: _jsxs("tr", { style: { backgroundColor: "#f2f2f2" }, children: [_jsx("th", { children: "Name" }), _jsx("th", { children: "Typ" }), _jsx("th", { children: "Kontext" }), _jsx("th", { children: "UI" }), _jsx("th", { children: "Auto" }), _jsx("th", { children: "Diagnose" })] }) }), _jsx("tbody", { children: agentenMetaMap.map((agent) => (_jsxs("tr", { children: [_jsx("td", { children: agent.name }), _jsx("td", { children: agent.typ }), _jsx("td", { children: agent.kontext }), _jsx("td", { children: agent.sichtbar ? "✅" : "❌" }), _jsx("td", { children: agent.autostart ? "✅" : "❌" }), _jsx("td", { children: agent.diagnosefähig ? "✅" : "-" })] }, agent.id))) })] })] }));
};
export default AgentenStatusTabelle;
