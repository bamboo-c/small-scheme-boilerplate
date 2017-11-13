const helpers = require('./helpers'),
  webpackConfig = require('./webpack.config.base'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  DefinePlugin = require('webpack/lib/DefinePlugin'),
  env = require('../environment/dev.env');

webpackConfig.module.rules = [...webpackConfig.module.rules,
  {
    test: /\.css$/,
    loader: [
      'css-loader', 'postcss-loader'
    ]
  },
  {
    test: /\.vue$/,
    loader: 'vue-loader'
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
  }
];

webpackConfig.plugins = [
  new HtmlWebpackPlugin({
    inject: true,
    template: helpers.root('/src/App.vue'),
    favicon: helpers.root('/static/favicon.ico')
  }),
  new DefinePlugin({
   'process.env': env
  })
];

webpackConfig.devServer = {
  port: 8080,
  host: 'localhost',
  historyApiFallback: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  contentBase: './src',
    open: true
  };
  
  module.exports = webpackConfig;
