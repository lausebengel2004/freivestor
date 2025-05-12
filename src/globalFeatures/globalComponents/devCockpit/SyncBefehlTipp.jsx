
import React from "react";

const SyncBefehlTipp = () => {
  return (
    <div style={{
      marginTop: "2rem",
      padding: "1rem",
      background: "#eef6ff",
      border: "1px solid #b3d4fc",
      borderRadius: "8px",
      fontSize: "0.9rem"
    }}>
      <strong>🧭 Chat-Synchronisierungstipp:</strong>
      <p style={{ marginTop: "0.5rem" }}>
        Wenn du in einem neuen oder bestehenden Chat weiterarbeiten willst, ohne Kontextverlust, sag:
      </p>
      <code style={{
        display: "block",
        background: "#fff",
        padding: "0.5rem",
        marginTop: "0.5rem",
        border: "1px solid #ccc",
        borderRadius: "4px"
      }}>
        Bitte aktuellen GitHub-Stand aus lausebengel2004/freivestor als neue Referenz übernehmen und aktive Agentenstruktur + DevCockpit-Kontext aktivieren.
      </code>
      <p style={{ marginTop: "0.5rem" }}>
        Oder nutze den Schnellbefehl:
        <br />
        <code>Synchronisiere mit GitHub – aktueller Stand</code>
      </p>
    </div>
  );
};

export default SyncBefehlTipp;
