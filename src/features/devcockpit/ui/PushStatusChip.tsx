// @features/devcockpit/ui/PushStatusChip.tsx

import React, { useEffect, useState } from "react";
import { CommitTrackingAgent } from "@features/devcockpit/utils/CommitTrackingAgent";
import "./PushStatusChip.css";

const PushStatusChip: React.FC = () => {
  const [status, setStatus] = useState<"nie" | "geändert" | "synchron">("nie");
  const [zeitpunkt, setZeitpunkt] = useState<string | null>(null);

  // 🧠 Extrahierte Statuslogik in eigene Funktion für Wiederverwendbarkeit
  const checkStatus = () => {
    const lastPush = CommitTrackingAgent.getPushZeitpunkt();
    if (!lastPush) {
      setStatus("nie");
      setZeitpunkt(null);
      return;
    }

    const geändert = CommitTrackingAgent.wurdeSeitherGeändert();
    setStatus(geändert ? "geändert" : "synchron");
    setZeitpunkt(new Date(lastPush).toLocaleString());
  };

  // 📦 Initial und regelmäßig prüfen
  useEffect(() => {
    checkStatus(); // initial prüfen

    const interval = setInterval(() => {
      checkStatus();
    }, 30000); // alle 30 Sekunden

    return () => clearInterval(interval); // beim Unmount aufräumen
  }, []);

  // 🎨 Chip-Darstellung basierend auf Status
  const getChipProps = () => {
    switch (status) {
      case "nie":
        return {
          text: "Nie gepusht",
          className: "chip-red",
          tooltip: "Es wurde noch nie ein Push bestätigt.",
        };
      case "geändert":
        return {
          text: "Änderungen",
          className: "chip-orange",
          tooltip: `Letzter Push: ${zeitpunkt}\nÄnderungen seitdem erkannt.`,
        };
      case "synchron":
        return {
          text: "Synchron",
          className: "chip-green",
          tooltip: `Keine Änderungen seit dem letzten Push am ${zeitpunkt}`,
        };
    }
  };

  const { text, className, tooltip } = getChipProps();

  return (
    <span className={`push-status-chip ${className}`} title={tooltip}>
      {text}
    </span>
  );
};

export default PushStatusChip;
