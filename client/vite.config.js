import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

<<<<<<< HEAD
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
=======
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
>>>>>>> d39ade6f41729e70bccd40657a1721fb46e33cd7
