import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  'process.env': {},
  plugins: [react()],
  optimizeDeps: {
    include: ["swiper"],
},
})
