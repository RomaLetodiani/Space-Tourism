import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwind from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/space-tourism',
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
});
