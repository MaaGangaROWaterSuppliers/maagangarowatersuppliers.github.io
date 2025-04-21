import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD
=======
  base: '/',
>>>>>>> 9fa226f1fbaf1e04cf2af06be70409b7cd038cbf
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
