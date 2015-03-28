var gulp= require('gulp');
var config = require('../config');

gulp.task("dist", ['injectDist'], function() {
  return gulp.src(config.stage + '/**/*.*')
    .pipe(gulp.dest(config.release));
})
