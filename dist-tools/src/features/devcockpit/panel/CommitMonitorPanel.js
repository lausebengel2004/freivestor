import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from "react";
import CommitMonitorAgent from "@agenten/dev/system/CommitMonitorAgent";
const CommitMonitorPanel = () => {
    const [summary, setSummary] = useState("");
    const [body, setBody] = useState("");
    const anzeigen = async () => {
        const { summary, body } = await CommitMonitorAgent.run();
        setSummary(summary);
        setBody(body);
    };
    const copy = {
        summary: () => navigator.clipboard.writeText(summary),
        body: () => navigator.clipboard.writeText(body),
        full: () => navigator.clipboard.writeText(`${summary}\n\n${body}`)
    };
    return (_jsxs("div", { className: "commit-monitor", style: { marginTop: "1rem" }, children: [_jsx("button", { onClick: anzeigen, children: "\uD83E\uDDE0 Commit-Vorschlag generieren" }), summary && (_jsxs("div", { style: { marginTop: "1.5rem" }, children: [_jsx("h4", { children: "\uD83D\uDFE9 Commit-Zeile (Summary)" }), _jsx("pre", { style: { background: "#111", color: "#0f0", padding: "0.75rem", borderRadius: "6px" }, children: summary }), _jsx("button", { onClick: copy.summary, children: "\uD83D\uDCCB Zeile kopieren" }), _jsx("h4", { style: { marginTop: "1.5rem" }, children: "\uD83D\uDCDD Commit-Text (Beschreibung)" }), _jsx("pre", { style: { background: "#111", color: "#fff", padding: "1rem", borderRadius: "6px" }, children: body }), _jsx("button", { onClick: copy.body, style: { marginRight: "0.5rem" }, children: "\uD83D\uDCCB Text kopieren" }), _jsx("button", { onClick: copy.full, children: "\uD83D\uDCCB Alles kopieren" })] })), !summary && (_jsx("p", { style: { marginTop: "1rem" }, children: "\uD83D\uDCED Noch keine Vorschl\u00E4ge generiert. Klicke auf den Button oben." }))] }));
};
export default CommitMonitorPanel;
