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
    "/accomplishments": { page: "/accomplishments" },
    "/resources": { page: "/resources" },
    "/contact": { page: "/contact" },
    "/seasons": { page: "/seasons" },
  }),
  assetPrefix: assetPrefix,
  basePath: assetPrefix,
  rewrites: async () => [
    {
      source: "/public/ftc-programming-guide-beginner.html",
      destination: "/pages/api/myfile.js",
    },
  ],
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