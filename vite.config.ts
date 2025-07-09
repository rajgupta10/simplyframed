import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  preview: {
    host: true,
    allowedHosts: ['simplyframe.onrender.com'], // allow your Render domain
    // 🚫 Do not set port: 4173
  },
});
