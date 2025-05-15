import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect } from "react";
const SystemLogViewer = () => {
    const [filter, setFilter] = useState("");
    const [content, setContent] = useState("");
    useEffect(() => {
        const raw = localStorage.getItem("system-log.md") || "";
        setContent(raw);
    }, []);
    const filtered = content
        .split("\n")
        .filter(line => line.toLowerCase().includes(filter.toLowerCase()))
        .join("\n");
    return (_jsxs("div", { style: { marginTop: "1rem" }, children: [_jsx("strong", { children: "\uD83D\uDCD8 Systemlog \u00DCbersicht" }), _jsx("input", { value: filter, onChange: (e) => setFilter(e.target.value), placeholder: "Filtern...", style: { width: "100%", marginBottom: "0.5rem" } }), _jsx("pre", { style: { background: "#eee", padding: "0.5rem" }, children: filtered || "Keine Einträge gefunden." })] }));
};
export default SystemLogViewer;
