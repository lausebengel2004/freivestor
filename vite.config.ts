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
      '@components': path.resolve(__dirname, 'src/components'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@agenten': path.resolve(__dirname, 'src/agenten'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@globalFeatures': path.resolve(__dirname, 'src/globalFeatures'),
      '@layout': path.resolve(__dirname, 'src/layout'), // Optional für AppLayout
      '@meta': path.resolve(__dirname, 'src/meta'), // falls benötigt
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@router': path.resolve(__dirname, 'src/router.tsx'),


      
      
      

    },
  },
});