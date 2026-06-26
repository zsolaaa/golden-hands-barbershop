/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        gold: '#cba358',
        dark: '#111111',
        darker: '#080808',
        card: '#181818',
        bordercolor: '#2a2a2a'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
