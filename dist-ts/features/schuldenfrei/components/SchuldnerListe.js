import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState } from 'react';
const SchuldnerListe = ({ schuldner, onRemove, onUpdate }) => {
    const [bearbeiteIndex, setBearbeiteIndex] = useState(null);
    const [editData, setEditData] = useState({ name: '', schuld: '', rate: '' });
    const startEdit = (index) => {
        setBearbeiteIndex(index);
        const s = schuldner[index];
        setEditData({ name: s.name, schuld: s.schuld, rate: s.rate });
    };
    const cancelEdit = () => {
        setBearbeiteIndex(null);
        setEditData({ name: '', schuld: '', rate: '' });
    };
    const saveEdit = () => {
        onUpdate(bearbeiteIndex, {
            name: editData.name,
            schuld: parseFloat(editData.schuld),
            rate: parseFloat(editData.rate),
        });
        cancelEdit();
    };
    if (schuldner.length === 0)
        return null;
    return (_jsxs("div", { style: { marginBottom: '2rem' }, children: [_jsx("h2", { children: "\uD83D\uDDC2\uFE0F Eingetragene Schuldner" }), _jsx("ul", { style: { listStyle: 'none', padding: 0 }, children: schuldner.map((s, index) => (_jsx("li", { style: {
                        display: 'flex',
                        flexDirection: 'column',
                        marginBottom: '1rem',
                        borderBottom: '1px solid #ccc',
                        paddingBottom: '0.5rem'
                    }, children: bearbeiteIndex === index ? (_jsxs(_Fragment, { children: [_jsx("input", { value: editData.name, onChange: (e) => setEditData({ ...editData, name: e.target.value }), placeholder: "Name" }), _jsx("input", { type: "number", value: editData.schuld, onChange: (e) => setEditData({ ...editData, schuld: e.target.value }), placeholder: "Schuld (\u20AC)" }), _jsx("input", { type: "number", value: editData.rate, onChange: (e) => setEditData({ ...editData, rate: e.target.value }), placeholder: "Rate (\u20AC)" }), _jsxs("div", { children: [_jsx("button", { onClick: saveEdit, children: "\uD83D\uDCBE Speichern" }), _jsx("button", { onClick: cancelEdit, style: { marginLeft: '1rem' }, children: "\u2716\uFE0F Abbrechen" })] })] })) : (_jsxs(_Fragment, { children: [_jsxs("span", { children: [s.name, " \u2013 Schulden: ", s.schuld, " \u20AC, Rate: ", s.rate, " \u20AC"] }), _jsxs("div", { children: [_jsx("button", { onClick: () => startEdit(index), children: "\u270F\uFE0F Bearbeiten" }), _jsx("button", { onClick: () => onRemove(index), style: { color: 'red', marginLeft: '1rem' }, children: "\u274C L\u00F6schen" })] })] })) }, index))) })] }));
};
export default SchuldnerListe;
