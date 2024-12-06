const webpack = require('webpack')
const { merge } = require('webpack-merge')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

// base config for all environments
const baseConfig = {
  entry: './src/app.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] }
      }
    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, './output/'),
    filename: 'app.js'
  }
}

// special config for development
const developmentConfig = {
  devtool: 'eval',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
}

// special config for production
const productionConfig = {
  bail: true,
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  },
  performance: {
    hints: false
  }
}

// combine config depending on the provided --mode command line option
module.exports = (env, argv) => {
  switch (argv.mode) {
    case 'development':
      return merge(baseConfig, developmentConfig)
    case 'production':
      return merge(baseConfig, productionConfig)
    default:
      throw new Error('Invalid mode')
  }
}
