/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      'xs': {'min': '320px', 'max': '639px'},
      'sm': {'min': '640px', 'max': '768px'},
      'md': {'min': '769px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px', 'max': '1535px'},
      '2xl': {'min': '1536px', 'max': '99999px'},
    
    },
    extend: {
      colors: {
        'sys-header'  : '#1eb76e',
        'sys-outline'  : '#ecf0f9',
        'sys-sidebar'  : '#1f2a40',
        'sys-body' : '#ecf0fa',
      },
      fontFamily: {
        'poppins' : ['Poppins', 'sans-serif'],
        'roboto' : ['Roboto', 'sans-serif'],
      },
 

 
    },
  },
  plugins: [ require('tailwind-scrollbar'),],
}

