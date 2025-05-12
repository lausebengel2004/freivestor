import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@features": path.resolve(__dirname, "src/features"),
      "@layout": path.resolve(__dirname, "src/layout"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@agenten": path.resolve(__dirname, "src/agenten"),
      "@meta": path.resolve(__dirname, "src/meta"),
      "@globalUtils": path.resolve(__dirname, "src/utils"), // Falls du ToolContext nutzt
    },
  },
});
