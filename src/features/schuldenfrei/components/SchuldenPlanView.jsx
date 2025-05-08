import React from "react";

const SchuldenPlanView = ({ result }) => {
  if (!result || result.length === 0) {
    return <p>🔍 Noch keine Tilgungsdaten berechnet.</p>;
  }

  return (
    <div>
      <h2>📊 Rückzahlungsplan</h2>
        {result.map((monat, index) => {
        console.log("💡 Monat:", monat.monat, "Zahlungen:", monat.zahlungen);
          return (        
        <div
          key={index}
          style={{
            marginBottom: "1.5rem",
            padding: "1rem",
            border: "1px solid #ccc",
            borderRadius: "8px",
            backgroundColor: "#fff",
          }}
        >
          <h3>📅 Monat {monat.monat}</h3>

          {(monat.zahlungen ?? []).length > 0 ? (
            <ul>
              {monat.zahlungen.map((z, i) => (
                <li key={i}>
                  {z.name} erhält{" "}
                  <strong>{z.betrag.toFixed(2)} €</strong>
                  {z.letzterMonat ? " ✅ (abbezahlt)" : ""}
                </li>
              ))}
            </ul>
          ) : (
            <p>– Keine Zahlungen in diesem Monat –</p>
          )}

          {monat.bonusEmpfaenger && (
            <p>🎯 Bonus ging an: <strong>{monat.bonusEmpfaenger}</strong></p>
          )}

          {monat.feierText && (
            <p>🎉 <em>{monat.feierText}</em></p>
          )}

          {monat.abschlussText && (
            <p>🚀 <strong>{monat.abschlussText}</strong></p>
          )}
        </div>
      ))}
    </div>
  );
};

export default SchuldenPlanView;
