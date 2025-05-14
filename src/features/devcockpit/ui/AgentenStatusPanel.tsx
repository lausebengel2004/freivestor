import React from "react";
import { agentenManifest } from "@agenten/dev/agentenManifest";




const AgentenStatusPanel = () => {
  const anzahl = agentenManifest.length;
  const sichtbar = agentenManifest.filter(a => a.sichtbar).length;
  const autostart = agentenManifest.filter(a => a.autostart).length;
  const diagnosefaehig = agentenManifest.filter(a => a.diagnosefähig).length;
  

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem", borderRadius: "8px", background: "#f9f9f9" }}>
      <h4>🧠 Agentenstatus (Live)</h4>
      <ul>
        <li>Gesamt: <strong>{anzahl}</strong></li>
        <li>Sichtbar im UI: <strong>{sichtbar}</strong></li>
        <li>Autostart aktiviert: <strong>{autostart}</strong></li>
        <li>Diagnosefähig: <strong>{diagnosefaehig}</strong></li>
      </ul>
    </div>
  );
};

export default AgentenStatusPanel;
