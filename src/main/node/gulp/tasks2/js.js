var gulp = require('gulp');
var flatten = require('gulp-flatten');
var config = require('../config2');

gulp.task("jsDev", ["copyDevJs", "copyVendorJs"]);

gulp.task("copyDevJs", function () {
    return gulp.src(config.js.src, {base: './src'})
      .pipe(gulp.dest(config.stage));
});

gulp.task("copyVendorJs", function () {
    return gulp.src(config.vendor.jsSrc)
      .pipe(flatten())
      .pipe(gulp.dest(config.vendor.jsDest));
});


