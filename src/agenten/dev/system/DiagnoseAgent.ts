// src/agenten/dev/system/DiagnoseAgent.ts
import { routerDefinition } from "@router";
import { logAgentenMeldung } from "@agenten/dev/agentenMeldungsLog";

const DiagnoseAgent = {
  name: "DiagnoseAgent",
  status: "⏸ Inaktiv",

  run() {
    this.status = "🟢 Aktiv";
    console.log("🧠 DiagnoseAgent gestartet");
    this.diagnose();
  },

  stop() {
    this.status = "⏸ Inaktiv";
    console.log("🛑 DiagnoseAgent gestoppt");
  },

  diagnose() {
    // 1) Routen + Storage-Keys sammeln
    const paths = routerDefinition.map((r) => r.path);
    const keys = Object.keys(localStorage);
    const gespeicherteStatus = keys
      .filter((key) => key.includes("status"))
      .map((key) => `- \`${key}\`: \`${localStorage.getItem(key)}\``);

    // 2) Markdown bauen
    const markdown = [
      "# 🧠 Diagnosebericht",
      `**Routen (${paths.length})**`,
      paths.length > 0
        ? paths.map((p) => `- \`${p}\``).join("\n")
        : "- *(keine gefunden)*",
      "",
      `**LocalStorage Keys (${keys.length})**`,
      keys.length > 0
        ? keys.map((k) => `- \`${k}\``).join("\n")
        : "- *(leer)*",
      "",
      "**Agentenstatus**",
      gespeicherteStatus.length > 0
        ? gespeicherteStatus.join("\n")
        : "- *(keine erkannt)*",
      "",
      `_Bericht erstellt: ${new Date().toLocaleString()}_`,
    ].join("\n");

    // 3) In localStorage ablegen
    localStorage.setItem("diagnose-markdown", markdown);
    console.log(
      "📄 DiagnoseAgent Markdown-Export gespeichert unter localStorage key: diagnose-markdown"
    );

    // 4) LastRun-Timestamp setzen
    const tsDiag = new Date().toISOString();
    localStorage.setItem("agenten::diagnose::lastRun", tsDiag);
    console.log(`✅ DiagnoseAgent LastRun gesetzt: ${tsDiag}`);

    // 5) Agenten-Meldung ins Log
    logAgentenMeldung("DiagnoseAgent", "Diagnose durchgeführt und gespeichert.");
  },
};

export default DiagnoseAgent;
