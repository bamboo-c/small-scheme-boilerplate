const helpers = require('./helpers'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

let config = {
  entry: {
    'index': helpers.root('/src/_assets/js/main.js')
  },
  output: {
    path: helpers.root('/public'),
    filename: '_assets/js/[name].[hash].js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.html', '.pug'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:{
          presets: ['es2015']
        }
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      },
      {
        test: /\.html$/,
        loader: 'raw-loader',
        exclude: ['./src/index.html']
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: helpers.root('src/index.pug'),
      filename: 'index.html',
      inject: 'body',
      chunks: ['index']
    }),
  ]
};

module.exports = config;
