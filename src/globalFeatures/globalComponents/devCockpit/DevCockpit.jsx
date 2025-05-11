import React from "react";
import AgentenKonsole from "./AgentenKonsole";
import AgentenDiagnose from "./AgentenDiagnose";
import AgentenDashboardUI from "./AgentenDashboardUI";

const DevCockpit = () => {
  return (
    <div style={{ padding: "1rem" }}>
      <h2>🛠 DevCockpit</h2>
      <AgentenKonsole />
      <hr style={{ margin: "1.5rem 0" }} />
      <AgentenDiagnose />
      <hr style={{ margin: '1.5rem 0' }} />
  <AgentenDashboardUI />
</div>
  );
};

export default DevCockpit;
