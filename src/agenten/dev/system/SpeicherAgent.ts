// src/agenten/dev/system/SpeicherAgent.ts
import fs from "fs";
import path from "path";

// Konfigurierbare Speicheraktionen:
const speicherAktionen = [
  {
    key: "agenten::manifest::pending",
    zielDatei: path.resolve("src/agenten/dev/agentenManifest.generated.ts"),
    kommentar: "🛠 AgentenManifest gespeichert",
  },
  // Beispiel für spätere Erweiterung:
  // {
  //   key: "agenten::diagnose::md",
  //   zielDatei: path.resolve("export/diagnose.md"),
  //   kommentar: "📄 Diagnose Markdown gespeichert",
  // },
];

export default function SpeicherAgent() {
  console.log("🚀 SpeicherAgent gestartet");

  const interval = setInterval(() => {
    speicherAktionen.forEach(({ key, zielDatei, kommentar }) => {
      const inhalt = localStorage.getItem(key);
      if (inhalt) {
        try {
          fs.writeFileSync(zielDatei, inhalt, "utf-8");
          localStorage.removeItem(key);
          console.log(`${kommentar}: ${zielDatei}`);
        } catch (err) {
          console.error(`❌ Fehler beim Speichern von ${zielDatei}`, err);
        }
      }
    });
  }, 3000); // alle 3 Sekunden prüfen

  return () => clearInterval(interval); // Agent kann bei Bedarf gestoppt werden
}
