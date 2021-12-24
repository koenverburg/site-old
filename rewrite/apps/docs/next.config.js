const withTM = require('next-transpile-modules')(['@packages/ui'])

module.exports = withTM({
  reactStrictMode: true,
})
