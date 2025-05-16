export function extractScanTimestamp(md: string): string | null {
  const match = md.match(/<!--\s*SCAN:\s*(.*?)\s*-->/);
  return match ? match[1] : null;
}
