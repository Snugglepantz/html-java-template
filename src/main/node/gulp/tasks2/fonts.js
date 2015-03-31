var gulp = require('gulp');
var flatten = require('gulp-flatten');
var config = require('../config');

gulp.task("fontsDev", ["clean"], function() {
  return gulp.src(config.vendor.fontSrc)
    .pipe(flatten())
    .pipe(gulp.dest(config.stage + config.vendor.fontDest));
});

gulp.task("fontsRelease", ["clean"], function() {
  return gulp.src(config.vendor.fontSrc)
    .pipe(flatten())
    .pipe(gulp.dest(config.dist + config.vendor.fontDest));
});