// src/agenten/dev/core/AgentenSpeicherService.ts
import fs from "fs";
import path from "path";
import { LocalStorage } from "node-localstorage";

// 📁 Initialisiere Node-kompatiblen Speicherpfad
const nodeLocalStorage = new LocalStorage("./.agenten-cache");

type SpeicherJob = {
  key: string;
  zielPfad: string;
  kommentar?: string;
};

const jobs: SpeicherJob[] = [];

/**
 * Registriere einen Schreibjob für die Speicherbrücke
 */
export function registerSpeicherJob(key: string, zielPfad: string, kommentar?: string) {
  jobs.push({ key, zielPfad, kommentar });
}

/**
 * Starte die periodische Speicherbrücke
 */
export function startSpeicherBruecke(interval = 3000) {
  console.log("🧠 AgentenSpeicherBrücke gestartet…");

  setInterval(() => {
    jobs.forEach(({ key, zielPfad, kommentar }) => {
      const inhalt = nodeLocalStorage.getItem(key);
      if (inhalt) {
        try {
          fs.writeFileSync(path.resolve(zielPfad), inhalt, "utf-8");
          nodeLocalStorage.removeItem(key);
          console.log(`${kommentar || "💾 Gespeichert"} → ${zielPfad}`);
        } catch (err) {
          console.error(`❌ Fehler beim Schreiben von ${zielPfad}`, err);
        }
      }
    });
  }, interval);
}
