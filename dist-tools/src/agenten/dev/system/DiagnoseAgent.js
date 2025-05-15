import { logAgentenMeldung } from "@agenten/dev/agentenMeldungsLog";
logAgentenMeldung("DiagnoseAgent", "Diagnose durchgeführt und gespeichert.");
// src/agenten/dev/system/DiagnoseAgent.ts
import { routerDefinition } from "@router";
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
        const paths = routerDefinition.map(r => r.path);
        const keys = Object.keys(localStorage);
        const gespeicherteStatus = keys
            .filter(key => key.includes("status"))
            .map(key => `- \`${key}\`: \`${localStorage.getItem(key)}\``);
        const markdown = [
            "# 🧠 Diagnosebericht",
            `**Routen (${paths.length})**`,
            paths.map(p => `- \`${p}\``).join("\n") || "- *(keine gefunden)*",
            "",
            `**LocalStorage Keys (${keys.length})**`,
            keys.map(k => `- \`${k}\``).join("\n") || "- *(leer)*",
            "",
            "**Agentenstatus**",
            gespeicherteStatus.length > 0
                ? gespeicherteStatus.join("\n")
                : "- *(keine erkannt)*",
            "",
            `_Bericht erstellt: ${new Date().toLocaleString()}_`
        ].join("\n");
        localStorage.setItem("diagnose-markdown", markdown);
        console.log("📄 DiagnoseAgent Markdown-Export gespeichert unter localStorage key: diagnose-markdown");
    }
};
export default DiagnoseAgent;
