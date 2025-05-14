// @features/devcockpit/ui/CommitStatusListe.tsx
import React from "react";
// import { useCommitStatus } from "@features/devcockpit/hooks/useCommitStatus";

const CommitStatusListe: React.FC = () => {
  const status = useCommitStatus();

  if (!status) return <p>🔄 Lade Git-Status …</p>;

  const renderList = (title: string, list: string[], icon: string) => (
    list.length > 0 && (
      <div>
        <h4>{icon} {title}</h4>
        <ul>
          {list.map((file, i) => (
            <li key={i}><code>{file}</code></li>
          ))}
        </ul>
      </div>
    )
  );

  // return (
    <div className="commit-status-liste">
      {renderList("Neu erstellt", status.created, "🟢")}
      {renderList("Geändert", status.modified, "🟡")}
      {renderList("Gelöscht", status.deleted, "🔴")}
      {renderList("Gestaged", status.staged, "🔵")}
      {renderList("Untracked", status.untracked, "⚪")}
    </div>
  );
};

export default CommitStatusListe;
