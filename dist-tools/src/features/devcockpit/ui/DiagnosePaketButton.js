import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";
const DiagnosePaketButton = () => {
    const handleZip = async () => {
        const zip = new JSZip();
        const files = ["system-log.md", "diagnose-markdown"];
        files.forEach(key => {
            const content = localStorage.getItem(key);
            if (content)
                zip.file(key + ".md", content);
        });
        const blob = await zip.generateAsync({ type: "blob" });
        saveAs(blob, "diagnosepaket.zip");
    };
    return _jsx("button", { onClick: handleZip, children: "\uD83D\uDCE6 Diagnosepaket (.zip)" });
};
export default DiagnosePaketButton;
