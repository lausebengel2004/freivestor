import React, { createContext, useContext, useState } from "react";

const DevCockpitContext = createContext<any>(null);

export const DevCockpitLogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [logs, setLogs] = useState<string[]>(["DevCockpit gestartet"]);

  const addLog = (msg: string) => setLogs(prev => [...prev, msg]);

  return (
    <DevCockpitContext.Provider value={{ logs, addLog }}>
      {children}
    </DevCockpitContext.Provider>
  );
};

export const useSystemLog = () => useContext(DevCockpitContext);