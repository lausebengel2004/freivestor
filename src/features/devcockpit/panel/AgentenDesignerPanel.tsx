// @features/devcockpit/ui/AgentenDesignerPanel.jsx
import React, { useState } from "react";
import { AgentenDesignerAgent } from "@agenten/dev/meta/AgentenDesignerAgent";

const AgentenDesignerPanel = () => {
  const [name, setName] = useState("BeispielAgent");
  const [id, setId] = useState("beispiel-agent");
  const [sichtbar, setSichtbar] = useState(true);
  const [trigger, setTrigger] = useState("manuell");
  const [kategorie, setKategorie] = useState("analyse");
  const [downloadUrl, setDownloadUrl] = useState(null);

  const generate = () => {
    const config = { name, id, sichtbar, trigger, kategorie };
    const url = AgentenDesignerAgent.export(config);
    setDownloadUrl(url);
  };

  return (
    <div className="designer-panel">
      <h3>🎨 AgentenDesigner</h3>
      <label>Agentenname:</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />

      <label>ID:</label>
      <input value={id} onChange={(e) => setId(e.target.value)} />

      <label>Kategorie:</label>
      <select value={kategorie} onChange={(e) => setKategorie(e.target.value)}>
        <option value="analyse">analyse</option>
        <option value="meta">meta</option>
        <option value="dev">dev</option>
        <option value="system">system</option>
      </select>

      <label>Trigger:</label>
      <select value={trigger} onChange={(e) => setTrigger(e.target.value)}>
        <option value="manuell">manuell</option>
        <option value="autostart">autostart</option>
      </select>

      <label>
        <input type="checkbox" checked={sichtbar} onChange={() => setSichtbar(!sichtbar)} />
        Sichtbar im Cockpit
      </label>

      <button onClick={generate}>🛠 Agentenprofil generieren</button>

      {downloadUrl && (
        <p>
          ✅ Fertig!{" "}
          <a href={downloadUrl} download={`${name}.js`}>
            👉 Hier klicken zum Herunterladen
          </a>
        </p>
      )}
    </div>
  );
};

export default AgentenDesignerPanel;
