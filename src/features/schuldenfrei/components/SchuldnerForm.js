import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
const SchuldnerForm = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [schuld, setSchuld] = useState('');
    const [rate, setRate] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !schuld || !rate)
            return;
        onAdd({
            name,
            schuld: parseFloat(schuld),
            rate: parseFloat(rate),
        });
        setName('');
        setSchuld('');
        setRate('');
    };
    return (_jsxs("form", { onSubmit: handleSubmit, style: { marginBottom: '2rem' }, children: [_jsx("h2", { children: "\uD83D\uDCE5 Schuldner hinzuf\u00FCgen" }), _jsxs("div", { children: [_jsx("label", { children: "Name:" }), _jsx("br", {}), _jsx("input", { value: name, onChange: (e) => setName(e.target.value) })] }), _jsxs("div", { children: [_jsx("label", { children: "Schulden (\u20AC):" }), _jsx("br", {}), _jsx("input", { type: "number", value: schuld, onChange: (e) => setSchuld(e.target.value) })] }), _jsxs("div", { children: [_jsx("label", { children: "Rate (\u20AC):" }), _jsx("br", {}), _jsx("input", { type: "number", value: rate, onChange: (e) => setRate(e.target.value) })] }), _jsx("button", { type: "submit", style: { marginTop: '1rem' }, children: "\u2795 Hinzuf\u00FCgen" })] }));
};
export default SchuldnerForm;
