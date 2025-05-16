// src/features/devcockpit/panel/AgentenManifestGeneratorPanel.tsx
import React, { useState, useEffect } from "react";
import { AgentenEintrag } from "@agenten/dev/agentenManifest";
import { scanActiveAgents } from "@agenten/dev/utils/generateAgentenManifestUI";
import { agentenManifest as existingManifest } from "@agenten/dev/agentenManifest";
import ValidationPanel from "@features/devcockpit/panel/ValidationPanel";

const AgentenManifestGeneratorPanel: React.FC = () => {
  const [scanned, setScanned] = useState<AgentenEintrag[]>([]);
  const [merge, setMerge] = useState(true);
  const [currentManifest, setCurrentManifest] = useState<AgentenEintrag[]>([]);
  const [previewJson, setPreviewJson] = useState("");

  // 1. Scan beim Mount
  useEffect(() => {
    (async () => {
      const list = await scanActiveAgents();
      setScanned(list);
    })();
  }, []);

  // 2. Merge/Only-Scan und Vorschau
  useEffect(() => {
    let result: AgentenEintrag[];

    if (merge) {
      const map = new Map(existingManifest.map((a) => [a.id, a]));
      scanned.forEach((a) => map.set(a.id, a));
      result = Array.from(map.values());
    } else {
      result = scanned;
    }

    setCurrentManifest(result);
    setPreviewJson(JSON.stringify(result, null, 2));
  }, [scanned, merge]);

  // 3. Generieren & Schreiben an die Brücke
  const handleGenerate = () => {
    const exportText = `// Auto-generiert am ${new Date().toISOString()}
import { AgentenEintrag } from "@agenten/dev/agentenManifest";

export const agenten: AgentenEintrag[] = ${previewJson};
`;
    // «pending»-Key für die Brücke
    localStorage.setItem("agenten::manifest::pending", exportText);
    // Timestamp-Key
    localStorage.setItem("agenten::manifest::lastWrite", new Date().toISOString());
    alert("🛠 Manifest generiert und an SpeicherBrücke übergeben.");
  };

  return (
    <div style={{ padding: "1rem", background: "#111", color: "#eee", border: "1px solid #333" }}>
      <h2>🛠 AgentenManifest Generator</h2>

      <label>
        <input
          type="checkbox"
          checked={merge}
          onChange={() => setMerge((m) => !m)}
        />{" "}
        Merge mit bestehendem Manifest
      </label>

      <button
        onClick={handleGenerate}
        style={{ display: "block", marginTop: "1rem", padding: "0.5rem 1rem" }}
      >
        ✅ Manifest generieren
      </button>

      <h3 style={{ marginTop: "2rem" }}>📄 Vorschau (JSON)</h3>
      <pre
        style={{
          maxHeight: "300px",
          overflow: "auto",
          background: "#222",
          padding: "1rem",
          fontSize: "0.85rem",
        }}
      >
        {previewJson}
      </pre>

      {/* 🛡️ Validierung */}
      <ValidationPanel manifest={currentManifest} />
    </div>
  );
};

export default AgentenManifestGeneratorPanel;
