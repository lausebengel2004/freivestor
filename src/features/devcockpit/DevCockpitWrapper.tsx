import React, { useState } from "react";
import DevCockpitPanel from "./DevCockpitPanel";
import "./DevCockpitWrapper.css";
import AgentenSteuerung from "./AgentenSteuerung";



const DevCockpitWrapper: React.FC = () => {
  const [offen, setOffen] = useState(false);

  return (    
   <div className="devcockpit-wrapper">
    <AgentenSteuerung />
      <button className="devcockpit-button" onClick={() => setOffen(!offen)}>
        🧠
      </button>
      
      {offen && <DevCockpitPanel onClose={() => setOffen(false)} />}
    </div>
  );
};

export default DevCockpitWrapper;