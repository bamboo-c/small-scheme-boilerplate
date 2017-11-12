module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-custom-properties': {},
    'postcss-nasted': {},
    'autoprefixer': { browsers: ['last 2 versions', 'iOS >= 8'] },
    'cssnano': /.+\.min\.css$/.test(ctx.file.basename) ? {} : false,
  },
};
