var gulp = require('gulp');
var flatten = require('gulp-flatten');
var config = require('../config2');

gulp.task("cssDev", ["copyDevCss", "copyVendorCss"]);

gulp.task("copyDevCss", function () {
    return gulp.src(config.css.src, {base: './src'})
      .pipe(gulp.dest(config.css.dest));
});

gulp.task("copyVendorCss", function () {
    return gulp.src(config.vendor.cssSrc)
      .pipe(flatten())
      .pipe(gulp.dest(config.vendor.cssDest));
});





