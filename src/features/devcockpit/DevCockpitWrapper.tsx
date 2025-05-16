import React, { useState } from "react";
import DevCockpitPanel from "./DevCockpitPanel";
import "./DevCockpitWrapper.css";


const DevCockpitWrapper: React.FC = () => {
  const [offen, setOffen] = useState(false);

  return (    
   <div className="devcockpit-wrapper">
      <button className="devcockpit-button" onClick={() => setOffen(!offen)}>
        🧠
      </button>
      
      {offen && <DevCockpitPanel onClose={() => setOffen(false)} />}
    </div>
  );
};

export default DevCockpitWrapper;