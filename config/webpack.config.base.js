const helpers = require('./helpers');

let config = {
  entry: {
    'main': helpers.root('/src/_assets/js/main.js')
  },
  output: {
    path: helpers.root('/public'),
    filename: 'assets/js/[name].[hash].js'
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
  resolve: {
    alias: {
      'vue$': 'vue/public/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
};

module.exports = config;
