// src/features/devcockpit/ui/GitStatusAnzeige.tsx
import React, { useEffect, useState } from "react";

interface GitStatus {
  created: string[];
  modified: string[];
  deleted: string[];
  staged: string[];
  untracked: string[];
}

const GitStatusAnzeige: React.FC = () => {
  const [status, setStatus] = useState<GitStatus | null>(null);

  useEffect(() => {
 fetch(`${import.meta.env.BASE_URL}gitstatus.json`)
    .then((res) => {
      if (!res.ok) throw new Error("Datei nicht gefunden");
      return res.json();
    })
    .then((data) => setStatus(data))
    .catch((err) => {
      console.warn("⚠️ Fehler beim Laden von gitstatus.json:", err.message);
      setStatus(null); // oder setStatus({ created: [], ... })
    });
}, []);


  if (!status) return <p>⏳ Git-Status wird geladen …</p>;

  const renderList = (title: string, list: string[], icon: string) =>
    list.length > 0 && (
      <div>
        <h4>{icon} {title}</h4>
        <ul>{list.map((f, i) => <li key={i}><code>{f}</code></li>)}</ul>
      </div>
    );

  return (
    <div>
      <h3>📂 Git-Dateistatus</h3>
      {renderList("Neu erstellt", status.created, "🟢")}
      {renderList("Geändert", status.modified, "🟡")}
      {renderList("Gelöscht", status.deleted, "🔴")}
      {renderList("Gestaged", status.staged, "🔵")}
      {renderList("Untracked", status.untracked, "⚪")}
    </div>
  );
};

export default GitStatusAnzeige;
