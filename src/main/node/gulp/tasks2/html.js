var gulp = require('gulp');
var config = require('../config');

gulp.task("html", ["htmlPages"]);

gulp.task("htmlPages", function() {
  return gulp.src(config.html.src, {base: './src'})
    .pipe(gulp.dest(config.stage));
});