import React from "react";
import { useRolle } from "@context/RollenContext";

const RollenSwitch: React.FC = () => {
  const { rolle, setRolle } = useRolle();

  return (
    <div style={{ marginBottom: "1rem", fontSize: "0.9rem" }}>
      <label style={{ marginRight: "0.5rem" }}>🎛 Rolle wählen:</label>
      <select value={rolle} onChange={(e) => setRolle(e.target.value as any)}>
        <option value="user">👤 User</option>
        <option value="developer">🛠 Developer</option>
      </select>
    </div>
  );
};

export default RollenSwitch;
