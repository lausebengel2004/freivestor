import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useToolContext } from "@globalUtils/context/ToolContext";
const DevCockpitSystemLog = () => {
    const { aktuellesTool } = useToolContext();
    return (_jsxs("div", { style: {
            marginTop: "2rem",
            padding: "1rem",
            background: "#fff6e6",
            border: "1px solid #f0c36d",
            borderRadius: "8px",
            fontSize: "0.9rem",
        }, children: [_jsx("h4", { children: "\uD83D\uDEE0 Systemstatus" }), _jsxs("ul", { style: { marginTop: "0.5rem", lineHeight: "1.6" }, children: [_jsxs("li", { children: ["\uD83D\uDD27 Aktives Tool: ", _jsx("strong", { children: aktuellesTool })] }), _jsx("li", { children: "\uD83E\uDDE0 DevCockpitWrapper geladen: \u2705" }), _jsx("li", { children: "\uD83D\uDD04 ToolContext aktiv: \u2705" }), _jsx("li", { children: "\uD83C\uDF10 Vite-Umgebung l\u00E4uft (lokal oder StackBlitz): \u2705" })] }), _jsx("p", { style: { marginTop: "0.5rem", fontSize: "0.85rem", color: "#555" }, children: "Hinweis: Meldungen aus Browser-Extensions werden hier nicht aufgef\u00FChrt." })] }));
};
export default DevCockpitSystemLog;
