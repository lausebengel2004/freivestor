import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from "react";
const ToolContext = createContext(undefined);
export const ToolProvider = ({ children }) => {
    const [aktuellesTool, setAktuellesTool] = useState("global");
    return (_jsx(ToolContext.Provider, { value: { aktuellesTool, setAktuellesTool }, children: children }));
};
export const useToolContext = () => {
    const context = useContext(ToolContext);
    if (!context) {
        throw new Error("useToolContext must be used within a ToolProvider");
    }
    return context;
};
