import React, { useEffect, useState } from "react";
import { CommitTrackingAgent } from "@features/devcockpit/utils/CommitTrackingAgent";

const CommitTrackingPanel: React.FC = () => {
  const [lastPush, setLastPush] = useState<string | null>(null);
  const [zeitSeitPush, setZeitSeitPush] = useState<string>("");

const [geändert, setGeändert] = useState<boolean>(false);

useEffect(() => {
  const last = CommitTrackingAgent.getPushZeitpunkt();
  setLastPush(last);
  setZeitSeitPush(CommitTrackingAgent.getZeitSeitPush());
  setGeändert(CommitTrackingAgent.wurdeSeitherGeändert());
}, []);

  const handlePushBestätigen = () => {
    const neu = CommitTrackingAgent.setPushZeitpunkt();
    setLastPush(neu);
    setZeitSeitPush("gerade eben");
  };

  return (
    <div style={{ marginTop: "1rem", border: "1px solid #ccc", padding: "1rem", borderRadius: "6px", background: "#fefefe" }}>
      <h4>📡 Commit-Tracking (ohne Git)</h4>

      <p>
        Letzter bestätigter Push:{" "}
        <strong>{lastPush ? `${zeitSeitPush} zuvor` : "Nie bestätigt"}</strong>
      </p>

      <button onClick={handlePushBestätigen}>✔️ Push durchgeführt</button>

<p style={{ marginTop: "0.5rem" }}>
  {geändert ? "🔄 Änderungen seit letztem Push erkannt." : "✅ Keine Änderungen seit letztem Push."}
</p>

    </div>
  );
};

export default CommitTrackingPanel;
