module.exports = function () {
  var build = 'dist/';
  var vendorSrc = 'bower/lib/';
  var vendorCSSDest = build + 'vendorCSS/';
  var vendorJSDest = build + 'vendorJS/';
  var config = {
    build: build,
    index: 'src/index.html',
    html: [
      '!src/index.html',
      'src/**/*.html'
    ],
    js: {
      src: [
        './src/**/*.module.js',
        './src/**/*.js'
        ],
      dest: build,
      vendorSrc: [
        vendorSrc + '**/jquery/**/*.js',
        vendorSrc + '**/angular/**/*.js',
        vendorSrc + '**/bootstrap/**/*.js',
        vendorSrc + '**/*.js',
        ],
      vendorDest: vendorJSDest,
    },
    css: {
      less: 'src/less/**/*.less',
      css: [
        'src/content/**/*.css',
        build + 'css/**/*.css'
        ],
      dest: build + 'css/',
      vendorSrc: [
        vendorSrc + '**/bootstrap/*.css',
        vendorSrc + '**/*.css'
        ],
      vendorDest: vendorCSSDest,
    },
    fonts: {
      src: ['bower_components/bootstrap/fonts/*.*',
        'bower_components/font-awesome/fonts/*.*',
        'src/content/fonts/**/*.*'],
      dest: build + 'fonts'
    },
    images: {
      src: 'src/content/images/**.*',
      dest: build + 'content/images/'
    },
    flash: {
      src: vendorSrc + '**/*.swf',
      dest: vendorJSDest
    },
    injectOther: {
      ignorePath: build,
      addRootSlash: false
    },
    injectBower: {
      name: "bower",
      ignorePath: build,
      addRootSlash: false
    }

  };

  return config;
};