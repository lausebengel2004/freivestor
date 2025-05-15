export function validateAgentenManifest(manifest: any[]): string[] {
  const fehler: string[] = [];

  manifest.forEach((agent, i) => {
    if (!agent.id || typeof agent.id !== "string") {
      fehler.push(`🔴 Agent[${i}] fehlt 'id' oder ist kein String`);
    }
    if (!agent.name || typeof agent.name !== "string") {
      fehler.push(`🔴 Agent[${i}] fehlt 'name'`);
    }
    if (!Array.isArray(agent.rollen)) {
      fehler.push(`🔴 Agent[${agent.name || i}] hat kein gültiges rollen-Array`);
    }
    if (agent.typ && !["system", "meta", "tool", "diagnose"].includes(agent.typ)) {
      fehler.push(`⚠️ Agent[${agent.name}] hat unbekannten Typ: '${agent.typ}'`);
    }
  });

  return fehler;
}
