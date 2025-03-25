import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Rutas relativas para archivos estáticos
  build: {
    assetsInlineLimit: 0, // Evita que Vite intente optimizar imágenes pequeñas
  },
});
