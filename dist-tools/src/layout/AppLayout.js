import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/layout/AppLayout.tsx
import React from "react";
import AgentenInitializer from "@features/devcockpit/AgentenInitializer"; // 💡 Alias muss vorhanden sein
const AppLayout = ({ children }) => {
    return (_jsxs("div", { className: "app-layout", children: [_jsx(AgentenInitializer, {}), " ", children] }));
};
export default AppLayout;
