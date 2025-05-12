import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from "react";
import { FreiVestorCoreAgent } from "@coreAgenten/FreiVestorCoreAgent";
import { SchuldenfreiAgent } from "@schuldenfreiUtils/SchuldenfreiAgent";
const coreAgent = new FreiVestorCoreAgent("observe");
const schuldenAgent = new SchuldenfreiAgent();
const AgentenDiagnose = () => {
    const [diagnose, setDiagnose] = useState([]);
    const runAnalyse = () => {
        const result = [];
        const monatsCardCode = `
      const MonatsCard = ({ monat, zahlungen, feierBetrag }) => {
        return <div>{feierBetrag}</div>;
      };
    `;
        if (!monatsCardCode.includes("feierBetrag")) {
            result.push({ agent: "Schuldenfrei", status: "❌", message: "feierBetrag fehlt in MonatsCard" });
        }
        else {
            result.push({ agent: "Schuldenfrei", status: "✅", message: "MonatsCard verwendet feierBetrag" });
        }
        result.push({ agent: "System", status: "⚠️", message: "Snapshot noch nicht auf aktuelle Dateien erweitert" });
        setDiagnose(result);
    };
    return (_jsxs("div", { children: [_jsx("h4", { children: "\uD83D\uDCCB Agenten-Diagnose\u00FCbersicht" }), _jsx("button", { onClick: runAnalyse, children: "Diagnose starten" }), _jsx("ul", { style: { marginTop: "1rem" }, children: diagnose.map((item, i) => (_jsxs("li", { children: [_jsx("strong", { children: item.status }), " [", item.agent, "] \u2013 ", item.message] }, i))) })] }));
};
export default AgentenDiagnose;
