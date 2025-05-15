import React, { useMemo } from "react";
import { agentenManifest } from "@agenten/dev/agentenManifest";
import { validateAgentenManifest } from "@agenten/dev/meta/validateAgentenManifest";
import { useRolle } from "@context/RollenContext";
import { useSystemLog } from "@features/devcockpit/devCockpitContext";

const AgentenStatusPanel: React.FC = () => {
  const rolle = useRolle();
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

  // ✅ Absichernder Filter
  const agenten = agentenManifest.filter(
    agent => Array.isArray(agent.rollen) && agent.rollen.includes(rolle)
  );

  return (
    <div style={{ marginTop: "1rem" }}>
      <h4>📊 Agentenübersicht</h4>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
        <thead style={{ background: "#eee" }}>
          <tr>
            <th style={{ textAlign: "left", padding: "0.5rem" }}>Agent</th>
            <th>Typ</th>
            <th>Sichtbar</th>
            <th>Autostart</th>
            <th>Diagnose</th>
            <th>Letzte Aktivität</th>
          </tr>
        </thead>
        <tbody>
          {agenten.map(agent => (
            <tr key={agent.id} style={{ borderBottom: "1px solid #ccc" }}>
              <td style={{ padding: "0.3rem" }}>{agent.name}</td>
              <td>{agent.typ ?? "–"}</td>
              <td style={{ textAlign: "center" }}>{agent.sichtbar ? "🟢" : "⚫"}</td>
              <td style={{ textAlign: "center" }}>{agent.autostart ? "✅" : "❌"}</td>
              <td style={{ textAlign: "center" }}>{agent.diagnosefähig ? "🧪" : "-"}</td>
              <td>{lastSeen[agent.name] ?? "–"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AgentenStatusPanel;
