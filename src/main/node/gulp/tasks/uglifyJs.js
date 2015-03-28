var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var config = require('../config');

gulp.task('uglifyJs', ['templates'], function () {
  var source = [].concat(config.js.src, config.stage + 'templates.js');
  return gulp.src(source)
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(config.stage));
});