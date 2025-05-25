import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  server: {
    host: true,
    allowedHosts: ['localhost', '127.0.0.1', '5fea-160-25-128-71.ngrok-free.app']
  },
})
