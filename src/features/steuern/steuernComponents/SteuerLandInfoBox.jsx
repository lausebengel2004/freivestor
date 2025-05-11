import React, { useEffect, useState } from 'react';
import { getSteuerDatenByLand } from '@steuernUtils/steuerUtils';

const SteuerLandInfoBox = ({ steuerland }) => {
  const [daten, setDaten] = useState(null);

  useEffect(() => {
    if (steuerland) {
      getSteuerDatenByLand(steuerland)
        .then(setDaten)
        .catch(() => setDaten(null));
    } else {
      setDaten(null);
    }
  }, [steuerland]);

  if (!steuerland) {
    return <div className="steuer-info-box">Bitte ein Steuerland wählen.</div>;
  }

  if (!daten) {
    return <div className="steuer-info-box">Steuerdaten werden geladen ...</div>;
  }

  return (
    <div className="steuer-info-box">
      <h3>Steuerinformationen für {steuerland}</h3>
      <ul>
        {Object.entries(daten).map(([key, value]) => (
          <li key={key}>
            <strong>{key}</strong>: {String(value)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SteuerLandInfoBox;
