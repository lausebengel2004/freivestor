import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
const DiagnoseDownloadButton = () => {
    const handleDownload = () => {
        const content = localStorage.getItem("diagnose-markdown");
        if (!content)
            return alert("Keine Diagnose gefunden.");
        const blob = new Blob([content], { type: "text/markdown" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "diagnose.md";
        link.click();
        URL.revokeObjectURL(url);
    };
    return _jsx("button", { onClick: handleDownload, children: "\uD83D\uDCE5 Diagnose herunterladen" });
};
export default DiagnoseDownloadButton;
