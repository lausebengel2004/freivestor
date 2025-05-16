import { logAgentenMeldung } from "@agenten/dev/agentenMeldungsLog";
import SnapshotAgent from "@agenten/dev/system/SnapshotAgent";
import SpeicherAgent from "@agenten/dev/system/SpeicherAgent";
import DiagnoseAgent from "@agenten/dev/system/DiagnoseAgent";

console.log("🚀 AgentenStartup wird ausgeführt...");

DiagnoseAgent.run();
logAgentenMeldung("DiagnoseAgent", "Autostart über runAgentenStartup");

SnapshotAgent.run?.();
logAgentenMeldung("SnapshotAgent", "Autostart über runAgentenStartup");

SpeicherAgent.run?.();
logAgentenMeldung("SpeicherAgent", "Autostart über runAgentenStartup");
