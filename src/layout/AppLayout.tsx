import React from "react";

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="app-layout">{children}</div>;
};

export default AppLayout;
