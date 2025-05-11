import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/freivestor/',
  build: {
    outDir: 'docs',
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@features': path.resolve(__dirname, './src/features'),
      '@agenten': path.resolve(__dirname, './src/agenten'),
      '@meta': path.resolve(__dirname, './src/meta'),

      // 🧠 DevCockpit & Agenten
      '@devCockpit': path.resolve(__dirname, './src/globalFeatures/globalComponents/devCockpit'),
      '@coreAgenten': path.resolve(__dirname, './src/globalFeatures/globalUtils/agenten'),
      


      // 💸 Schuldenfrei
      '@schuldenfreiComponents': path.resolve(__dirname, './src/features/schuldenfrei/schuldenfreiComponents'),
      '@schuldenfreiUtils': path.resolve(__dirname, './src/features/schuldenfrei/schuldenfreiUtils'),

      // Weitere Alias (je nach Projektphase)
    },
  },
});
