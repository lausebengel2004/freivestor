import fs from "fs";
import path from "path";
import { agentenMetaMap } from "../agentenMetaMap";
const outPath = path.resolve("src/meta/agenten-overview.md");
export function generateAgentenDoku() {
    const date = new Date().toISOString().split("T")[0];
    let md = `# 🧠 FreiVestor – Agentenübersicht\n\n`;
    md += `**Letzte Aktualisierung:** ${date}\n\n`;
    md += "| Name | Typ | Kontext | Sichtbar | Diagnosefähig |\n";
    md += "|------|-----|---------|----------|----------------|\n";
    for (const agent of agentenMetaMap) {
        md += `| \`${agent.name}\` | ${agent.typ} | ${agent.kontext} | ${agent.sichtbar ? "✅" : "❌"} | ${agent.diagnosefähig ? "✅" : "-"} |\n`;
    }
    md += `\n---\n_Generiert durch AgentenMetaMap._`;
    fs.writeFileSync(outPath, md, "utf-8");
    console.log("📄 agenten-overview.md erfolgreich erzeugt.");
}
