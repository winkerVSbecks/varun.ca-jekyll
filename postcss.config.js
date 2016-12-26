module.exports = {
  use: [
    'postcss-import',
    'autoprefixer',
    'cssnano',
  ],
  input: '_css/index.css',
  output: '_includes/index.css',
  'local-plugins': true,
};
