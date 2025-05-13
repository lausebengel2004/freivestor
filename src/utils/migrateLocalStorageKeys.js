// src/utils/migrateLocalStorageKeys.js
export function migrateLocalStorageKeys() {
   // Sicherheitsabfrage: nur ausführen, wenn noch nicht migriert
  if (localStorage.getItem("freivestor.schulden.glaeubiger")) {
    console.log("🔁 Migration wurde bereits durchgeführt. Kein Eingriff nötig.");
    return;
  }
  const migrations = [
    {
      old: "schuldner",
      new: "freivestor.schulden.glaeubiger"
    },
    {
      old: "freiVestor_schuldenfrei_creditors",
      new: "freivestor.schulden.glaeubiger"
    },
    {
      old: "freiVestor_plan",
      new: "freivestor.schulden.plan"
    },
    {
      old: "schuldenfrei_bestätigte_monate",
      new: "freivestor.schulden.bestaetigteMonate"
    },
    {
      old: "schuldenfrei_repaymentPlan",
      new: "freivestor.schulden.repaymentPlan"
    },
    {
      old: "diagnose-log",
      new: "freivestor.agenten.diagnose.log"
    },
    {
      old: "doku-log",
      new: "freivestor.agenten.dokumentation.log"
    }
  ];

  const migrationLog = [];

  migrations.forEach(({ old, new: newKey }) => {
    const value = localStorage.getItem(old);
    if (value !== null) {
      localStorage.setItem(newKey, value);
      localStorage.removeItem(old);
      migrationLog.push(`✅ Migriert: ${old} → ${newKey}`);
    }
  });

  const logContent = [
    "# 🧹 LocalStorage Migrationsbericht",
    ...migrationLog,
    "",
    `_Durchgeführt am: ${new Date().toLocaleString()}_`
  ].join("\n");

  localStorage.setItem("freivestor.agenten.migration.log", logContent);
  console.log("📦 Migration abgeschlossen. Bericht gespeichert unter 'freivestor.agenten.migration.log'");
}
