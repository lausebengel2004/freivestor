// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { DevCockpitWrapper, DevCockpitLogProvider } from "@features/devcockpit";
import { RollenProvider } from "@context/RollenContext";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RollenProvider> {/* 👈 muss *innerhalb* von StrictMode stehen */}
      <DevCockpitLogProvider>
        <RouterProvider router={router} />
        <DevCockpitWrapper />
      </DevCockpitLogProvider>
    </RollenProvider>
  </React.StrictMode>
);
