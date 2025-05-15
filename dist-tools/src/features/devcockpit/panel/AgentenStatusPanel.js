import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { agentenManifest } from "@agenten/dev/agentenManifest";
import { useRolle } from "@context/RollenContext";
const AgentenStatusPanel = () => {
    const { rolle } = useRolle();
    // Sichtbare Agenten abhängig von Rolle
    const sichtbareAgenten = agentenManifest.filter(agent => {
        if (rolle === "developer")
            return true; // alles sichtbar
        return agent.typ === "user"; // nur einfache Agenten für user
    });
    const anzahl = sichtbareAgenten.length;
    const uiSichtbar = sichtbareAgenten.filter(a => a.sichtbar).length;
    const autostart = sichtbareAgenten.filter(a => a.autostart).length;
    const diagnosefaehig = sichtbareAgenten.filter(a => a.diagnosefähig).length;
    return (_jsxs("div", { style: { border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem", borderRadius: "8px", background: "#f9f9f9" }, children: [_jsxs("h4", { children: ["\uD83E\uDDE0 Agentenstatus (", rolle, ")"] }), _jsxs("ul", { children: [_jsxs("li", { children: ["Gesamt sichtbar: ", _jsx("strong", { children: anzahl })] }), _jsxs("li", { children: ["UI-aktiv: ", _jsx("strong", { children: uiSichtbar })] }), _jsxs("li", { children: ["Autostart aktiviert: ", _jsx("strong", { children: autostart })] }), _jsxs("li", { children: ["Diagnosef\u00E4hig: ", _jsx("strong", { children: diagnosefaehig })] })] })] }));
};
export default AgentenStatusPanel;
