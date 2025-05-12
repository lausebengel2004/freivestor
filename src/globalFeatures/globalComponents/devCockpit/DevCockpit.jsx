import React from "react";
import AgentenKonsole from "./AgentenKonsole";
import AgentenDiagnose from "./AgentenDiagnose";
import ImportAgentButton from "./ImportAgentButton";
import SyncBefehlTipp from "./SyncBefehlTipp";
import DevCockpitSystemLog from "./DevCockpitSystemLog";

const DevCockpit = () => {
  return (
    <div style={{ padding: "1rem" }}>
      <h2>🧠 DevCockpit für FreiVestor</h2>
      <AgentenDiagnose />
      <hr style={{ margin: "1rem 0" }} />
      <AgentenKonsole />
      <hr style={{ margin: "1rem 0" }} />
      <ImportAgentButton />
      <SyncBefehlTipp />
      <DevCockpitSystemLog />
    </div>
  );
};

export default DevCockpit;
