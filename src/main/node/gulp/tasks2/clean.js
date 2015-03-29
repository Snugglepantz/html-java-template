var gulp = require('gulp');
var clean = require('gulp-clean');
var config = require('../config2');

gulp.task('clean', ['cleanDist'], function () {
  return gulp.src(config.stage, {read: false})
    .pipe(clean());
});

gulp.task('cleanDist', function () {
  return gulp.src(['dist'], {read: false})
    .pipe(clean());
});