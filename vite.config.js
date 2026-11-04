import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// BASE_PATH settes kun ved GitHub Pages-deploy (f.eks. "/bridge-demo/").
// Vercel og lokal kjøring bruker rot ("/").
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react(), tailwindcss()],
})
