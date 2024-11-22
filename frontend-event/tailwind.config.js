/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Flesh: '#FEF3E2',
        BrightOrange: '#FAB12F',
        BloodOrange: '#FA812F',
        Red: '#FA4032'
      },
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif'],
        'mplus': ['"M PLUS Rounded 1c"', 'sans-serif'],
        'bebas': ['"Bebas Neue"', 'cursive'],
      }
    },
  },
  plugins: [],
}