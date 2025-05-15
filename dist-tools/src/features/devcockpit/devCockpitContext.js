import { jsx as _jsx } from "react/jsx-runtime";
import React, { createContext, useContext, useState } from "react";
const DevCockpitContext = createContext(null);
export const DevCockpitLogProvider = ({ children }) => {
    const [logs, setLogs] = useState(["DevCockpit gestartet"]);
    const addLog = (msg) => setLogs(prev => [...prev, msg]);
    return (_jsx(DevCockpitContext.Provider, { value: { logs, addLog }, children: children }));
};
export const useSystemLog = () => useContext(DevCockpitContext);
