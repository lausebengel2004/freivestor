// src/agenten/dev/utils/generateAgentenManifestFromActive.ts
import fs from "fs";
import path from "path";
import { AgentenEintrag } from "../agentenManifest"; // relativer Pfad!
import { validateAgentenManifest } from "../meta/validateAgentenManifest";


const agentenRoot = path.resolve("src/agenten/dev");
const ausgabeDatei = path.join(agentenRoot, "agentenManifest.generated.ts");

const gültigeTypen = ["system", "meta", "tool", "diagnose"];
const standardRollen = ["entwickler"];

type Options = {
  dryRun?: boolean;
  mergeWithExisting?: boolean;
};

function getAllAgentenDateien(): string[] {
  const dateien: string[] = [];

  for (const typ of gültigeTypen) {
    const verzeichnis = path.join(agentenRoot, typ);
    if (fs.existsSync(verzeichnis)) {
      const files = fs.readdirSync(verzeichnis).filter(f => f.endsWith("Agent.ts"));
      files.forEach(f => dateien.push(path.join(verzeichnis, f)));
    }
  }

  return dateien;
}

function parseAgentDateipfad(pfad: string): AgentenEintrag {
  const parts = pfad.split(path.sep);
  const typ = parts[parts.length - 2] as AgentenEintrag["typ"];
  const dateiname = path.basename(pfad, ".ts");
  const id = dateiname.replace("Agent", "");
  const diagnoseFaehig = typ === "diagnose";
  const name = id.replace(/([A-Z])/g, " $1").trim();

  return {
    id,
    name,
    typ,
    sichtbar: true,
    autostart: false,
    rollen: [...standardRollen],
    diagnoseFaehig,
  };
}

// 🧩 Für den CLI-Durchlauf oder Debug
export async function generateAgentenManifestFromActive(options: Options = {}) {
  const { dryRun = true, mergeWithExisting = false } = options;

  const dateien = getAllAgentenDateien();
  const neueEintraege = dateien.map(parseAgentDateipfad);

  if (dryRun) {
    console.log("🔍 Vorschau (Dry Run) – folgende Agenten werden erkannt:\n");
    neueEintraege.forEach(entry => {
      console.log(`- ${entry.id} [${entry.typ}]`);
    });
    return;
  }

  await generateAgentenManifestDirect(neueEintraege, { mergeWithExisting });
}

// 🧩 Für das UI-Panel (liefert erkannte Agenten)
export async function scanActiveAgents(): Promise<AgentenEintrag[]> {
  const dateien = getAllAgentenDateien();
  return dateien.map(parseAgentDateipfad);
}

// 🧩 Für das UI-Panel (generiert direkt Manifest aus UI-Daten)
export async function generateAgentenManifestDirect(
  eintraege: AgentenEintrag[],
  options: { mergeWithExisting?: boolean } = {}
) {
  const { mergeWithExisting = false } = options;
  let manifestFinal = [...eintraege];

  if (mergeWithExisting && fs.existsSync(path.join(agentenRoot, "agentenManifest.ts"))) {
    const bestehendesManifest = require(path.join(agentenRoot, "agentenManifest.ts"));
    const bestehendeMap = new Map(bestehendesManifest.agenten.map((a: AgentenEintrag) => [a.id, a]));
    eintraege.forEach(e => bestehendeMap.set(e.id, e));
    manifestFinal = Array.from(bestehendeMap.values());
  }

  const exportText = `// Auto-generiert am ${new Date().toISOString()}
import { AgentenEintrag } from "./agentenManifest";

export const agenten: AgentenEintrag[] = ${JSON.stringify(manifestFinal, null, 2)};
`;

  fs.writeFileSync(ausgabeDatei, exportText, "utf-8");
  console.log(`✅ AgentenManifest gespeichert unter: ${ausgabeDatei}`);

  // Validierung
  validateAgentenManifest({ agenten: manifestFinal });
}
