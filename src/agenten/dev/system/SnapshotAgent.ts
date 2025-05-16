// src/agenten/dev/system/SnapshotAgent.ts
import { logAgentenMeldung } from "@agenten/dev/agentenMeldungsLog";

const SnapshotAgent = {
  name: "SnapshotAgent",
  status: "⏸ Inaktiv",

  run() {
    this.status = "🟢 Aktiv";
    console.log("📸 SnapshotAgent gestartet");
    this.snapshot();
  },

  stop() {
    this.status = "⏸ Inaktiv";
    console.log("🛑 SnapshotAgent gestoppt");
  },

  diagnose() {
    // bestehende Diagnose-Funktion (falls benötigt)
    const lastKey = localStorage.getItem("freivestor.agenten.snapshot.latest");
    if (!lastKey) {
      console.log("📸 Noch kein Snapshot vorhanden.");
      return;
    }
    const data = localStorage.getItem(lastKey);
    console.log("📸 Letzter Snapshot:", data);
  },

  snapshot() {
    // 1) Schlüssel generieren
    const timestampKey = new Date().toISOString().replace(/[:.]/g, "-");
    const snapshotKey = `freivestor.agenten.snapshot.${timestampKey}`;
    localStorage.setItem(
      "freivestor.agenten.snapshot.latest",
      snapshotKey
    );

    // 2) Inhalt erzeugen
    const keys = Object.keys(localStorage);
    const statusKeys = keys.filter((k) => k.includes("status"));
    const agentenStatus = statusKeys
      .map((k) => `- \`${k}\`: \`${localStorage.getItem(k)}\``)
      .join("\n");
    const statusCount = statusKeys.length;

    const markdown = [
      "# 📸 FreiVestor Snapshot",
      `**Zeitpunkt:** ${new Date().toLocaleString()}`,
      "",
      "**Routen**",
      "- *(nicht verwendet im SnapshotAgent)*",
      "",
      "**LocalStorage Keys**",
      keys.length > 0
        ? keys.map((k) => `- \`${k}\``).join("\n")
        : "- *(leer)*",
      "",
      "**Agentenstatus**",
      agentenStatus || "- *(nicht verfügbar)*",
      "",
      `_Snapshot gespeichert unter: ${snapshotKey}_`,
    ].join("\n");

    // 3) In localStorage speichern
    localStorage.setItem(snapshotKey, markdown);

    // 4) System-Log updaten
    const systemLogKey = "freivestor.agenten.system-log.md";
    const previousLog = localStorage.getItem(systemLogKey) || "";
    const newLogEntry = [
      `## 📸 Snapshot vom ${new Date().toLocaleString()}`,
      `- LocalStorage Keys: ${keys.length}`,
      `- Agentenstatus: ${statusCount} erkannt`,
      `- Gespeichert unter: \`${snapshotKey}\``,
      "",
    ].join("\n");
    localStorage.setItem(systemLogKey, previousLog + "\n" + newLogEntry);

    console.log(`📦 Snapshot + Logeintrag gespeichert unter ${snapshotKey}`);

    // 5) LastRun-Timestamp setzen
    const tsSnap = new Date().toISOString();
    localStorage.setItem("agenten::snapshot::lastRun", tsSnap);
    console.log(`✅ SnapshotAgent LastRun gesetzt: ${tsSnap}`);

    // 6) Agenten-Meldung ins Log
    logAgentenMeldung(
      "SnapshotAgent",
      "SnapshotAgent erfolgreich ausgeführt."
    );
  },
};

export default SnapshotAgent;
