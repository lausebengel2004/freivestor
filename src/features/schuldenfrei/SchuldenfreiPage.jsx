import React, { useState, useEffect } from 'react';
import MonatsCard from '@features/schuldenfrei/components/MonatsCard';
import SchuldnerForm from '@features/schuldenfrei/components/SchuldnerForm';
import SchuldnerListe from '@features/schuldenfrei/components/SchuldnerListe';
import calculateRepaymentPlanUltra from '@features/schuldenfrei/utils/calculateRepaymentPlanUltra';
import DevCockpit from "@devCockpit/DevCockpit";


const SchuldenfreiPage = () => {
  const [schuldner, setSchuldner] = useState([]);

  useEffect(() => {
    const gespeichert = localStorage.getItem('schuldner');
    if (gespeichert) {
      setSchuldner(JSON.parse(gespeichert));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('schuldner', JSON.stringify(schuldner));
  }, [schuldner]);

  const handleAddSchuldner = (neuer) => {
    setSchuldner((prev) => [...prev, neuer]);
  };

  const handleRemoveSchuldner = (index) => {
    setSchuldner((prev) => prev.filter((_, i) => i !== index));
  };

  const handleUpdateSchuldner = (index, updated) => {
    setSchuldner((prev) =>
      prev.map((s, i) => (i === index ? updated : s))
    );
  };

  const fixedMonatsrate = schuldner.reduce((sum, s) => sum + (s.rate ?? 0), 0);
  const { plan } = calculateRepaymentPlanUltra(schuldner, fixedMonatsrate);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🧭 Schuldenfrei-Fahrplan</h1>
      <p>Gib deine Schuldner ein und erhalte deinen persönlichen Plan. (Version 1.0.5)</p>

      <SchuldnerForm onAdd={handleAddSchuldner} />
      <SchuldnerListe
        schuldner={schuldner}
        onRemove={handleRemoveSchuldner}
        onUpdate={handleUpdateSchuldner}
      />

      {schuldner.length > 0 ? (
        plan.map((monat, index) => (
          <MonatsCard
            key={index}
            monat={monat.monat}
            typ={monat.typ}
            zahlungen={monat.zahlungen}
            feierText={monat.feierText}
            feierBetrag={monat.feierBetrag}
            abschlussText={monat.abschlussText}
            bonusEmpfaenger={monat.bonusEmpfaenger}
            bonusSumme={monat.bonusSumme}
          />
        ))
      ) : (
        <p>⚠️ Noch keine Schuldner eingetragen.</p>
      )}
      <aside style={{ width: "400px", background: "#f9f9f9" }}>
  <DevCockpit />
</aside>
    </div>
  );
};

export default SchuldenfreiPage;
