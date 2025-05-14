import simpleGit from "simple-git";
import path from "path";

const git = simpleGit();

async function generateCommitMessage() {
  const status = await git.status();
  const changedFiles = [...status.modified, ...status.created, ...status.deleted];

  const lines: string[] = [];
  const summary = {
    refactor: [],
    chore: [],
    style: [],
    feat: [],
    fix: [],
    unknown: []
  };

  for (const file of changedFiles) {
    if (file.includes("DevCockpitPanel")) {
      summary.refactor.push("♻️ Tab-System im DevCockpit");
    } else if (file.includes("CommitMonitor") || file.includes("gitstatus")) {
      summary.chore.push("📝 Git/Commit-Monitor aktualisiert");
    } else if (file.endsWith(".css")) {
      summary.style.push("🎨 Styles angepasst");
    } else if (file.includes("features") || file.includes("ui")) {
      summary.feat.push("✨ UI-Funktion erweitert");
    } else {
      summary.unknown.push(`🔧 ${file}`);
    }
  }

  // Commit-Zeile bauen
  const titleParts = [];
  if (summary.refactor.length) titleParts.push("refactor");
  if (summary.feat.length) titleParts.push("feat");
  if (summary.chore.length) titleParts.push("chore");

  const commitTitle = `${titleParts.join(", ")}: ${summary.refactor[0] || summary.feat[0] || summary.chore[0]}`;

  const commitBody = Object.entries(summary)
    .filter(([_, list]) => list.length > 0)
    .map(([key, items]) => `### ${key}\n${items.map(i => `- ${i}`).join("\n")}`)
    .join("\n\n");

  console.log(`\n📦 CommitFusion Vorschlag:\n`);
  console.log(`🔖 Commit-Zeile:\n${commitTitle}\n`);
  console.log(`📝 Commit-Beschreibung:\n${commitBody}\n`);
}

generateCommitMessage();
