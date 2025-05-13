// src/layout/AppLayout.tsx
import React from "react";
import AgentenInitializer from "@features/devcockpit/AgentenInitializer"; // 💡 Alias muss vorhanden sein

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="app-layout">
      <AgentenInitializer /> {/* 🧠 Initialisiert alle Agenten bei Layout-Mount */}
      {children}
    </div>
  );
};

export default AppLayout;