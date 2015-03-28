var gulp = require('gulp');
var config = require('../config');

gulp.task("copyDev", ['less'], function() {
  return gulp.src(['src/**/*.*', '!src/index.html', '!src/content/**/*.css', '!src/less/**.*'], {base: './src'})
    .pipe(gulp.dest(config.stage));
});