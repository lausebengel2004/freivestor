import React from "react";
import DevCockpitWrapper from "@devCockpit/DevCockpitWrapper";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ position: "relative", minHeight: "100vh", paddingBottom: "4rem" }}>
      {children}
      <DevCockpitWrapper />
    </div>
  );
};

export default AppLayout;
