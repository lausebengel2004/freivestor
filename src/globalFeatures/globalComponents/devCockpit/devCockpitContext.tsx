// src/globalFeatures/globalComponents/devCockpit/devCockpitContext.tsx
import React, { createContext, useContext, useState } from "react";

interface AgentType {
  name: string;
  status: string;
}

interface LogContextType {
  logs: string[];
  agents: AgentType[];
  addLog: (msg: string) => void;
  registerAgent: (agent: AgentType) => void;
}

const LogContext = createContext<LogContextType | undefined>(undefined);

export const DevCockpitLogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [logs, setLogs] = useState<string[]>(["📍 DevCockpit-Log gestartet"]);
  const [agents, setAgents] = useState<AgentType[]>([]);

  const addLog = (msg: string) => setLogs(prev => [...prev, msg]);
  const registerAgent = (agent: AgentType) => setAgents(prev => [...prev, agent]);

  const contextValue: LogContextType = { logs, agents, addLog, registerAgent };

  return (
    <LogContext.Provider value={contextValue}>
      {children}
    </LogContext.Provider>
  );
};

export const useSystemLog = () => {
  const context = useContext(LogContext);
  if (!context) {
    throw new Error("useSystemLog must be used within a DevCockpitLogProvider");
  }
  return context;
};
