const helpers = require('./helpers');

let config = {
  entry: {
    'main': helpers.root('/src/_assets/js/main.js')
  },
  output: {
    path: helpers.root('/public'),
    filename: '_assets/js/[name].[hash].js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.html', '.vue'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:{
          presets: [
            ['env', {'modules': false}]
          ]
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.html$/,
        loader: 'raw-loader',
        exclude: ['./public/index.html']
      }
    ],
  },
};

module.exports = config;
