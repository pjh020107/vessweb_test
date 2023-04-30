/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors:{
        dark : "#1b1b1b",
        light : "#f5f5f5",
        grey : "#D2D2D2",
        primary : "#B63E96",
        primaryDark : "#58E6D9"
      },
      transitionProperty: {
        'height': 'height',
        'bg' : 'background-color',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [],
}
