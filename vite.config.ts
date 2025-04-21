import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Make sure to keep this line if needed
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
