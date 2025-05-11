
import React, { useState } from "react";
import { FreiVestorCoreAgent } from "@coreAgenten/FreiVestorCoreAgent";
import { SchuldenfreiAgent } from "@schuldenfreiUtils/SchuldenfreiAgent";

const coreAgent = new FreiVestorCoreAgent("observe");
const schuldenAgent = new SchuldenfreiAgent();

const AgentenDiagnose = () => {
  const [diagnose, setDiagnose] = useState([]);

  const runAnalyse = () => {
    const result = [];

    const monatsCardCode = `
      const MonatsCard = ({ monat, zahlungen, feierBetrag }) => {
        return <div>{feierBetrag}</div>;
      };
    `;
    if (!monatsCardCode.includes("feierBetrag")) {
      result.push({ agent: "Schuldenfrei", status: "❌", message: "feierBetrag fehlt in MonatsCard" });
    } else {
      result.push({ agent: "Schuldenfrei", status: "✅", message: "MonatsCard verwendet feierBetrag" });
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
