import React from "react";

const StrukturUeberblickPanel: React.FC = () => {
  return (
    <details style={{ marginBottom: "1rem" }} open>
      <summary
        style={{
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "1rem",
          padding: "0.3rem 0",
          color: "#5a5a5a",
        }}
      >
        🧠 Strukturüberblick
      </summary>
      <div style={{ paddingLeft: "1rem", fontSize: "0.9rem", color: "#444" }}>
        <p>
          <strong>Modus:</strong> Entwickleransicht (Meta + Debug)
        </p>
        <ul style={{ paddingLeft: "1rem" }}>
          <li>
            <code>/agenten/dev/meta/</code> – MetaAgenten (nur für dich)
          </li>
          <li>
            <code>/agenten/user/</code> – NutzerAgents (später sichtbar)
          </li>
        </ul>
      </div>
    </details>
  );
};

export default StrukturUeberblickPanel;
