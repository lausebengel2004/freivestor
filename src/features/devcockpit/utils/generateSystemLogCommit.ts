export function createCommitTextFromSystemLog(logs: string[]): string {
  // Relevante Schlüsselbegriffe (erweiterbar)
  const triggerPattern = /gespeichert|erstellt|gelöscht|archiviert|verschoben|aktualisiert|exportiert|diagnose/i;

  const relevante = logs.filter((line) =>
    triggerPattern.test(line)
  );

  if (relevante.length === 0) {
    return "⚠️ Keine Commit-relevanten Systemänderungen erkannt.";
  }

  const heute = new Date().toISOString().split("T")[0];
  const title = `chore: Systemaktivitäten ${heute} · ${relevante.length} Vorgänge`;
  const body = relevante.map((line) => `- ${line}`).join("\n");

  return `${title}\n\n${body}`;
}
