import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import AgentenKonsole from "./AgentenKonsole";
import AgentenDiagnose from "./AgentenDiagnose";
import ImportAgentButton from "./ImportAgentButton";
import SyncBefehlTipp from "./SyncBefehlTipp";
import DevCockpitSystemLog from "./DevCockpitSystemLog";
const DevCockpit = () => {
    return (_jsxs("div", { style: { padding: "1rem" }, children: [_jsx("h2", { children: "\uD83E\uDDE0 DevCockpit f\u00FCr FreiVestor" }), _jsx(AgentenDiagnose, {}), _jsx("hr", { style: { margin: "1rem 0" } }), _jsx(AgentenKonsole, {}), _jsx("hr", { style: { margin: "1rem 0" } }), _jsx(ImportAgentButton, {}), _jsx(SyncBefehlTipp, {}), _jsx(DevCockpitSystemLog, {})] }));
};
export default DevCockpit;
