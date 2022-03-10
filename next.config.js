const webpack = require('webpack')

const isProd = (process.env.NODE_ENV || 'production') === 'production'

const assetPrefix = '';
const publicUrl = isProd ? 'https://ftc18225.everstem.org' : 'http://localhost:3000';

module.exports = {
  images: {
    loader: 'custom'
  },
  exportPathMap: () => ({
    '/': { page: '/' },
    "/about": { page: "/about" },
    "/events": { page: "/events" },
    "/resources": { page: "/resources" },
    "/contact": { page: "/contact" },
    "/seasons": { page: "/seasons" },
    "/guides/ftc-programming-guide": { page: "/guides/ftc-programming-guide" },
    "/guides/ftc-robot-guide": { page: "/guides/ftc-robot-guide" },
  }),
  assetPrefix: assetPrefix,
  basePath: assetPrefix,
  webpack: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
        'process.env.PUBLIC_URL': JSON.stringify(publicUrl)
      }),
    )

    return config
  },
}