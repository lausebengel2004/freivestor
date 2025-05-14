// src/agenten/dev/release/prepareIndexCommit.ts
import { AgentenIndexUpdater } from "../meta/AgentenIndexUpdater";
import fs from "fs";
import simpleGit from "simple-git";
import path from "path";

const git = simpleGit();

async function run() {
  console.log("🔁 Starte automatische Manifest-Aktualisierung...");

  const result = await AgentenIndexUpdater.run();

  if (!result?.datei) {
    console.error("❌ Kein Inhalt erzeugt – Abbruch.");
    return;
  }

  const manifestPath = path.resolve("src/agenten/dev/agentenManifest.ts");

  try {
    fs.writeFileSync(manifestPath, result.datei, "utf-8");
    console.log("📝 agentenManifest.ts erfolgreich geschrieben.");

    await git.add(manifestPath);
    await git.commit("chore: 🔄 AgentenManifest automatisch aktualisiert");
    console.log("✅ Commit erfolgreich abgeschlossen.");
  } catch (err) {
    console.error("❌ Fehler beim Schreiben oder Committen:", err);
  }
}

run();
