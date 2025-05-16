// src/features/devcockpit/panel/ValidationPanel.tsx
import React, { useEffect, useState } from "react";
import { AgentenEintrag } from "@agenten/dev/agentenManifest";
import { validateAgentenManifest } from "@agenten/dev/meta/validateAgentenManifest";

interface Props {
  manifest: AgentenEintrag[];
}

export const ValidationPanel: React.FC<Props> = ({ manifest }) => {
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    const errs = validateAgentenManifest({ agenten: manifest });
    setErrors(errs);
  }, [manifest]);

  if (errors.length === 0) {
    return <p style={{ color: "limegreen" }}>✅ Manifest ist valide.</p>;
  }

  return (
    <div style={{ background: "#2b1c22", color: "#f88", padding: "1rem", borderRadius: 4, marginTop: "1rem" }}>
      <strong>⚠️ Validierungs-Fehler:</strong>
      <ul>
        {errors.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
    </div>
  );
};

export default ValidationPanel;
