
import React from "react";
import AgentenKonsole from "./AgentenKonsole";
import AgentenDiagnose from "./AgentenDiagnose";
import ImportAgentButton from "./ImportAgentButton";

const DevCockpit = () => {
  return (
    <div style={{ padding: "1rem" }}>
      <h2>🧠 DevCockpit für FreiVestor</h2>
      <AgentenDiagnose />
      <hr style={{ margin: "1rem 0" }} />
      <AgentenKonsole />
      <hr style={{ margin: "1rem 0" }} />
      <ImportAgentButton />
    </div>
  );
};

export default DevCockpit;
