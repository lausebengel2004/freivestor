// scripts/generateGitStatus.ts
import * as fs from "fs";
import * as path from "path";
import simpleGit from "simple-git";

const git = simpleGit();

async function generateStatus() {
  try {
    const status = await git.status();

    const result = {
      created: status.created,
      modified: status.modified,
      deleted: status.deleted,
      staged: status.staged,
      untracked: status.not_added,
    };

    const outputPath = path.resolve("public/gitstatus.json");
    fs.writeFileSync(outputPath, JSON.stringify(result, null, 2));

    console.log("✅ Git-Status exportiert nach:", outputPath);
  } catch (err) {
    console.error("❌ Fehler beim Generieren des Git-Status:", err);
  }
}

generateStatus();
