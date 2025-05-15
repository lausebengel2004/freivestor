export function generateCommitTextFromArchivScan(bericht: string): string {
  const zeilen = bericht.split("\n").filter(zeile => zeile.startsWith("|") && !zeile.includes("Datei"));

  let kommentar = 0;
  let keinExport = 0;
  let leer = 0;
  let aktiv = 0;

  const relevanteEinträge: string[] = [];

  for (const zeile of zeilen) {
    const spalten = zeile.split("|").map(s => s.trim());
    const dateiname = spalten[1];
    const status = spalten[4];
    const empfehlung = spalten[5];

    if (status === "kommentar") kommentar++;
    if (status === "kein Export") keinExport++;
    if (status === "leer") leer++;
    if (status === "aktiv") aktiv++;

    if (empfehlung === "archivieren" || empfehlung === "prüfen") {
      relevanteEinträge.push(`- ${dateiname} → ${empfehlung}`);
    }
  }

  const heute = new Date().toISOString().split("T")[0];

  const header = `chore: ArchivScan ${heute} · ${relevanteEinträge.length} geprüft`;
  const details = relevanteEinträge.join("\n");

  return `${header}\n\n${details}`;
}
