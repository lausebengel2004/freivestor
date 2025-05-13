import React, { useState, useEffect } from "react";

const SystemLogViewer: React.FC = () => {
  const [filter, setFilter] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const raw = localStorage.getItem("system-log.md") || "";
    setContent(raw);
  }, []);

  const filtered = content
    .split("\n")
    .filter(line => line.toLowerCase().includes(filter.toLowerCase()))
    .join("\n");

  return (
    <div style={{ marginTop: "1rem" }}>
      <strong>📘 Systemlog Übersicht</strong>
      <input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filtern..."
        style={{ width: "100%", marginBottom: "0.5rem" }}
      />
      <pre style={{ background: "#eee", padding: "0.5rem" }}>
        {filtered || "Keine Einträge gefunden."}
      </pre>
    </div>
  );
};

export default SystemLogViewer;