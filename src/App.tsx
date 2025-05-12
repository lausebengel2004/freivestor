
import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ToolProvider } from "@globalUtils/context/ToolContext";
import DevCockpitWrapper from "@devCockpit/DevCockpitWrapper";

import "./App.css";

function App() {
  return (
    <ToolProvider>
      <RouterProvider router={router} />
      <DevCockpitWrapper />
    </ToolProvider>
  );
}

export default App;
