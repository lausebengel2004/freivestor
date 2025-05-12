import React, { createContext, useContext, useState } from "react";

interface ToolContextType {
  toolState: string;
  setToolState: (value: string) => void;
}

const ToolContext = createContext<ToolContextType | undefined>(undefined);

export const ToolProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toolState, setToolState] = useState("init");

  return (
    <ToolContext.Provider value={{ toolState, setToolState }}>
      {children}
    </ToolContext.Provider>
  );
};

export const useToolContext = () => {
  const context = useContext(ToolContext);
  if (!context) throw new Error("useToolContext must be used within a ToolProvider");
  return context;
};
