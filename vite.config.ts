import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  base: "/freivestor/",
  build: {
    outDir: "docs",
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@layout": path.resolve(__dirname, "./src/layout"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@agenten": path.resolve(__dirname, "./src/agenten"),
      "@meta": path.resolve(__dirname, "./src/meta"),
      "@devCockpit": path.resolve(__dirname, "./src/globalFeatures/globalComponents/devCockpit"),
      "@coreAgenten": path.resolve(__dirname, "./src/globalFeatures/globalUtils/agenten"),
      "@globalUtils": path.resolve(__dirname, "./src/globalFeatures/globalUtils"),
      "@globalComponents": path.resolve(__dirname, "./src/globalFeatures/globalComponents"),
      "@schuldenfreiComponents": path.resolve(__dirname, "./src/features/schuldenfrei/schuldenfreiComponents"),
      "@schuldenfreiUtils": path.resolve(__dirname, "./src/features/schuldenfrei/schuldenfreiUtils"),
      "@schuldenfreiDaten": path.resolve(__dirname, "./src/features/schuldenfrei/schuldenfreiDaten"),
    },
  },
});
