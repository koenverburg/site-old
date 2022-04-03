const path = require('path')
const uiPath = path.resolve("../../packages/ui")

module.exports = {
  content: {
    files: [
      "./pages/**/*.{ts,tsx}",
      `${uiPath}/skeleton/**/*.{ts,tsx}`,
      `${uiPath}/components/**/*.{ts,tsx}`
    ]
  },
  darkMode: 'class',
  theme: {
    extend: {},
  },
  variants: {
    typography: ['dark']
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
