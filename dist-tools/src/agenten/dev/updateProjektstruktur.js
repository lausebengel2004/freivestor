import { agentenManifest } from "./agentenManifest";
import fs from "fs";
import path from "path";
const outputPath = path.resolve(__dirname, "../../../projektstruktur.md");
export function updateProjektstruktur() {
    let output = "# 📘 Projektstruktur: Agentenübersicht\n\n";
    const gruppen = { meta: [], system: [], user: [] };
    for (const agent of agentenManifest) {
        gruppen[agent.rolle].push(agent);
    }
    for (const rolle in gruppen) {
        const agenten = gruppen[rolle];
        if (agenten.length === 0)
            continue;
        output += `## ${rolle.charAt(0).toUpperCase() + rolle.slice(1)}-Agenten\n`;
        for (const agent of agenten) {
            output += `- **${agent.name}**\n`;
            output += `  - Pfad: \`src/agenten/${agent.importPfad}.ts(x)\`\n`;
            output += `  - Sichtbar im UI: ${agent.sichtbar ? "✅" : "❌"}\n`;
            output += `  - Autostart: ${agent.autostart ? "✅" : "❌"}\n`;
            output += `  - Diagnosefähig: ${agent.diagnosefähig ? "✅" : "❌"}\n\n`;
        }
        output += "---\n\n";
    }
    fs.writeFileSync(outputPath, output, "utf-8");
    console.log("📄 projektstruktur.md aktualisiert.");
}
