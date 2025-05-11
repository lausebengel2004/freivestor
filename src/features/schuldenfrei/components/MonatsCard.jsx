import React from 'react';

const MonatsCard = ({
  monat,
  typ,
  zahlungen = [],
  feierText,
  feierBetrag,
  abschlussText,
  bonusEmpfaenger,
  bonusSumme
}) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '1rem',
      marginBottom: '1rem',
      backgroundColor: '#f9f9f9'
    }}>
      <h3>Monat {monat}</h3>
      <p style={{ fontSize: '0.8rem', color: '#666' }}>
        Typ: <strong>{typ}</strong>
      </p>

      {typ === 'zahlung' && zahlungen.length > 0 && (
        <>
          {bonusEmpfaenger && (
            <div style={{ fontSize: '0.9rem', color: '#555', marginTop: '0.5rem' }}>
              💡 Bonusempfänger: <strong>{bonusEmpfaenger}</strong> (Summe: {bonusSumme.toFixed(2)} €)
            </div>
          )}
          <ul>
            {zahlungen.map((eintrag, index) => (
              <li key={index}>
                {eintrag.name} erhält {eintrag.betrag.toFixed(2)} €
                {eintrag.bonus > 0 && ` (+${eintrag.bonus.toFixed(2)} € Bonus)`}
                {eintrag.letzterMonat && <span> ✅ letzte Zahlung</span>}
              </li>
            ))}
          </ul>
        </>
      )}

      {typ === 'feier' && feierText && (
        <div style={{
          marginTop: '0.5rem',
          fontWeight: 'bold',
          color: 'green'
        }}>
          🎉 {feierText}
          {typeof feierBetrag === 'number' && (
            <div style={{
              marginTop: '0.3rem',
              backgroundColor: '#e6ffe6',
              padding: '0.5rem',
              borderRadius: '4px'
            }}>
              🎁 Feierbetrag: {feierBetrag.toFixed(2)} €
            </div>
          )}
        </div>
      )}

      {typ === 'abschluss' && abschlussText && (
        <div style={{
          marginTop: '0.5rem',
          fontWeight: 'bold',
          backgroundColor: '#e6f0ff',
          color: '#004080',
          padding: '0.5rem',
          borderRadius: '4px'
        }}>
          🏁 {abschlussText}
        </div>
      )}
    </div>
  );
};

export default MonatsCard;
