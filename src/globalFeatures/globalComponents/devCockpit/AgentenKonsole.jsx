
import React, { useState } from "react";
import { SchuldenfreiAgent } from "@schuldenfreiUtils/SchuldenfreiAgent";

const schuldenAgent = new SchuldenfreiAgent();

const AgentenKonsole = () => {
  const [idee, setIdee] = useState("");
  const [ausgabe, setAusgabe] = useState("");

  const handleAnalyse = () => {
    const result = schuldenAgent.interpretIdea(idee);
    if (result) {
      setAusgabe(
        `🧠 Komponente: ${result.komponente} mit Props: ${result.props.join(", ")}`
      );
    } else {
      setAusgabe("❗ Idee konnte nicht interpretiert werden.");
    }
  };

  return (
    <div>
      <h4>💡 Agenten-Konsole</h4>
      <input
        type="text"
        value={idee}
        onChange={(e) => setIdee(e.target.value)}
        placeholder="Z. B. Ich will einen Feiermonat"
        style={{ width: "100%", padding: "0.5rem" }}
      />
      <button onClick={handleAnalyse} style={{ marginTop: "0.5rem" }}>
        Idee analysieren
      </button>
      <p style={{ marginTop: "0.5rem" }}>{ausgabe}</p>
    </div>
  );
};

export default AgentenKonsole;
