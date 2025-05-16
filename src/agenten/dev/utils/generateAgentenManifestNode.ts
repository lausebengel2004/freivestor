// src/agenten/dev/utils/generateAgentenManifestNode.ts
import fs from "fs";
import path from "path";
import { AgentenEintrag } from "@agenten/dev/agentenManifest";
import { validateAgentenManifest } from "./validateAgentenManifest";

const agentenRoot = path.resolve("src/agenten/dev");
const ausgabeDatei = path.join(agentenRoot, "agentenManifest.generated.ts");

const gültigeTypen = ["system", "meta", "tool", "diagnose"];
const standardRollen = ["entwickler"];

export function parseAgentDateipfad(pfad: string): AgentenEintrag {
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

  validateAgentenManifest({ agenten: manifestFinal });
}
