var stage = 'build';
var dist = 'dist';

module.exports = {
  html: {
    index: ['src/index.html'],
    src: ['src/**/*.html', '!src/index.html']
  },
  js: {
    src: ['src/**/*.js'],
    dist: ['all.min.js'],
    devFile: 'all.min.js',
    vendorFile: 'vendor.min.js'
  },
  css: {
    src: ['src/content/**/*.css', 'src/content/fontawesome/**/*.css', 'src/content/linecons/**/*.css'],
    dist: ['all.min.css'],
    devFile: 'all.min.css',
    vendorFile: 'vendor.min.css'
  },
  stage: stage,
  release: dist  
};