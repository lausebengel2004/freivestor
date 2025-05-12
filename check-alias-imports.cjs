
// check-alias-imports.js
// 🔍 Prüft, ob alle Aliase in vite.config.ts auf existierende Ordner verweisen

const fs = require("fs");
const path = require("path");

// Pfad zu deiner Vite-Konfiguration
const viteConfigPath = path.resolve(__dirname, "vite.config.ts");
const projectRoot = __dirname;

// Lese die vite.config.ts-Datei
const viteConfigRaw = fs.readFileSync(viteConfigPath, "utf-8");

// Extrahiere Alias-Zuweisungen
const aliasRegex = /["']@([^"']+)["']: path\.resolve\(__dirname,\s*["'](.+?)["']\)/g;
let match;
let hasError = false;

console.log("🔎 Alias-Prüfung gestartet...\n");

while ((match = aliasRegex.exec(viteConfigRaw)) !== null) {
  const alias = match[1];
  const target = match[2];
  const resolvedPath = path.resolve(projectRoot, target);

  if (!fs.existsSync(resolvedPath)) {
    console.log(`❌ @${alias} zeigt ins Leere → Pfad nicht gefunden: ${resolvedPath}`);
    hasError = true;
  } else {
    console.log(`✅ @${alias} → OK (${resolvedPath})`);
  }
}

if (!hasError) {
  console.log("\n✅ Alle Aliase korrekt auflösbar.");
} else {
  console.log("\n⚠️ Bitte korrigiere die fehlerhaften Aliase.");
}
