
import { createContext, useContext, useState, ReactNode } from "react";

type ToolContextType = {
  aktuellesTool: string;
  setAktuellesTool: (tool: string) => void;
};

const ToolContext = createContext<ToolContextType | undefined>(undefined);

export const ToolProvider = ({ children }: { children: ReactNode }) => {
  const [aktuellesTool, setAktuellesTool] = useState<string>("global");

  return (
    <ToolContext.Provider value={{ aktuellesTool, setAktuellesTool }}>
      {children}
    </ToolContext.Provider>
  );
};

export const useToolContext = (): ToolContextType => {
  const context = useContext(ToolContext);
  if (!context) {
    throw new Error("useToolContext must be used within a ToolProvider");
  }
  return context;
};
