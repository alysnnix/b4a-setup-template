import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',  // Ou "/" se estiver na raiz do domínio
  build: {
    outDir: '../public' // Opcional: build direto na pasta /public
  }
})
