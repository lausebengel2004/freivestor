export function generateArchivScanMarkdown(rows: string[][]): string {
  const now = new Date().toISOString();
  let md = `# 🧹 ArchivScan – Ergebnisübersicht\n\n`;
  md += `<!-- SCAN: ${now} -->\n\n`;
  md += `| Datei | Typ | Größe | Status | Empfehlung |\n`;
  md += `|-------|-----|--------|--------|-------------|\n`;

  for (const row of rows) {
    const [pfad, typ, größe, status = "-", empfehlung = "-"] = row;
    md += `| ${pfad} | ${typ} | ${größe} | ${status} | ${empfehlung} |\n`;
  }

  return md;
}
