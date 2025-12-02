import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 1. FIX for GitHub Pages 404/Blank screen: Forces relative paths.
  base: './', 
  define: {
    // 2. FIX for Code Logic Crash: Ensures the old Node.js style (process.env) 
    // works by pointing it to the Vite environment variable (VITE_GEMINI_API_KEY).
    'process.env.GEMINI_API_KEY': 'import.meta.env.VITE_GEMINI_API_KEY'
  }
})
