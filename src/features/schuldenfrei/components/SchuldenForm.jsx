import React, { useState } from "react";

const SchuldenForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [betrag, setBetrag] = useState("");
  const [rate, setRate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !betrag || !rate) return;

    const neuerGlaeubiger = {
      name,
      betrag: parseFloat(betrag),
      rate: parseFloat(rate),
    };

    onAdd(neuerGlaeubiger);

    // Zurücksetzen
    setName("");
    setBetrag("");
    setRate("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
      <h2>📥 Neuer Gläubiger</h2>

      <label>Gläubiger-Name:</label><br />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="z. B. Santander Kredit"
      /><br /><br />

      <label>Schuldenbetrag (€):</label><br />
      <input
        type="number"
        value={betrag}
        onChange={(e) => setBetrag(e.target.value)}
        placeholder="z. B. 2500"
      /><br /><br />

      <label>Monatliche Rate (€):</label><br />
      <input
        type="number"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
        placeholder="z. B. 125"
      /><br /><br />

      <button type="submit">Hinzufügen</button>
    </form>
  );
};

export default SchuldenForm;
