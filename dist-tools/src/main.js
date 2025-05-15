import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { DevCockpitWrapper, DevCockpitLogProvider } from "@features/devcockpit";
import { RollenProvider } from "@context/RollenContext";
import "./App.css";
ReactDOM.createRoot(document.getElementById("root")).render(_jsx(React.StrictMode, { children: _jsxs(RollenProvider, { children: [" ", _jsxs(DevCockpitLogProvider, { children: [_jsx(RouterProvider, { router: router }), _jsx(DevCockpitWrapper, {})] })] }) }));
