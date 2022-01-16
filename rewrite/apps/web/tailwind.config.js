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
  theme: {
    extend: {},
  },
  plugins: [],
}
