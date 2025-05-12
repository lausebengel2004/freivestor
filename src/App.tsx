
import React from "react";
import { RouterProvider } from "react-router-dom";
import { ToolProvider } from "@globalUtils/context/ToolContext";
import router from "./router";
import "./App.css";

function App() {
  return (
    <ToolProvider>
      <RouterProvider router={router} />
    </ToolProvider>
  );
}

export default App;
