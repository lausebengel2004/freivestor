// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { DevCockpitWrapper, DevCockpitLogProvider } from "@features/devcockpit";

import "./App.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
<React.StrictMode>
  <DevCockpitLogProvider>
    <RouterProvider router={router} />
    <DevCockpitWrapper />
  </DevCockpitLogProvider>
</React.StrictMode>
);
