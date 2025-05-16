import React, { useEffect, useState } from "react";
import { getCommitsAhead } from "@features/devcockpit/utils/getCommitsAhead";

const CommitsAheadStatusPanel: React.FC = () => {
  const [aheadCount, setAheadCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchCount = async () => {
      const count = await getCommitsAhead();
      setAheadCount(count);
    };

    fetchCount();
  }, []);

  let message = "⏳ Status wird geladen...";
  if (aheadCount === 0) message = "✅ Du bist synchron mit origin/main.";
  else if (aheadCount > 0) message = `📊 Du bist ${aheadCount} Commit(s) ahead of origin/main. Push empfohlen.`;
  else if (aheadCount < 0) message = "⚠️ Git-Zugriff fehlgeschlagen. Prüfe deine Repository-Verbindung.";

  return (
    <div style={{ padding: "1rem", background: "#f9f9f9", border: "1px solid #ccc", borderRadius: "6px", marginTop: "1rem" }}>
      <strong>📁 Commit-Zustand:</strong>
      <p style={{ marginTop: "0.5rem" }}>{message}</p>
    </div>
  );
};

export default CommitsAheadStatusPanel;
