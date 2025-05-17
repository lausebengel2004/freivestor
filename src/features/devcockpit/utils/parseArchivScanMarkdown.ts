export function parseArchivScanMarkdown(md: string): string[][] {
  const rows: string[][] = [];
  const lines = md.split("\n");

  for (const line of lines) {
    const match = line.match(/\|\s*(.*?)\s*\|\s*(.*?)\s*\|\s*(.*?)\s*\|\s*(.*?)\s*\|\s*(.*?)\s*\|/);
    if (match) {
      rows.push([match[1], match[2], match[3], match[4], match[5]]);
    }
  }

  return rows;
}
