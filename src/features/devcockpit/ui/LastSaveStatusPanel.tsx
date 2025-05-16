import React, { useEffect, useState } from "react";

export const LastSaveStatusPanel: React.FC = () => {
  const [lastWrite, setLastWrite] = useState<string | null>(null);

  useEffect(() => {
    // initial auslesen
    setLastWrite(localStorage.getItem("agenten::manifest::lastWrite"));

    // auf Storage-Events hören (falls mehrere Tabs o.ä.)
    const onStorage = (e: StorageEvent) => {
      if (e.key === "agenten::manifest::lastWrite") {
        setLastWrite(e.newValue);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  if (!lastWrite) {
    return <p>🕒 Noch kein Manifest-Write ausgelöst.</p>;
  }

  const dt = new Date(lastWrite);
  const formatted = dt.toLocaleString();

  return <p>🕒 Zuletzt geschrieben: {formatted}</p>;
};

export default LastSaveStatusPanel;
