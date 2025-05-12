import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ToolProvider } from "@globalUtils/context/ToolContext";
import DevCockpitWrapper from "@devCockpit/DevCockpitWrapper";
import "./App.css";
function App() {
    return (_jsxs(ToolProvider, { children: [_jsx(RouterProvider, { router: router }), _jsx(DevCockpitWrapper, {})] }));
}
export default App;
