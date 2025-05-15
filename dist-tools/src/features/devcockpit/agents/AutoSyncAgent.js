// src/features/devcockpit/agents/AutoSyncAgent.ts
import { useEffect, useState } from "react";
export function useAutoSyncAgent() {
    const [commitText, setCommitText] = useState("📭 Noch kein Vorschlag verfügbar");
    useEffect(() => {
        const lastSnapshot = JSON.parse(localStorage.getItem("snapshot-vorher") || "{}");
        const aktueller = {
            time: new Date().toISOString(),
            keys: Object.keys(localStorage).sort(),
        };
        const lastKeys = lastSnapshot.keys || [];
        const neu = aktueller.keys.filter(k => !lastKeys.includes(k));
        const entfernt = lastKeys.filter(k => !aktueller.keys.includes(k));
        let log = `## Snapshot: ${aktueller.time}\n`;
        if (neu.length)
            log += `➕ Neue Einträge: ${neu.join(", ")}\n`;
        if (entfernt.length)
            log += `❌ Entfernt: ${entfernt.join(", ")}\n`;
        if (!neu.length && !entfernt.length)
            log += `🔁 Keine Unterschiede erkannt.\n`;
        localStorage.setItem("snapshot-vorher", JSON.stringify(aktueller));
        localStorage.setItem("autosync-commits", log);
        if (neu.length || entfernt.length) {
            const msg = neu.includes("system-log.md")
                ? "docs: system-log aktualisiert"
                : `chore: ${neu.length} neue Keys`;
            setCommitText(msg);
            localStorage.setItem("autosync-commit-msg", msg);
        }
    }, []);
    return commitText;
}
