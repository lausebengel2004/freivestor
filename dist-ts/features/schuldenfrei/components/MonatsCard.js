import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
const MonatsCard = ({ monat, typ, zahlungen = [], feierText, feierBetrag, abschlussText, bonusEmpfaenger, bonusSumme }) => {
    return (_jsxs("div", { style: {
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '1rem',
            marginBottom: '1rem',
            backgroundColor: '#f9f9f9'
        }, children: [_jsxs("h3", { children: ["Monat ", monat] }), _jsxs("p", { style: { fontSize: '0.8rem', color: '#666' }, children: ["Typ: ", _jsx("strong", { children: typ })] }), typ === 'zahlung' && zahlungen.length > 0 && (_jsxs(_Fragment, { children: [bonusEmpfaenger && (_jsxs("div", { style: { fontSize: '0.9rem', color: '#555', marginTop: '0.5rem' }, children: ["\uD83D\uDCA1 Bonusempf\u00E4nger: ", _jsx("strong", { children: bonusEmpfaenger }), " (Summe: ", bonusSumme.toFixed(2), " \u20AC)"] })), _jsx("ul", { children: zahlungen.map((eintrag, index) => (_jsxs("li", { children: [eintrag.name, " erh\u00E4lt ", eintrag.betrag.toFixed(2), " \u20AC", eintrag.bonus > 0 && ` (+${eintrag.bonus.toFixed(2)} € Bonus)`, eintrag.letzterMonat && _jsx("span", { children: " \u2705 letzte Zahlung" })] }, index))) })] })), typ === 'feier' && feierText && (_jsxs("div", { style: {
                    marginTop: '0.5rem',
                    fontWeight: 'bold',
                    color: 'green'
                }, children: ["\uD83C\uDF89 ", feierText, typeof feierBetrag === 'number' && (_jsxs("div", { style: {
                            marginTop: '0.3rem',
                            backgroundColor: '#e6ffe6',
                            padding: '0.5rem',
                            borderRadius: '4px'
                        }, children: ["\uD83C\uDF81 Feierbetrag: ", feierBetrag.toFixed(2), " \u20AC"] }))] })), typ === 'abschluss' && abschlussText && (_jsxs("div", { style: {
                    marginTop: '0.5rem',
                    fontWeight: 'bold',
                    backgroundColor: '#e6f0ff',
                    color: '#004080',
                    padding: '0.5rem',
                    borderRadius: '4px'
                }, children: ["\uD83C\uDFC1 ", abschlussText] }))] }));
};
export default MonatsCard;
