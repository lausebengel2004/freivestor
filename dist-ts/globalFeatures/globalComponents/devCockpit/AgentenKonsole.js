import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from "react";
import { SchuldenfreiAgent } from "@schuldenfreiUtils/SchuldenfreiAgent";
const schuldenAgent = new SchuldenfreiAgent();
const AgentenKonsole = () => {
    const [idee, setIdee] = useState("");
    const [ausgabe, setAusgabe] = useState("");
    const handleAnalyse = () => {
        const result = schuldenAgent.interpretIdea(idee);
        if (result) {
            setAusgabe(`🧠 Komponente: ${result.komponente} mit Props: ${result.props.join(", ")}`);
        }
        else {
            setAusgabe("❗ Idee konnte nicht interpretiert werden.");
        }
    };
    return (_jsxs("div", { children: [_jsx("h4", { children: "\uD83D\uDCA1 Agenten-Konsole" }), _jsx("input", { type: "text", value: idee, onChange: (e) => setIdee(e.target.value), placeholder: "Z.\u202FB. Ich will einen Feiermonat", style: { width: "100%", padding: "0.5rem" } }), _jsx("button", { onClick: handleAnalyse, style: { marginTop: "0.5rem" }, children: "Idee analysieren" }), _jsx("p", { style: { marginTop: "0.5rem" }, children: ausgabe })] }));
};
export default AgentenKonsole;
