export function generateArchivScanMarkdown(scanResults) {
    const header = `# 🧹 ArchivScan – Ergebnisübersicht\n\n| Datei | Typ | Größe | Status | Empfehlung |\n|-------|-----|--------|--------|-------------|`;
    const rows = scanResults
        .map(row => `| ${row.join(" | ")} |`)
        .join("\n");
    return `${header}\n${rows}`;
}
