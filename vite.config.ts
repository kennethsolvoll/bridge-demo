import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Relative stier gjør at samme bygg fungerer på Vercel (rot) og GitHub Pages (understi).
  base: './',
  plugins: [react(), tailwindcss()],
})
