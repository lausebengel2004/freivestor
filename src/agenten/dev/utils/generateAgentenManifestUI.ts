// src/agenten/dev/utils/generateAgentenManifestUI.ts
import { AgentenEintrag } from "@agenten/dev/agentenManifest";

export async function scanActiveAgents(): Promise<AgentenEintrag[]> {
  // Dummy-Implementierung oder import aus JSON-Datei oder später via fetch()
  // Aktuell verwenden wir weiterhin die statische Liste als Übergang

  const agenten: AgentenEintrag[] = [
    {
      id: "BeispielAgent",
      name: "Beispiel Agent",
      typ: "meta",
      sichtbar: true,
      autostart: false,
      rollen: ["entwickler"],
      diagnoseFaehig: false,
    },
  ];

  return agenten;
}
