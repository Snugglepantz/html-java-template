var gulp = require('gulp');
var config = require('../config');

gulp.task("copyDevCss", ['copyDev'], function() {
  return gulp.src(['src/content/**/*.css'], {base: './src/content/'})
    .pipe(gulp.dest(config.stage + '/css/'));
});