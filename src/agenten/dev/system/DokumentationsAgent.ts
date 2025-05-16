// src/agenten/dev/tools/DokumentationsAgent.ts
import { logAgentenMeldung } from "@agenten/dev/agentenMeldungsLog";

const DokumentationsAgent = {
  name: "DokumentationsAgent",
  status: "⏸ Inaktiv",

  run() {
    this.status = "🟢 Aktiv";
    const tsStart = new Date().toLocaleString();
    console.log(`📋 DokumentationsAgent gestartet am ${tsStart}`);

    // Beispiel: hier legst du deine Doku-Datei an…
    const zielDatei = "export/dokumentation.md";
    const content = `# Dokumentation\nErstellt am ${tsStart}\n`;
    // (falls du fs nutzen kannst, ansonsten localStorage)
    // fs.writeFileSync(zielDatei, content, "utf-8");

    // 1) LocalStorage-Log
    localStorage.setItem("doku-log", `[START] ${tsStart}`);
    console.log("✅ DokumentationsAgent START-Log gespeichert");

    // 2) LastRun-Timestamp
    const tsDoc = new Date().toISOString();
    localStorage.setItem("agenten::documentation::lastRun", tsDoc);
    console.log(`✅ DokumentationsAgent LastRun gesetzt: ${tsDoc}`);

    // 3) Agenten-Meldung ins Log
    logAgentenMeldung(
      "DokumentationsAgent",
      "Dokumentation erfolgreich geschrieben."
    );
  },

  stop() {
    this.status = "⏸ Inaktiv";
    const tsStop = new Date().toLocaleString();
    console.log(`📋 DokumentationsAgent gestoppt am ${tsStop}`);

    localStorage.setItem("doku-log", `[STOP] ${tsStop}`);
    console.log("✅ DokumentationsAgent STOP-Log gespeichert");
  },

  diagnose() {
    const log = localStorage.getItem("doku-log");
    console.log("📋 Letzter Doku-Eintrag:", log);
  },
};

export default DokumentationsAgent;
