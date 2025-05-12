// src/pages/IndexPage.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const IndexPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="index-container">
      <h1>Willkommen bei <strong>FreiVestor</strong></h1>
      <p className="slogan">Handle mit Struktur, arbeite mit Klarheit, verlass dich auf das, was bleibt.</p>

      <div className="module-grid">
        <button onClick={() => navigate("/tools/schuldenfrei")}>🧮 SchuldenfreiTool</button>
        <button onClick={() => navigate("/tools/einkommen")}>💰 Einkommensverteiler</button>
        <button onClick={() => navigate("/tools/portfolio")}>📊 PortfolioTool</button>
      </div>

      <div className="dev-status">
        <p>Agentenstatus: <strong>Aktiv</strong> ✅</p>
        <button onClick={() => navigate("/devcockpit")}>🚀 DevCockpit öffnen</button>
      </div>
    </div>
  );
};

export default IndexPage;
