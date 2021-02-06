const withMDX = require('@next/mdx')
const withPlugins = require('next-compose-plugins')
const path = require('path')

const nextConfig = {
  amp: true,
  cleanUrls: true,
  trailingSlash: false,

  env: {
    'GRAPHCMS_URL': process.env.GRAPHCMS_URL,
    'UMAMI_HOST': process.env.UMAMI_HOST,
    'UMAMI_WEBSITE_ID': process.env.UMAMI_WEBSITE_ID,
  },

  // eslint-disable-next-line no-unused-vars
  webpack: (config, {buildId, dev, isServer}) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@styling/base': path.resolve(__dirname, './src/styles/module-base.scss'),
    }

    if (isServer) {
      require('./scripts/generate-sitemap')
    }

    return config
  },
}

const mdxConfig = {
  pageExtensions: ['md', 'mdx'],
}

module.exports = withPlugins([
  [withMDX, mdxConfig],
  // [withSize],
], nextConfig)
