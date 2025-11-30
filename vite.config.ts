import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // <--- This fixes the 404/Blank page on GitHub
  define: {
    // This allows the app to use process.env.API_KEY (satisfying strict guidelines)
    // while actually reading the Vite environment variable VITE_API_KEY used on GitHub/Cloud.
    'process.env.API_KEY': 'import.meta.env.VITE_API_KEY'
  }
})