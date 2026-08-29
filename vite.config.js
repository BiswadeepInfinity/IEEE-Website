import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Using relative base './' works universally on Vercel, Netlify, Render, or GitHub Pages
  base: './',
})
