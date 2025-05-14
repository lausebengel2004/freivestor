import { agentenManifest } from "./agentenManifest";
import fs from "fs";
import path from "path";

const dashboardPath = path.resolve(__dirname, "../../../meta/agenten-dashboard.md");

function getStatus(agent) {
  if (agent.sichtbar) return "✅ sichtbar";
  if (agent.autostart) return "✅ eingebunden";
  return "⚠️ passiv";
}

export function updateAgentenDashboard() {
  const date = new Date().toISOString().split("T")[0];
  let md = "# 🧠 FreiVestor Agenten-Dashboard\n\n";
  md += "**Release-Stand:** auto\n";
  md += `**Letzte Aktualisierung:** ${date}\n`;
  md += "**Quelle:** agentenManifest.ts\n\n`;
  md += "## ✅ Aktive Agenten\n\n";
  md += "| Agent | Pfad | Trigger | Status |\n";
  md += "|-------|------|---------|--------|\n";

  for (const agent of agentenManifest) {
    const name = "`" + agent.name + "`";
    const pfad = "`src/agenten/" + agent.importPfad + ".ts(x)`";
    const trigger = agent.autostart ? "Autostart" : agent.sichtbar ? "DevCockpit UI" : "-";
    const status = getStatus(agent);
    md += `| ${name} | ${pfad} | ${trigger} | ${status} |\n`;
  }

  md += "\n---\n";
  md += "_Diese Datei wurde automatisch aus dem AgentenManifest erstellt._\n";

  fs.writeFileSync(dashboardPath, md, "utf-8");
  console.log("📋 agenten-dashboard.md aktualisiert.");
}
