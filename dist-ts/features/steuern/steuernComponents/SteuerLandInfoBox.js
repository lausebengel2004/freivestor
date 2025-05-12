import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect, useState } from 'react';
import { getSteuerDatenByLand } from '@steuernUtils/steuerUtils';
const SteuerLandInfoBox = ({ steuerland }) => {
    const [daten, setDaten] = useState(null);
    useEffect(() => {
        if (steuerland) {
            getSteuerDatenByLand(steuerland)
                .then(setDaten)
                .catch(() => setDaten(null));
        }
        else {
            setDaten(null);
        }
    }, [steuerland]);
    if (!steuerland) {
        return _jsx("div", { className: "steuer-info-box", children: "Bitte ein Steuerland w\u00E4hlen." });
    }
    if (!daten) {
        return _jsx("div", { className: "steuer-info-box", children: "Steuerdaten werden geladen ..." });
    }
    return (_jsxs("div", { className: "steuer-info-box", children: [_jsxs("h3", { children: ["Steuerinformationen f\u00FCr ", steuerland] }), _jsx("ul", { children: Object.entries(daten).map(([key, value]) => (_jsxs("li", { children: [_jsx("strong", { children: key }), ": ", String(value)] }, key))) })] }));
};
export default SteuerLandInfoBox;
