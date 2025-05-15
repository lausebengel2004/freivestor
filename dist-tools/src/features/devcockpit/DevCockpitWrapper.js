import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from "react";
import DevCockpitPanel from "./DevCockpitPanel";
import "./DevCockpitWrapper.css";
import AgentenSteuerung from "./AgentenSteuerung";
const DevCockpitWrapper = () => {
    const [offen, setOffen] = useState(false);
    return (_jsxs("div", { className: "devcockpit-wrapper", children: [_jsx(AgentenSteuerung, {}), _jsx("button", { className: "devcockpit-button", onClick: () => setOffen(!offen), children: "\uD83E\uDDE0" }), offen && _jsx(DevCockpitPanel, { onClose: () => setOffen(false) })] }));
};
export default DevCockpitWrapper;
