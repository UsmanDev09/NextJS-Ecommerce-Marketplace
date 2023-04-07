/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        primary: '#fff', // #f5f0e5
        secondary: '#000', // #574240
        hover: '#A042E1',
      },
    },
    fontFamily: {
      caslon: ['Caslon Bold Regular'],
      unica: ['Unica One'],
      comfortaa: ['Comfortaa'],
    },
    plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
  },
}
