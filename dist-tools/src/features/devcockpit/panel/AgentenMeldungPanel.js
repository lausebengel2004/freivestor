import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { getAgentenMeldungen } from "@agenten/dev/agentenMeldungsLog";
const AgentenMeldungPanel = () => {
    const meldungen = getAgentenMeldungen();
    return (_jsxs("div", { style: { border: "1px solid #ddd", padding: "1rem", marginBottom: "1rem", borderRadius: "8px", background: "#fffbe6" }, children: [_jsx("h4", { children: "\uD83D\uDCDD Letzte Agentenmeldungen" }), meldungen.length === 0 ? (_jsx("p", { children: _jsx("em", { children: "Keine Meldungen bisher registriert." }) })) : (_jsx("ul", { children: meldungen.map((m, index) => (_jsxs("li", { children: [_jsx("strong", { children: m.agent }), " \u2013 ", m.text, " ", _jsx("br", {}), _jsx("small", { children: m.zeitpunkt })] }, index))) }))] }));
};
export default AgentenMeldungPanel;
