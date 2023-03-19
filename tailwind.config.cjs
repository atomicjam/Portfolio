/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./**/*.{js,html}",
  ],
  theme: {
    extend: {
      colors: {
        'background-gray': '#323232',
      },
      fontFamily: {
        'sans': ['Verlag', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
