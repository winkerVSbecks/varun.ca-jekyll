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

// const headingQuery = 'h2[id],h3[id],h4[id],h5[id],h6[id]';
// const headings = document.querySelectorAll(headingQuery);
// [ ...headings].forEach(function(heading) {
//   heading.innerHTML = `
//     <a href="#${ heading.id }"
//       class="link"
//       style="color: inherit;">
//       ${ heading.innerText }
//     </a>`;
// });
