var postcss = require('postcss')

module.exports = {
  use: [
    'postcss-import',
    'autoprefixer',
    'cssnano',
  ],
  input: '_css/index.css',
  dir: '_includes',
  "local-plugins": true,
};
