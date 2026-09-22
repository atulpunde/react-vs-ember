import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NETLIFY ? '/' : '/react-vs-ember/',
  plugins: [react()],
})
