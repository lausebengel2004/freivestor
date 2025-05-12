import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/freivestor/",
  build: {
    outDir: "docs",
  },
  resolve: {
    alias: {
      // 🌍 Grundlegende Aliase
      "@components": path.resolve(__dirname, "./src/components"),
      "@features":   path.resolve(__dirname, "./src/features"),
      "@agenten":    path.resolve(__dirname, "./src/agenten"),
      "@meta":       path.resolve(__dirname, "./src/meta"),

      // 🧠 DevCockpit & Agenten
      "@devCockpit":   path.resolve(__dirname, "./src/globalFeatures/globalComponents/devCockpit"),
      "@coreAgenten":  path.resolve(__dirname, "./src/globalFeatures/globalUtils/agenten"),
      "@globalUtils":  path.resolve(__dirname, "./src/globalFeatures/globalUtils"),
      "@globalComponents": path.resolve(__dirname, "./src/globalFeatures/globalComponents"),

      // 💸 Schuldenfrei-Tool
      "@schuldenfreiComponents": path.resolve(__dirname, "./src/features/schuldenfrei/schuldenfreiComponents"),
      "@schuldenfreiUtils":      path.resolve(__dirname, "./src/features/schuldenfrei/schuldenfreiUtils"),
      "@schuldenfreiDaten":      path.resolve(__dirname, "./src/features/schuldenfrei/schuldenfreiDaten"),
      "@schuldenfreiVisuals":    path.resolve(__dirname, "./src/features/schuldenfrei/schuldenfreiVisuals"),
      "@schuldenfreiSteuern":    path.resolve(__dirname, "./src/features/schuldenfrei/schuldenfreiSteuern"),
      "@schuldenfreiExport":     path.resolve(__dirname, "./src/features/schuldenfrei/schuldenfreiExport"),

      // 📊 Einkommensverteiler-Tool
      "@einkommensComponents":  path.resolve(__dirname, "./src/features/einkommensverteiler/einkommensComponents"),
      "@einkommensUtils":       path.resolve(__dirname, "./src/features/einkommensverteiler/einkommensUtils"),
      "@einkommensDaten":       path.resolve(__dirname, "./src/features/einkommensverteiler/einkommensDaten"),
      "@einkommensVisuals":     path.resolve(__dirname, "./src/features/einkommensverteiler/einkommensVisuals"),
      "@einkommensVerbindung":  path.resolve(__dirname, "./src/features/einkommensverteiler/einkommensVerbindung"),
      "@einkommensExport":      path.resolve(__dirname, "./src/features/einkommensverteiler/einkommensExport"),

      // 📈 Optionshandel-Modul
      "@optionsComponents": path.resolve(__dirname, "./src/features/optionshandel/optionsComponents"),
      "@optionsUtils":      path.resolve(__dirname, "./src/features/optionshandel/optionsUtils"),
      "@optionsDaten":      path.resolve(__dirname, "./src/features/optionshandel/optionsDaten"),
      "@optionsStrategien": path.resolve(__dirname, "./src/features/optionshandel/optionsStrategien"),
      "@optionsVisuals":    path.resolve(__dirname, "./src/features/optionshandel/optionsVisuals"),
      "@optionsSteuern":    path.resolve(__dirname, "./src/features/optionshandel/optionsSteuern"),
      "@optionsExport":     path.resolve(__dirname, "./src/features/optionshandel/optionsExport"),
    }
  }
});
