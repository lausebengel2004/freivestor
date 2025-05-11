import React, { useState } from 'react';

const SchuldnerForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [schuld, setSchuld] = useState('');
  const [rate, setRate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !schuld || !rate) return;

    onAdd({
      name,
      schuld: parseFloat(schuld),
      rate: parseFloat(rate),
    });

    setName('');
    setSchuld('');
    setRate('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
      <h2>📥 Schuldner hinzufügen</h2>

      <div>
        <label>Name:</label><br />
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div>
        <label>Schulden (€):</label><br />
        <input type="number" value={schuld} onChange={(e) => setSchuld(e.target.value)} />
      </div>

      <div>
        <label>Rate (€):</label><br />
        <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} />
      </div>

      <button type="submit" style={{ marginTop: '1rem' }}>➕ Hinzufügen</button>
    </form>
  );
};

export default SchuldnerForm;
