import React, { useEffect, useState } from "react";
import { storeSystemLogAsMarkdown } from "./utils/storeSystemLogAsMarkdown";

const DevCockpitSystemLog: React.FC = () => {
  const [logs, setLogs] = useState<string[]>(["DevCockpit gestartet"]);

  useEffect(() => {
    if (logs.length > 0) {
      console.log("📦 Speichere System-Log:");
      console.log(logs);
      storeSystemLogAsMarkdown(logs);
    }
  }, [logs]);

  return (
    <div>
      <h2>🧾 System-Log</h2>
      <ul>
        {logs.map((log, i) => (
          <li key={i}>{log}</li>
        ))}
      </ul>
    </div>
  );
};

export default DevCockpitSystemLog;
