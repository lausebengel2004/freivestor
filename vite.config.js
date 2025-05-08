import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  optimizeDeps: {
    include: ["jspdf"]
  }, // ✅ Komma ergänzt
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@layout': path.resolve(__dirname, 'src/components/layout'),
      '@ui': path.resolve(__dirname, 'src/components/ui'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@context': path.resolve(__dirname, 'src/context'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
  
      // 🔽 NEU AB HIER
      '@icons': path.resolve(__dirname, 'src/assets/icons'),
      '@backgrounds': path.resolve(__dirname, 'src/assets/backgrounds'),
      '@branding': path.resolve(__dirname, 'src/assets/branding'),
      '@meta': path.resolve(__dirname, 'meta'),
      '@data': path.resolve(__dirname, 'src/data')
    },
  },
});
