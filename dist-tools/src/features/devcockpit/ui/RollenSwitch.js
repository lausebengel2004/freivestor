import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { useRolle } from "@context/RollenContext";
const RollenSwitch = () => {
    const { rolle, setRolle } = useRolle();
    return (_jsxs("div", { style: { marginBottom: "1rem", fontSize: "0.9rem" }, children: [_jsx("label", { style: { marginRight: "0.5rem" }, children: "\uD83C\uDF9B Rolle w\u00E4hlen:" }), _jsxs("select", { value: rolle, onChange: (e) => setRolle(e.target.value), children: [_jsx("option", { value: "user", children: "\uD83D\uDC64 User" }), _jsx("option", { value: "developer", children: "\uD83D\uDEE0 Developer" })] })] }));
};
export default RollenSwitch;
