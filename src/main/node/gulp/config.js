var stage = 'build/';
var dist = 'dist/';
var vendorSrc = 'bower/lib/';
var vendorDest = 'lib/';

module.exports = {
  html: {
    index: ['src/index.html'],
    src: ['src/**/*.html', '!src/index.html'],
  },
  js: {
    src: ['src/**/*module.js', 'src/**/*.js'],
    files: "app/**/*.js",
  },
  css: {
    src: ['src/content/**/*.css'],
    dest: 'css/',
    files: 'css/**/*.css',
  },
  vendor: {
      cssSrc: vendorSrc + "**/*.css",
      cssDest: vendorDest + "css/",
      cssFiles: "lib/css/*.css",
      jsSrc: [vendorSrc + "**/jquery/*.js", vendorSrc + "**/*.js"],
      jsDest: vendorDest + "js/",
      jsFiles: "lib/js/*.js",
      fontSrc: vendorSrc + "**/fonts/*.*",
      fontDest: vendorDest + "fonts/"
  },
  release: {
    injectJS: "dist/app.min.js", 
    vendorJS: "dist/lib/js/vendor.min.js", 
    injectCSS: "dist/lib/css/all.min.css",
    js: "app.min.js",
    templates: "templates.js",
    css: "lib/css/all.min.css"
  },
  stage: stage,
  dist: dist  
};