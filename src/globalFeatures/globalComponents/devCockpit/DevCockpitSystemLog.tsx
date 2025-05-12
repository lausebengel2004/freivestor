
import React, { createContext, useContext, useEffect, useState } from "react";

// 1. Context für das Systemlog
interface LogContextType {
  logs: string[];
  addLog: (msg: string) => void;
}

const LogContext = createContext<LogContextType | undefined>(undefined);

// 2. Provider-Komponente für das Log-System
export const DevCockpitLogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    const initialLog = "📍 Systemlog gestartet am 12.05.2025 – 05:56 Uhr";
    setLogs([initialLog]);
  }, []);

  const addLog = (msg: string) => {
    setLogs((prev) => [...prev, msg]);
  };

  return (
    <LogContext.Provider value={{ logs, addLog }}>
      {children}
    </LogContext.Provider>
  );
};

// 3. Custom Hook für Zugriff
export const useSystemLog = () => {
  const context = useContext(LogContext);
  if (!context) {
    throw new Error("useSystemLog must be used within a DevCockpitLogProvider");
  }
  return context;
};

// 4. Anzeige-Komponente
const DevCockpitSystemLog: React.FC = () => {
  const { logs } = useSystemLog();

  return (
    <div
      style={{
        marginTop: "1rem",
        padding: "0.5rem",
        background: "#fafafa",
        border: "1px solid #ccc",
        borderRadius: "6px",
        fontSize: "0.85rem",
        maxHeight: "120px",
        overflowY: "auto",
      }}
    >
      <strong>🧾 SystemLog</strong>
      <ul style={{ marginTop: "0.5rem", paddingLeft: "1rem", lineHeight: "1.4" }}>
        {logs.map((log, i) => (
          <li key={i}>{log}</li>
        ))}
      </ul>
    </div>
  );
};

export default DevCockpitSystemLog;
