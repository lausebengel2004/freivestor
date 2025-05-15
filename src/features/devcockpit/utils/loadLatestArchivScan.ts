// Browser-kompatibler Simulationscode (nur bei Vite-Import)
export async function loadLatestArchivScan(): Promise<string | null> {
  const scans = import.meta.glob("/src/meta/archivberichte/archivscan_*.md", { as: "raw", eager: true });
  const files = Object.entries(scans)
    .map(([path, content]) => ({ path, content }))
    .sort((a, b) => b.path.localeCompare(a.path)); // neueste oben

  return files.length > 0 ? (files[0].content as string) : null;
}
