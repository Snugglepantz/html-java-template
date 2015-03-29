var stage = 'build/';
var dist = 'dist/';
var vendorSrc = 'bower/lib/';
var vendorDest = 'build/lib/';

module.exports = {
  html: {
    index: ['src/index.html'],
    src: ['src/**/*.html', '!src/index.html'],
  },
  js: {
    src: ['src/**/*.js'],
    dist: ['all.min.js'],
    devFile: 'all.min.js',
    vendorFile: 'vendor.min.js'
  },
  css: {
    src: ['src/content/**/*.css'],
    dest: stage + 'css/',
    dist: ['all.min.css'],
    devFile: 'all.min.css',
    vendorFile: 'vendor.min.css'
  },
  vendor: {
      cssSrc: vendorSrc + "**/*.css",
      cssDest: vendorDest + "css/",
      jsSrc: vendorSrc + "**/*.js",
      jsDest: vendorDest + "js/",
      fontSrc: vendorSrc + "**/fonts/*.*",
      fontDest: vendorDest + "fonts/"
  },
  stage: stage,
  release: dist  
};