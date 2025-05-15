import { loadLatestArchivScan } from "./loadLatestArchivScan";
import { generateCommitTextFromArchivScan } from "./generateCommitTextFromArchivScan";
import { createCommitTextFromSystemLog } from "./generateSystemLogCommit";

export async function generateUnifiedCommitSummary(logs: string[]): Promise<string> {
  const systemCommit = createCommitTextFromSystemLog(logs);

  const archiv = await loadLatestArchivScan();
  const archivText = archiv ? generateCommitTextFromArchivScan(archiv) : "";

  const archivBlock = archivText ? `\n\n📦 ArchivScan:\n\n${archivText}` : "";

  return `${systemCommit}${archivBlock}`;
}
