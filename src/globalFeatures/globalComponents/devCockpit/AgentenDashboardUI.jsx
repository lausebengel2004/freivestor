import React from "react";

const agenten = [
  {
    name: "SchuldenfreiAgent",
    pfad: "src/features/schuldenfrei/schuldenfreiUtils/SchuldenfreiAgent.js",
    status: "✅ aktiv",
    aufgabe: "Props prüfen, Ideen interpretieren",
  },
  {
    name: "FreiVestorCoreAgent",
    pfad: "src/globalFeatures/globalUtils/agenten/FreiVestorCoreAgent.js",
    status: "✅ aktiv",
    aufgabe: "Alias + Routing prüfen",
  },
  {
    name: "agent-logger",
    pfad: "src/globalFeatures/globalUtils/agenten/agent-logger.js",
    status: "✅ eingebunden",
    aufgabe: "Logausgaben für alle Agentenaktionen",
  },
  {
    name: "agent-snapshot",
    pfad: "src/globalFeatures/globalUtils/agenten/agent-snapshot.json",
    status: "✅ eingebunden",
    aufgabe: "Vergleich mit Projektbasisstand",
  },
];

const AgentenDashboardUI = () => {
  return (
    <div style={{ marginTop: "2rem" }}>
      <h4>📊 Agenten-Dashboard (Live)</h4>
      <ul>
        {agenten.map((agent, index) => (
          <li key={index} style={{ marginBottom: "1rem" }}>
            <strong>{agent.status}</strong> – <code>{agent.name}</code>
            <br />
            <span style={{ fontSize: "0.9em", color: "#555" }}>
              📍 {agent.pfad}
              <br />🧠 {agent.aufgabe}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AgentenDashboardUI;
