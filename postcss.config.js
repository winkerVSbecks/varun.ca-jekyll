module.exports = {
  use: [
    'postcss-import',
    'cssnano',
  ],
  input: '_css/index.css',
  output: '_includes/index.css',
  'local-plugins': true,
  cssnano: {
    colormin: false,
  }
};
