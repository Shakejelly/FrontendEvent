/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Flesh: '#CE9F9F',
        DarkPurple: '#71546B',
      },
      fontFamily: {
        'mplus': ['"M PLUS Rounded 1c"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}