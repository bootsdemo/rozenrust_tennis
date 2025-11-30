/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tennis: {
          green: '#1e3a29', // Deep forest green
          clay: '#c2410c',  // Red clay
          white: '#f8fafc', // Off-white
          accent: '#e2e8f0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}