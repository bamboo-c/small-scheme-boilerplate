const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public/js')
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }],
    }, {
      enforce: 'pre',
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
    },
    {
      test: /\.css$/,
      loader: [
        'css-loader', 'postcss-loader'
      ]
    },
    {
      test: /\.pug$/,
      loader: 'pug-loader'
    },
    {
      test: /\.(woff2?|svg)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?limit=10000'
    },
    {
      test: /\.(ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader'
    },
    {
      test: /\.(jpg|png)$/,
      loader: 'url-loader'
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        drop_console: true
      },
    }),
  ],
};













const path = require('path');

module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public/js')
  }
};
