var gulp = require('gulp');
var less = require('gulp-less');
var config = require('../config');

gulp.task('less', ['fonts'], function() {
  gulp.src('src/less/*.less')
    .pipe(less())
    .pipe(gulp.dest(config.stage + '/css/'));
})