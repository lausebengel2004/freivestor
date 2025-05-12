// src/globalFeatures/globalComponents/devCockpit/DevCockpitWrapper.tsx
import React, { useState } from "react";
import DevCockpitSystemLog from "./DevCockpitSystemLog";

const DevCockpitWrapper: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ position: "fixed", bottom: 20, right: 20, zIndex: 9999 }}>
      {!visible ? (
        <button onClick={() => setVisible(true)} style={{ padding: "0.6rem", background: "#222", color: "#fff" }}>
          🚀 Cockpit öffnen
        </button>
      ) : (
        <div style={{ width: 300, background: "#f5f5f5", border: "1px solid #ccc", borderRadius: 8, padding: "1rem" }}>
          <h4>🛠 DevCockpit</h4>
          <DevCockpitSystemLog />
          <button onClick={() => setVisible(false)} style={{ marginTop: "1rem" }}>
            Schließen
          </button>
        </div>
      )}
    </div>
  );
};

export default DevCockpitWrapper;
