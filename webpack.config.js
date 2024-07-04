const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname,'./dist'),
    filename: '[name].bondle.js',
  },

  module: {
    rules: [
      {
        test: /\.(s(a|c)ss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/template.html'),
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      attributes: {
        filename: '[name].[contenthash].css',
        chunkFilename: '[name].[contenthash].css',
      },
    }),
  ],

}