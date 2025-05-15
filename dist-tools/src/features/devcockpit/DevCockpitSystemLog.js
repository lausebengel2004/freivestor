import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect, useState } from "react";
import { storeSystemLogAsMarkdown } from "./utils/storeSystemLogAsMarkdown";
const DevCockpitSystemLog = () => {
    const [logs, setLogs] = useState(["DevCockpit gestartet"]);
    useEffect(() => {
        if (logs.length > 0) {
            console.log("📦 Speichere System-Log:");
            console.log(logs);
            storeSystemLogAsMarkdown(logs);
        }
    }, [logs]);
    return (_jsxs("div", { children: [_jsx("h2", { children: "\uD83E\uDDFE System-Log" }), _jsx("ul", { children: logs.map((log, i) => (_jsx("li", { children: log }, i))) })] }));
};
export default DevCockpitSystemLog;
