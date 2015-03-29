var gulp = require('gulp');
var flatten = require('gulp-flatten');
var config = require('../config2');

gulp.task("fonts", function() {
  return gulp.src(config.vendor.fontSrc)
    .pipe(flatten())
    .pipe(gulp.dest(config.vendor.fontDest));
});