/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'sys-header'  : '#1eb76e',
        'sys-outline'  : '#ecf0f9',
        'sys-sidebar'  : '#1f2a40'
      },
      fontFamily: {
        'font-poppins' : ['Poppins', 'sans-serif'],
        'font-roboto' : ['Roboto', 'sans-serif'],
        'font-heebo' : ['Heebo', 'sans-serif'],
        'font-rem' : ['REM', 'sans-serif'],
        'font-bebas' : ['Bebas Neue', 'sans-serif'],
      }
    },
  },
  plugins: [ require('tailwind-scrollbar'),],
}

