const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  darkMode: 'class',

  purge: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/features/**/*.{ts,tsx}',
  ],

  variants: {
    typography: ['dark'],
  },

  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-filters'),
  ],

  theme: {
    extend: {
      colors,
    },
  },
}
