const imagemin = require('imagemin');

imagemin(['_img/**/*'], 'img', {})
  .then(files => {
    console.log(files);
  });
