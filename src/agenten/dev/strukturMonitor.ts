import { agentenManifest } from "./agentenManifest";
import fs from "fs";
import path from "path";

const AGENTEN_ROOT = path.resolve(__dirname);
const KNOWN_PATHS = new Set(agentenManifest.map(agent => agent.importPfad + ".ts"));

function walk(dir: string, collected: string[] = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, collected);
    } else if (entry.name.endsWith(".ts") || entry.name.endsWith(".tsx") || entry.name.endsWith(".jsx")) {
      const relative = path.relative(AGENTEN_ROOT, fullPath).replace(/\\/g, "/").replace(/\.jsx?$/, ".ts");
      collected.push(relative.replace(/\.tsx?$/, ".ts"));
    }
  }
  return collected;
}

export function checkAgentenStruktur() {
  const allFiles = walk(AGENTEN_ROOT);
  const unknown = allFiles.filter(file => !KNOWN_PATHS.has(file));

  if (unknown.length === 0) {
    console.log("✅ Alle Agenten sind im Manifest registriert.");
  } else {
    console.warn("❌ Warnung: Folgende Agenten fehlen im Manifest:");
    unknown.forEach(f => console.warn(" - " + f));
  }
}
