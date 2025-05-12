import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect } from 'react';
import MonatsCard from '@features/schuldenfrei/components/MonatsCard';
import SchuldnerForm from '@features/schuldenfrei/components/SchuldnerForm';
import SchuldnerListe from '@features/schuldenfrei/components/SchuldnerListe';
import calculateRepaymentPlanUltra from '@features/schuldenfrei/utils/calculateRepaymentPlanUltra';
const SchuldenfreiPage = () => {
    const [schuldner, setSchuldner] = useState([]);
    useEffect(() => {
        const gespeichert = localStorage.getItem('schuldner');
        if (gespeichert) {
            setSchuldner(JSON.parse(gespeichert));
        }
    }, []);
    useEffect(() => {
        localStorage.setItem('schuldner', JSON.stringify(schuldner));
    }, [schuldner]);
    const handleAddSchuldner = (neuer) => {
        setSchuldner((prev) => [...prev, neuer]);
    };
    const handleRemoveSchuldner = (index) => {
        setSchuldner((prev) => prev.filter((_, i) => i !== index));
    };
    const handleUpdateSchuldner = (index, updated) => {
        setSchuldner((prev) => prev.map((s, i) => (i === index ? updated : s)));
    };
    const fixedMonatsrate = schuldner.reduce((sum, s) => sum + (s.rate ?? 0), 0);
    const { plan } = calculateRepaymentPlanUltra(schuldner, fixedMonatsrate);
    return (_jsxs("div", { style: { padding: '2rem', fontFamily: 'sans-serif' }, children: [_jsx("h1", { children: "\uD83E\uDDED Schuldenfrei-Fahrplan" }), _jsx("p", { children: "Gib deine Schuldner ein und erhalte deinen pers\u00F6nlichen Plan. (Version 1.0.5)" }), _jsx(SchuldnerForm, { onAdd: handleAddSchuldner }), _jsx(SchuldnerListe, { schuldner: schuldner, onRemove: handleRemoveSchuldner, onUpdate: handleUpdateSchuldner }), schuldner.length > 0 ? (plan.map((monat, index) => (_jsx(MonatsCard, { monat: monat.monat, typ: monat.typ, zahlungen: monat.zahlungen, feierText: monat.feierText, feierBetrag: monat.feierBetrag, abschlussText: monat.abschlussText, bonusEmpfaenger: monat.bonusEmpfaenger, bonusSumme: monat.bonusSumme }, index)))) : (_jsx("p", { children: "\u26A0\uFE0F Noch keine Schuldner eingetragen." }))] }));
};
export default SchuldenfreiPage;
