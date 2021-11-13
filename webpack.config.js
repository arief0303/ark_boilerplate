const path = require('path')
const webpack = require('webpack')

const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const IS_DEVELOPMENT = process.env.NODE_ENV === 'dev'

const dirApp = path.join(__dirname, 'app')
const dirAssets = path.join(__dirname, 'assets');
const dirShared = path.join(__dirname, 'shared')
const dirStyles = path.join(__dirname, 'styles')
const dirNode = 'node_modules'

// test dir
console.log(dirApp,dirAssets,dirShared,dirStyles)

module.exports = {
  entry: [
    path.join(dirApp, 'index.js'),
    path.join(dirStyles, 'index.scss')
  ],

  resolve: {
    modules: [
      dirApp,
      dirAssets,
      dirShared, 
      dirStyles,
      dirNode
    ]
  },

  plugins: [
    new webpack.DefinePlugin({IS_DEVELOPMENT}),

    new CopyPlugin({
      patterns: [
        {
          from: './shared',
          to: ''
        },
      ],
    }),

    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
  ],
};