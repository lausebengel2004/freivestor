import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/features/devcockpit/ui/GitStatusAnzeige.tsx
import React, { useEffect, useState } from "react";
const GitStatusAnzeige = () => {
    const [status, setStatus] = useState(null);
    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}gitstatus.json`)
            .then((res) => {
            if (!res.ok)
                throw new Error("Datei nicht gefunden");
            return res.json();
        })
            .then((data) => setStatus(data))
            .catch((err) => {
            console.warn("⚠️ Fehler beim Laden von gitstatus.json:", err.message);
            setStatus(null); // oder setStatus({ created: [], ... })
        });
    }, []);
    if (!status)
        return _jsx("p", { children: "\u23F3 Git-Status wird geladen \u2026" });
    const renderList = (title, list, icon) => list.length > 0 && (_jsxs("div", { children: [_jsxs("h4", { children: [icon, " ", title] }), _jsx("ul", { children: list.map((f, i) => _jsx("li", { children: _jsx("code", { children: f }) }, i)) })] }));
    return (_jsxs("div", { children: [_jsx("h3", { children: "\uD83D\uDCC2 Git-Dateistatus" }), renderList("Neu erstellt", status.created, "🟢"), renderList("Geändert", status.modified, "🟡"), renderList("Gelöscht", status.deleted, "🔴"), renderList("Gestaged", status.staged, "🔵"), renderList("Untracked", status.untracked, "⚪")] }));
};
export default GitStatusAnzeige;
