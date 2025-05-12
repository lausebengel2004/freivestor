import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
const SteuerLandSelect = ({ selectedLand, onChange }) => {
    const laender = ['Deutschland', 'Österreich', 'Schweiz'];
    return (_jsxs("div", { className: "steuerland-select", children: [_jsx("label", { htmlFor: "steuerland", children: "Steuerland w\u00E4hlen:" }), _jsxs("select", { id: "steuerland", value: selectedLand, onChange: (e) => onChange(e.target.value), children: [_jsx("option", { value: "", children: "Bitte w\u00E4hlen" }), laender.map((land) => (_jsx("option", { value: land, children: land }, land)))] })] }));
};
export default SteuerLandSelect;
