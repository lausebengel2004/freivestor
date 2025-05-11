import React from 'react';

const SteuerLandSelect = ({ selectedLand, onChange }) => {
  const laender = ['Deutschland', 'Österreich', 'Schweiz'];

  return (
    <div className="steuerland-select">
      <label htmlFor="steuerland">Steuerland wählen:</label>
      <select
        id="steuerland"
        value={selectedLand}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Bitte wählen</option>
        {laender.map((land) => (
          <option key={land} value={land}>
            {land}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SteuerLandSelect;
