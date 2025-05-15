import { jsx as _jsx } from "react/jsx-runtime";
// src/context/RollenContext.tsx
import React, { createContext, useContext, useState } from "react";
const RollenContext = createContext({ rolle: "user", setRolle: () => { } });
export const RollenProvider = ({ children }) => {
    const [rolle, setRolle] = useState("user");
    return (_jsx(RollenContext.Provider, { value: { rolle, setRolle }, children: children }));
};
export const useRolle = () => useContext(RollenContext);
