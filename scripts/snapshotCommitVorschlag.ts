// scripts/snapshotCommitVorschlag.ts
import CommitMonitorAgent from "../src/agenten/dev/system/CommitMonitorAgent";

(async () => {
  console.log("🔁 Starte Commit-Vorschlag Snapshot...");
  const vorschlag = await CommitMonitorAgent.run();
  console.log("\n🧠 Vorschlag:\n\n" + vorschlag);
})();
