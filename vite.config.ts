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
      "@pages": path.resolve(__dirname, "./src/pages"),
    },
  },
});