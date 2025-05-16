// src/agenten/dev/meta/validateAgentenManifest.ts

import { AgentenEintrag } from "../agentenManifest";

/**
 * Prüft das übergebene Manifest und liefert eine Liste von Fehlermeldungen.
 * Akzeptiert entweder direkt ein Array von Agenten oder ein Objekt { agenten: AgentenEintrag[] }.
 */
export function validateAgentenManifest(
  input: AgentenEintrag[] | { agenten: AgentenEintrag[] }
): string[] {
  // Extrahiere das eigentliche Array
  const manifest: AgentenEintrag[] = Array.isArray(input) ? input : input.agenten || [];

  const fehler: string[] = [];
  const gültigeTypen = ["system", "meta", "tool", "diagnose"];

  manifest.forEach((agent, i) => {
    if (!agent.id || typeof agent.id !== "string") {
      fehler.push(`🔴 Agent[${i}] fehlt 'id' oder ist kein String`);
    }
    if (!agent.name || typeof agent.name !== "string") {
      fehler.push(`🔴 Agent[${i}] fehlt 'name'`);
    }
    if (!Array.isArray(agent.rollen)) {
      fehler.push(`🔴 Agent[${agent.name || i}] hat kein gültiges 'rollen'-Array`);
    }
    if (!gültigeTypen.includes(agent.typ)) {
      fehler.push(`⚠️ Agent[${agent.name}] hat unbekannten Typ '${agent.typ}'`);
    }
  });

  return fehler;
}
