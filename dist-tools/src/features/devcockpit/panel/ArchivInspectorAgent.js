import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from "react";
import { ARCHIV_INSPEKTOR_CONFIG } from "../config/archiv-inspector.config";
import { generateArchivScanMarkdown } from "../utils/generateArchivScanMarkdown";
// Simulierter Dummy-Scan basierend auf Konfiguration
const simulateScan = () => {
    const dummyResults = [];
    ARCHIV_INSPEKTOR_CONFIG.ordner.forEach((ordner) => {
        ARCHIV_INSPEKTOR_CONFIG.dateitypen.forEach((typ) => {
            dummyResults.push([
                `${ordner}AlteDatei${typ}`,
                typ.replace(".", ""),
                "0 B",
                "leer",
                "archivieren",
            ]);
            dummyResults.push([
                `${ordner}AktiveKomponente${typ}`,
                typ.replace(".", ""),
                "3.5 KB",
                "aktiv",
                "behalten",
            ]);
        });
    });
    return dummyResults;
};
const ArchivInspectorAgent = () => {
    const [scanResults, setScanResults] = useState(null);
    const handleScan = () => {
        const results = simulateScan();
        setScanResults(results);
    };
    const handleExport = () => {
        if (!scanResults)
            return;
        const content = generateArchivScanMarkdown(scanResults);
        const blob = new Blob([content], { type: "text/markdown" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "archivscan_ergebnis.md";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (_jsxs("div", { style: { border: "1px solid #ccc", borderRadius: "8px", padding: "1rem", marginBottom: "1rem", background: "#fdfdfd" }, children: [_jsx("h4", { children: "\uD83E\uDDF9 ArchivInspectorAgent" }), _jsxs("p", { children: ["Konfiguration erkannt: ", _jsx("strong", { children: ARCHIV_INSPEKTOR_CONFIG.ordner.length }), " Ordner, ", _jsx("strong", { children: ARCHIV_INSPEKTOR_CONFIG.dateitypen.length }), " Dateitypen"] }), _jsxs("div", { style: { marginBottom: "1rem" }, children: [_jsx("button", { onClick: handleScan, style: { marginRight: "1rem", marginTop: "0.5rem" }, children: "\uD83D\uDD0D Scan starten" }), _jsx("button", { onClick: handleExport, disabled: !scanResults, style: { marginTop: "0.5rem" }, children: "\uD83D\uDCE5 Export als .md" })] }), scanResults && (_jsx("div", { style: { marginTop: "1rem" }, children: _jsxs("table", { style: { width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }, children: [_jsx("thead", { children: _jsxs("tr", { style: { background: "#eee" }, children: [_jsx("th", { children: "Datei" }), _jsx("th", { children: "Typ" }), _jsx("th", { children: "Gr\u00F6\u00DFe" }), _jsx("th", { children: "Status" }), _jsx("th", { children: "Empfehlung" })] }) }), _jsx("tbody", { children: scanResults.map((row, i) => (_jsx("tr", { style: { borderBottom: "1px solid #ccc" }, children: row.map((cell, j) => (_jsx("td", { style: { padding: "0.3rem" }, children: cell }, j))) }, i))) })] }) }))] }));
};
export default ArchivInspectorAgent;
