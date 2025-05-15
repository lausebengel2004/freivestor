import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect, useState } from "react";
const CommitVorschlagAgent = () => {
    const [vorschlag, setVorschlag] = useState("");
    useEffect(() => {
        const snapshot = localStorage.getItem("system-log.md");
        if (snapshot) {
            setVorschlag("docs: system-log.md aktualisiert");
        }
        else {
            setVorschlag("📭 Noch kein Commitvorschlag verfügbar");
        }
    }, []);
    return (_jsxs("div", { style: { marginTop: "1rem" }, children: [_jsx("strong", { children: "\uD83D\uDCC4 Commit-Vorschlag" }), _jsx("pre", { children: vorschlag })] }));
};
export default CommitVorschlagAgent;
