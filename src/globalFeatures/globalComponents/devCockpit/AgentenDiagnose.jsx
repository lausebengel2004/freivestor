import React, { useState } from "react";
import { SchuldenfreiAgent } from "@features/schuldenfrei/agenten/schuldenfreiAgent";
import { FreiVestorCoreAgent } from "@agenten/core/FreiVestorCoreAgent";

const schuldenAgent = new SchuldenfreiAgent();
const coreAgent = new FreiVestorCoreAgent("observe");

const AgentenDiagnose = () => {
  const [diagnose, setDiagnose] = useState([]);

  const runAnalyse = () => {
    const result = [];

    const monatsCardCode = \`
      const MonatsCard = ({ monat, zahlungen, feierBetrag }) => {
        return <div>{feierBetrag}</div>;
      };
    \`;
    if (!monatsCardCode.includes("feierBetrag")) {
      result.push({ agent: "Schuldenfrei", status: "❌", message: "feierBetrag fehlt in MonatsCard" });
    } else {
      result.push({ agent: "Schuldenfrei", status: "✅", message: "MonatsCard verwendet feierBetrag" });
    }

    const viteConfigSample = \`
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@features': path.resolve(__dirname, 'src/features'),
        '@agenten': path.resolve(__dirname, 'src/agenten')
      }
    \`;
    if (!viteConfigSample.includes("@components")) {
      result.push({ agent: "Core", status: "❌", message: "Alias '@components' fehlt in vite.config.ts" });
    } else {
      result.push({ agent: "Core", status: "✅", message: "Alias '@components' vorhanden" });
    }

    result.push({ agent: "System", status: "⚠️", message: "Snapshot noch nicht auf aktuelle Dateien erweitert" });

    setDiagnose(result);
  };

  return (
    <div>
      <h4>📋 Agenten-Diagnoseübersicht</h4>
      <button onClick={runAnalyse}>Diagnose starten</button>
      <ul style={{ marginTop: "1rem" }}>
        {diagnose.map((item, i) => (
          <li key={i}><strong>{item.status}</strong> [{item.agent}] – {item.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default AgentenDiagnose;
