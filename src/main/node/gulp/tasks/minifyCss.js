var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var config = require('../config');

gulp.task('minifyCss', function () {
  return gulp.src(config.css.src)
    .pipe(concat('all.min.css'))
    .pipe(minifyCSS({}))
    .pipe(gulp.dest(config.stage));
});