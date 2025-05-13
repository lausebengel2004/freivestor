// src/agenten/SnapshotAgent.ts
import { routerDefinition } from "../router";

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
    console.log("📸 SnapshotAgent gestoppt");
  },

  diagnose() {
    const lastKey = localStorage.getItem("freivestor.agenten.snapshot.latest");
    if (!lastKey) {
      console.log("📸 Noch kein Snapshot vorhanden.");
      return;
    }
    const data = localStorage.getItem(lastKey);
    console.log("📸 Letzter Snapshot:", data);
  },

  snapshot() {
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const snapshotKey = `freivestor.agenten.snapshot.${timestamp}`;
    localStorage.setItem("freivestor.agenten.snapshot.latest", snapshotKey);

    const routes = routerDefinition.map(r => `- \`${r.path}\``).join("\n");
    const routeCount = routerDefinition.length;

    const keys = Object.keys(localStorage);
    const statusKeys = keys.filter(k => k.includes("status"));
    const agentenStatus = statusKeys.map(k => `- \`${k}\`: \`${localStorage.getItem(k)}\``).join("\n");
    const statusCount = statusKeys.length;

    const markdown = [
      "# 📸 FreiVestor Snapshot",
      `**Zeitpunkt:** ${new Date().toLocaleString()}`,
      "",
      "**Routen**",
      routes || "- *(keine gefunden)*",
      "",
      "**LocalStorage Keys**",
      keys.map(k => `- \`${k}\``).join("\n") || "- *(leer)*",
      "",
      "**Agentenstatus**",
      agentenStatus || "- *(nicht verfügbar)*",
      "",
      `_Snapshot gespeichert unter: ${snapshotKey}_`
    ].join("\n");

    // Snapshot speichern
    localStorage.setItem(snapshotKey, markdown);

    // system-log aktualisieren
    const systemLogKey = "freivestor.agenten.system-log.md";
    const previousLog = localStorage.getItem(systemLogKey) || "";
    const newLogEntry = [
      `## 📸 Snapshot vom ${new Date().toLocaleString()}`,
      `- Routen: ${routeCount}`,
      `- LocalStorage Keys: ${keys.length}`,
      `- Agentenstatus: ${statusCount} erkannt`,
      `- Gespeichert unter: \`${snapshotKey}\``,
      ""
    ].join("\n");

    const updatedLog = previousLog + "\n" + newLogEntry;
    localStorage.setItem(systemLogKey, updatedLog);

    console.log(`📦 Snapshot + Logeintrag gespeichert unter ${snapshotKey}`);
  }
};

export default SnapshotAgent;
