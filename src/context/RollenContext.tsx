// src/context/RollenContext.tsx
import React, { createContext, useContext, useState } from "react";

export type Rolle = "user" | "developer" | "meta" | "admin" | "support";

const RollenContext = createContext<{
  rolle: Rolle;
  setRolle: (rolle: Rolle) => void;
}>({ rolle: "user", setRolle: () => {} });

export const RollenProvider = ({ children }: { children: React.ReactNode }) => {
  const [rolle, setRolle] = useState<Rolle>("developer");

  return (
    <RollenContext.Provider value={{ rolle, setRolle }}>
      {children}
    </RollenContext.Provider>
  );
};

export const useRolle = () => useContext(RollenContext);
