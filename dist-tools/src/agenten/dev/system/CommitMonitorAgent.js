// @agenten/dev/system/CommitMonitorAgent.ts
import * as fs from "fs";
import * as path from "path";
const CommitMonitorAgent = {
    async run() {
        console.log("🔍 CommitMonitorAgent gestartet.");
        const vorschlag = await this.buildCommitText();
        this.saveAsMarkdown(vorschlag);
        return vorschlag;
    },
    async buildCommitText() {
        let gitstatusRaw = "";
        try {
            if (typeof window === "undefined") {
                const filePath = path.resolve("public/gitstatus.json");
                gitstatusRaw = fs.readFileSync(filePath, "utf-8");
            }
            else {
                const base = window.location.pathname.startsWith("/freivestor") ? "/freivestor" : "";
                const res = await fetch(`${base}/gitstatus.json`);
                gitstatusRaw = await res.text();
            }
            const gitstatus = JSON.parse(gitstatusRaw);
            const lines = [];
            const types = [];
            const feat = gitstatus.created || [];
            const fix = gitstatus.modified?.filter(f => f.includes("bug") || f.includes("fix")) || [];
            const refactor = gitstatus.modified?.filter(f => !fix.includes(f)) || [];
            const chore = [...(gitstatus.staged || []), ...(gitstatus.untracked || [])];
            const deleted = gitstatus.deleted || [];
            if (feat.length) {
                types.push("feat");
                lines.push(`feat: Neue Dateien erstellt\n` + feat.map(f => `- 🆕 ${f}`).join("\n"));
            }
            if (fix.length) {
                types.push("fix");
                lines.push(`fix: Fehlerbehebungen\n` + fix.map(f => `- 🛠️ ${f}`).join("\n"));
            }
            if (refactor.length) {
                types.push("refactor");
                lines.push(`refactor: Bestehender Code verändert\n` + refactor.map(f => `- ✏️ ${f}`).join("\n"));
            }
            if (deleted.length) {
                types.push("chore");
                lines.push(`chore: Dateien gelöscht\n` + deleted.map(f => `- 🗑️ ${f}`).join("\n"));
            }
            if (chore.length) {
                types.push("chore");
                lines.push(`chore: Sonstige Änderungen\n` + chore.map(f => `- 🔧 ${f}`).join("\n"));
            }
            const summary = types.length > 0 ? `${types[0]}: Automatisch erkannte Änderungen` : "chore: Leerer Commit";
            const body = lines.length > 0 ? lines.join("\n\n") : "📭 Keine Änderungen erkannt.";
            return { summary, body };
        }
        catch (err) {
            console.warn("❌ Fehler beim Einlesen von gitstatus.json", err);
            return {
                summary: "chore: Fehler beim Vorschlag",
                body: "⚠️ Fehler beim Lesen oder Verarbeiten von gitstatus.json"
            };
        }
    },
    saveAsMarkdown({ summary, body }) {
        if (typeof window !== "undefined")
            return;
        const now = new Date();
        const timestamp = now.toISOString().replace(/[:]/g, "-").slice(0, 16);
        const filename = `vorschlag_${timestamp}.md`;
        const outputDir = path.resolve("src/meta/changelog");
        if (!fs.existsSync(outputDir))
            fs.mkdirSync(outputDir, { recursive: true });
        const fullPath = path.join(outputDir, filename);
        const content = `## ${summary}\n\n${body}`;
        fs.writeFileSync(fullPath, content, "utf-8");
        console.log("📝 Commit-Vorschlag gespeichert:", fullPath);
    }
};
export default CommitMonitorAgent;
