import React, { useState } from "react";

const DevCockpitWrapper: React.FC = () => {
  const [offen, setOffen] = useState(false);

  return (
    <div style={{ position: "fixed", bottom: 20, right: 20, zIndex: 9999 }}>
      {!offen ? (
        <button
          style={{
            background: "#1a1a1a",
            color: "#fff",
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "0.9rem"
          }}
          onClick={() => setOffen(true)}
        >
          🚀 Cockpit öffnen
        </button>
      ) : (
        <div
          style={{
            background: "#f9f9f9",
            padding: "1rem",
            width: "320px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0,0,0,0.15)"
          }}
        >
          <h4 style={{ marginTop: 0 }}>🛠 DevCockpit aktiv</h4>
          <p>Dies ist deine Agenten-Testanzeige.</p>
          <button
            onClick={() => setOffen(false)}
            style={{
              background: "#ddd",
              border: "none",
              padding: "0.4rem 0.8rem",
              borderRadius: "4px",
              cursor: "pointer",
              marginTop: "1rem"
            }}
          >
            Schließen
          </button>
        </div>
      )}
    </div>
  );
};

export default DevCockpitWrapper;
