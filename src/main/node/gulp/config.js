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
  sass: {
      config: "src/content/config.rb",
      files: "src/content/sass/**/*.scss",
      css: "src/content/css",
      sass: "src/content/sass",
      image: "src/content/img",
      js: "src/content/js",
      fonts: "sryc/content/fonts",
      require: []
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
    injectJS: ["dist/app.min.js", 'dist/templates.js'], 
    vendorJS: "dist/lib/js/vendor.min.js", 
    injectCSS: "dist/lib/css/all.min.css",
    js: "app.min.js",
    templates: "templates.js",
    css: "lib/css/all.min.css"
  },
  stage: stage,
  dist: dist  
};