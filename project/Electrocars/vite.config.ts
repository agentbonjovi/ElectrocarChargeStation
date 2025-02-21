import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

plugins: [react()]

export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "https://192.168.56.1:8000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/"),
      },
    },
  },
});