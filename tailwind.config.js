/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          200: '#faedc4',
          400: '#d4af37',
          500: '#c5a028',
          600: '#b69121',
          700: '#a78219',
        },
      },
    },
  },
  plugins: [],
};