var gulp = require('gulp');
var config = require('../config');

/**
 * Copy fonts
 * @return {Stream}
 */
gulp.task('fonts', ['clean'],function () {
  return gulp
    .src(['bower_components/bootstrap/fonts/*.*', 'bower_components/font-awesome/fonts/*.*'])
    .pipe(gulp.dest(config.stage+'/fonts/'));
});