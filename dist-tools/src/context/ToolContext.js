import { jsx as _jsx } from "react/jsx-runtime";
import React, { createContext, useContext, useState } from "react";
const ToolContext = createContext(undefined);
export const ToolProvider = ({ children }) => {
    const [toolState, setToolState] = useState("init");
    return (_jsx(ToolContext.Provider, { value: { toolState, setToolState }, children: children }));
};
export const useToolContext = () => {
    const context = useContext(ToolContext);
    if (!context)
        throw new Error("useToolContext must be used within a ToolProvider");
    return context;
};
