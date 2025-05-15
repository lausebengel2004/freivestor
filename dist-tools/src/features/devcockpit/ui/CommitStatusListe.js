import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @features/devcockpit/ui/CommitStatusListe.tsx
import React from "react";
// import { useCommitStatus } from "@features/devcockpit/hooks/useCommitStatus";
const CommitStatusListe = () => {
    const status = useCommitStatus();
    if (!status)
        return _jsx("p", { children: "\uD83D\uDD04 Lade Git-Status \u2026" });
    const renderList = (title, list, icon) => (list.length > 0 && (_jsxs("div", { children: [_jsxs("h4", { children: [icon, " ", title] }), _jsx("ul", { children: list.map((file, i) => (_jsx("li", { children: _jsx("code", { children: file }) }, i))) })] })));
    // return (
    _jsxs("div", { className: "commit-status-liste", children: [renderList("Neu erstellt", status.created, "🟢"), renderList("Geändert", status.modified, "🟡"), renderList("Gelöscht", status.deleted, "🔴"), renderList("Gestaged", status.staged, "🔵"), renderList("Untracked", status.untracked, "⚪")] });
};
;
;
export default CommitStatusListe;
