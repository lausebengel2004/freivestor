import { useEffect } from "react";
import DiagnoseAgent from "@agenten/dev/system/DiagnoseAgent";
import SnapshotAgent from "@agenten/dev/system/SnapshotAgent";
import SpeicherAgent from "@agenten/dev/system/SpeicherAgent";
import { logAgentenMeldung } from "@agenten/dev/agentenMeldungsLog";
export default function AgentenSteuerung() {
    useEffect(() => {
        DiagnoseAgent.run();
        logAgentenMeldung("DiagnoseAgent", "Autostart beim DevCockpit-Start");
        SnapshotAgent.run?.();
        logAgentenMeldung("SnapshotAgent", "Autostart beim DevCockpit-Start");
        SpeicherAgent.run?.();
        logAgentenMeldung("SpeicherAgent", "Autostart beim DevCockpit-Start");
    }, []);
    return null;
}
