import React, { useState } from 'react';

const SchuldnerListe = ({ schuldner, onRemove, onUpdate }) => {
  const [bearbeiteIndex, setBearbeiteIndex] = useState(null);
  const [editData, setEditData] = useState({ name: '', schuld: '', rate: '' });

  const startEdit = (index) => {
    setBearbeiteIndex(index);
    const s = schuldner[index];
    setEditData({ name: s.name, schuld: s.schuld, rate: s.rate });
  };

  const cancelEdit = () => {
    setBearbeiteIndex(null);
    setEditData({ name: '', schuld: '', rate: '' });
  };

  const saveEdit = () => {
    onUpdate(bearbeiteIndex, {
      name: editData.name,
      schuld: parseFloat(editData.schuld),
      rate: parseFloat(editData.rate),
    });
    cancelEdit();
  };

  if (schuldner.length === 0) return null;

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2>🗂️ Eingetragene Schuldner</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {schuldner.map((s, index) => (
          <li key={index} style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '1rem',
            borderBottom: '1px solid #ccc',
            paddingBottom: '0.5rem'
          }}>
            {bearbeiteIndex === index ? (
              <>
                <input
                  value={editData.name}
                  onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                  placeholder="Name"
                />
                <input
                  type="number"
                  value={editData.schuld}
                  onChange={(e) => setEditData({ ...editData, schuld: e.target.value })}
                  placeholder="Schuld (€)"
                />
                <input
                  type="number"
                  value={editData.rate}
                  onChange={(e) => setEditData({ ...editData, rate: e.target.value })}
                  placeholder="Rate (€)"
                />
                <div>
                  <button onClick={saveEdit}>💾 Speichern</button>
                  <button onClick={cancelEdit} style={{ marginLeft: '1rem' }}>✖️ Abbrechen</button>
                </div>
              </>
            ) : (
              <>
                <span>{s.name} – Schulden: {s.schuld} €, Rate: {s.rate} €</span>
                <div>
                  <button onClick={() => startEdit(index)}>✏️ Bearbeiten</button>
                  <button onClick={() => onRemove(index)} style={{ color: 'red', marginLeft: '1rem' }}>
                    ❌ Löschen
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SchuldnerListe;
