import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
const agenten = [
    {
        name: "SchuldenfreiAgent",
        pfad: "src/features/schuldenfrei/schuldenfreiUtils/SchuldenfreiAgent.js",
        status: "✅ aktiv",
        aufgabe: "Props prüfen, Ideen interpretieren",
    },
    {
        name: "FreiVestorCoreAgent",
        pfad: "src/globalFeatures/globalUtils/agenten/FreiVestorCoreAgent.js",
        status: "✅ aktiv",
        aufgabe: "Alias + Routing prüfen",
    },
    {
        name: "agent-logger",
        pfad: "src/globalFeatures/globalUtils/agenten/agent-logger.js",
        status: "✅ eingebunden",
        aufgabe: "Logausgaben für alle Agentenaktionen",
    },
    {
        name: "agent-snapshot",
        pfad: "src/globalFeatures/globalUtils/agenten/agent-snapshot.json",
        status: "✅ eingebunden",
        aufgabe: "Vergleich mit Projektbasisstand",
    },
];
const AgentenDashboardUI = () => {
    return (_jsxs("div", { style: { marginTop: "2rem" }, children: [_jsx("h4", { children: "\uD83D\uDCCA Agenten-Dashboard (Live)" }), _jsx("ul", { children: agenten.map((agent, index) => (_jsxs("li", { style: { marginBottom: "1rem" }, children: [_jsx("strong", { children: agent.status }), " \u2013 ", _jsx("code", { children: agent.name }), _jsx("br", {}), _jsxs("span", { style: { fontSize: "0.9em", color: "#555" }, children: ["\uD83D\uDCCD ", agent.pfad, _jsx("br", {}), "\uD83E\uDDE0 ", agent.aufgabe] })] }, index))) })] }));
};
export default AgentenDashboardUI;
