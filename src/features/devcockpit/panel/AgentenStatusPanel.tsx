// src/features/devcockpit/panel/AgentenStatusPanel.tsx

import React, { useMemo } from "react";
import { agentenManifest } from "@agenten/dev/agentenManifest";
import { validateAgentenManifest } from "@agenten/dev/meta/validateAgentenManifest";
import { useRolle } from "@context/RollenContext";
import { useSystemLog } from "@features/devcockpit/devCockpitContext";
import AgentenLebensanzeige from "@features/devcockpit/ui/AgentenLebensanzeige";

const AgentenStatusPanel: React.FC = () => {
  const { rolle } = useRolle();
  const { logs } = useSystemLog();

  // 🔍 Manifest validieren
  const fehler = validateAgentenManifest(agentenManifest);
  if (fehler.length > 0) {
    console.warn("🔍 Fehler im AgentenManifest:\n" + fehler.join("\n"));
    return (
      <div style={{ color: "red", padding: "1rem" }}>
        ❌ AgentenManifest enthält Fehler – siehe Konsole für Details.
      </div>
    );
  }

  // ⏱ Zeitstempel je Agent aus dem Log extrahieren
  const lastSeen: Record<string, string> = useMemo(() => {
    const result: Record<string, string> = {};

    logs.forEach(line => {
      const match = line.match(/^\[(\d{2}\.\d{2}\.\d{4}), (\d{2}:\d{2}:\d{2})\] (.+?):/);
      if (match) {
        const [, datum, zeit, agentName] = match;
        result[agentName] = `${datum} ${zeit}`;
      }
    });

    return result;
  }, [logs]);

  // 🔒 Nur passende Agenten je nach Rolle anzeigen
  const agenten = agentenManifest.filter(
    agent => Array.isArray(agent.rollen) && agent.rollen.includes(rolle)
  );

  return (
    <div style={{ marginTop: "1rem" }}>
      <h4>📊 Agentenstatus-Übersicht für Rolle <code>{rolle}</code></h4>

      {agenten.length === 0 && (
        <p style={{ fontStyle: "italic" }}>Keine Agenten für diese Rolle registriert.</p>
      )}

      {agenten.map((agent, index) => (
        <AgentenLebensanzeige
          key={index}
          name={agent.name}
          type={agent.typ ?? "–"}
          sichtbar={agent.sichtbar}
          startbar={agent.startbar ?? false}
          diagnosefähig={agent.diagnosefähig ?? false}
          letzteAktivität={lastSeen[agent.name]}
        />
      ))}
    </div>
  );
};

export default AgentenStatusPanel;
