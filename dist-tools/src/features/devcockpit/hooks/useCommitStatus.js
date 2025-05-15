// @features/devcockpit/hooks/useCommitStatus.ts
// Temporär deaktiviviert - Node-Modul 'simple-git' nicht browserfähig
// import { useEffect, useState } from "react";
// import simpleGit from "simple-git";
const git = simpleGit();
// export const useCommitStatus = () => {
const [status, setStatus] = useState(null);
useEffect(() => {
    const fetchStatus = async () => {
        try {
            const result = await git.status();
            setStatus({
                modified: result.modified,
                created: result.created,
                deleted: result.deleted,
                staged: result.staged,
                untracked: result.not_added,
            });
        }
        catch (err) {
            console.error("Fehler beim Laden des Git-Status:", err);
        }
    };
    fetchStatus();
}, []);
return status;
;
export {};
