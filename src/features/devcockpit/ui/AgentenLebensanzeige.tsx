import React from "react";

type AgentenStatusProps = {
  name: string;
  type: string;
  sichtbar: boolean;
  startbar: boolean;
  diagnosefähig: boolean;
  letzteAktivität?: string;
};

const AgentenLebensanzeige: React.FC<AgentenStatusProps> = ({
  name,
  type,
  sichtbar,
  startbar,
  diagnosefähig,
  letzteAktivität,
}) => {
  const statusIcon = sichtbar
    ? diagnosefähig
      ? "🟢"
      : "🟡"
    : "🔴";

  return (
    <div className="agent-status-box">
      <div className="agent-status-name">
        {statusIcon} <strong>{name}</strong> <span className="agent-type">({type})</span>
      </div>
      <div className="agent-status-details">
        {startbar && <button className="agent-start-button">▶ Start</button>}
        {diagnosefähig && <span className="diagnose-chip">🧪 Diagnosefähig</span>}
        {letzteAktivität && <div className="last-run">Letzte Aktion: {letzteAktivität}</div>}
      </div>
    </div>
  );
};

export default AgentenLebensanzeige;
