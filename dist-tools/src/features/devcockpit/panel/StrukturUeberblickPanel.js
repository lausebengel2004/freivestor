import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
const StrukturUeberblickPanel = () => {
    return (_jsxs("details", { style: { marginBottom: "1rem" }, open: true, children: [_jsx("summary", { style: {
                    cursor: "pointer",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    padding: "0.3rem 0",
                    color: "#5a5a5a",
                }, children: "\uD83E\uDDE0 Struktur\u00FCberblick" }), _jsxs("div", { style: { paddingLeft: "1rem", fontSize: "0.9rem", color: "#444" }, children: [_jsxs("p", { children: [_jsx("strong", { children: "Modus:" }), " Entwickleransicht (Meta + Debug)"] }), _jsxs("ul", { style: { paddingLeft: "1rem" }, children: [_jsxs("li", { children: [_jsx("code", { children: "/agenten/dev/meta/" }), " \u2013 MetaAgenten (nur f\u00FCr dich)"] }), _jsxs("li", { children: [_jsx("code", { children: "/agenten/user/" }), " \u2013 NutzerAgents (sp\u00E4ter sichtbar)"] })] })] })] }));
};
export default StrukturUeberblickPanel;
