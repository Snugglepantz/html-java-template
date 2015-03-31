var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var compass = require('gulp-compass');
var config = require('../config');

gulp.task("sass", ["clean"], function () {
    return gulp.src(config.sass.files)
      .pipe(compass({
          sass: config.sass.sass,
          css: config.sass.css,
          image: config.sass.image,
          js: config.sass.js,
          font: config.sass.fonts
      }))
      .pipe(gulp.dest(config.stage + config.css.dest));
});