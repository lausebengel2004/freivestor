import React, { useState, useEffect } from "react";
import SchuldenForm from "./components/SchuldenForm";
import SchuldenPlanView from "./components/SchuldenPlanView";
import calculateRepaymentPlanUltra from "@features/schuldenfrei/utils/calculateRepaymentPlanUltra";

const LOCAL_KEY = "freivestor.schulden.glaeubiger";

const SchuldenfreiPage = () => {
  const [glaeubigerListe, setGlaeubigerListe] = useState([]);

  useEffect(() => {
    const gespeicherteDaten = localStorage.getItem(LOCAL_KEY);
    if (gespeicherteDaten) {
      try {
        setGlaeubigerListe(JSON.parse(gespeicherteDaten));
      } catch (e) {
        console.warn("Fehler beim Parsen der gespeicherten Daten:", e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(glaeubigerListe));
  }, [glaeubigerListe]);

  const handleAdd = (neuerEintrag) => {
    setGlaeubigerListe([...glaeubigerListe, neuerEintrag]);
  };

  const { plan } = calculateRepaymentPlanUltra(glaeubigerListe, 47.50, 475.00);

  console.log("🔍 Plan:", plan); // Debugausgabe

  return (
    <div style={{ padding: "2rem" }}>
      <h1>💸 Schuldenfrei 2.0</h1>
      <SchuldenForm onAdd={handleAdd} />
      <SchuldenPlanView result={plan} />
    </div>
  );
};

export default SchuldenfreiPage;
