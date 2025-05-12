import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import DevCockpit from "./DevCockpit";
const DevCockpitWrapper = () => {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen((prev) => !prev);
    return (_jsxs(_Fragment, { children: [_jsx("button", { onClick: toggleOpen, style: {
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    padding: "0.75rem 1rem",
                    background: "#003366",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    zIndex: 1000
                }, children: open ? "❌ Cockpit schließen" : "🧠 Cockpit öffnen" }), open && (_jsx("div", { style: {
                    position: "fixed",
                    top: 0,
                    right: 0,
                    width: "400px",
                    height: "100vh",
                    background: "#f9f9f9",
                    borderLeft: "2px solid #ccc",
                    boxShadow: "-2px 0 8px rgba(0,0,0,0.1)",
                    overflowY: "auto",
                    padding: "1rem",
                    zIndex: 999
                }, children: _jsx(DevCockpit, {}) }))] }));
};
export default DevCockpitWrapper;
