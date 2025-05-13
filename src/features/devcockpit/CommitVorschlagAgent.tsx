import React, { useEffect, useState } from "react";

const CommitVorschlagAgent: React.FC = () => {
  const [vorschlag, setVorschlag] = useState("");

  useEffect(() => {
    const snapshot = localStorage.getItem("system-log.md");
    if (snapshot) {
      setVorschlag("docs: system-log.md aktualisiert");
    } else {
      setVorschlag("📭 Noch kein Commitvorschlag verfügbar");
    }
  }, []);

  return (
    <div style={{ marginTop: "1rem" }}>
      <strong>📄 Commit-Vorschlag</strong>
      <pre>{vorschlag}</pre>
    </div>
  );
};

export default CommitVorschlagAgent;