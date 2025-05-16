// src/agenten/dev/tools/AgentenManifestGeneratorAgent.ts
const agent: import("../agentenManifest").AgentenEintrag = {
  id: "AgentenManifestGenerator",
  name: "Manifest Generator",
  typ: "tool", // bleibt als Typ "tool", obwohl Ordner "tools" heißt
  sichtbar: true,
  autostart: false,
  rollen: ["entwickler"],
  diagnoseFaehig: false,
};

export default agent;
