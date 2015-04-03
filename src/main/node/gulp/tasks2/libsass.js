var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var config = require('../config');

gulp.task('libsass', ['clean'], function() {
    return gulp.src(config.sass.files)
      .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(config.stage + config.css.dest));
})
