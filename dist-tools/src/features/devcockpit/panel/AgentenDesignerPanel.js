import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @features/devcockpit/ui/AgentenDesignerPanel.jsx
import React, { useState } from "react";
import { AgentenDesignerAgent } from "@agenten/dev/meta/AgentenDesignerAgent";
const AgentenDesignerPanel = () => {
    const [name, setName] = useState("BeispielAgent");
    const [id, setId] = useState("beispiel-agent");
    const [sichtbar, setSichtbar] = useState(true);
    const [trigger, setTrigger] = useState("manuell");
    const [kategorie, setKategorie] = useState("analyse");
    const [downloadUrl, setDownloadUrl] = useState(null);
    const generate = () => {
        const config = { name, id, sichtbar, trigger, kategorie };
        const url = AgentenDesignerAgent.export(config);
        setDownloadUrl(url);
    };
    return (_jsxs("div", { className: "designer-panel", children: [_jsx("h3", { children: "\uD83C\uDFA8 AgentenDesigner" }), _jsx("label", { children: "Agentenname:" }), _jsx("input", { value: name, onChange: (e) => setName(e.target.value) }), _jsx("label", { children: "ID:" }), _jsx("input", { value: id, onChange: (e) => setId(e.target.value) }), _jsx("label", { children: "Kategorie:" }), _jsxs("select", { value: kategorie, onChange: (e) => setKategorie(e.target.value), children: [_jsx("option", { value: "analyse", children: "analyse" }), _jsx("option", { value: "meta", children: "meta" }), _jsx("option", { value: "dev", children: "dev" }), _jsx("option", { value: "system", children: "system" })] }), _jsx("label", { children: "Trigger:" }), _jsxs("select", { value: trigger, onChange: (e) => setTrigger(e.target.value), children: [_jsx("option", { value: "manuell", children: "manuell" }), _jsx("option", { value: "autostart", children: "autostart" })] }), _jsxs("label", { children: [_jsx("input", { type: "checkbox", checked: sichtbar, onChange: () => setSichtbar(!sichtbar) }), "Sichtbar im Cockpit"] }), _jsx("button", { onClick: generate, children: "\uD83D\uDEE0 Agentenprofil generieren" }), downloadUrl && (_jsxs("p", { children: ["\u2705 Fertig!", " ", _jsx("a", { href: downloadUrl, download: `${name}.js`, children: "\uD83D\uDC49 Hier klicken zum Herunterladen" })] }))] }));
};
export default AgentenDesignerPanel;
