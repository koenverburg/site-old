const withMDX = require('@next/mdx')
const withPlugins = require('next-compose-plugins')
const path = require('path')

const nextConfig = {
  cleanUrls: true,
  trailingSlash: false,

  env: {
    'GRAPHCMS_URL': process.env.GRAPHCMS_URL,
    'UMAMI_HOST': process.env.UMAMI_HOST,
    'UMAMI_WEBSITE_ID': process.env.UMAMI_WEBSITE_ID,
  },

  webpack: (config, {_buildId, dev, isServer}) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@styling/base': path.resolve(__dirname, './src/styles/module-base.scss'),
    }

    if (isServer) {
      require('./scripts/generate-sitemap')
    }

    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom': 'preact/compat',
      })
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
