var gulp = require('gulp');
var flatten = require('gulp-flatten');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var config = require('../config');

gulp.task("cssDev", ["copyDevCss", "copyVendorCss"]);
gulp.task("css", ["minifyCss"]);

gulp.task("copyDevCss", function () {
    return gulp.src(config.css.src, {base: './src'})
      .pipe(gulp.dest(config.stage + config.css.dest));
});

gulp.task("copyVendorCss", function () {
    return gulp.src(config.vendor.cssSrc)
      .pipe(flatten())
      .pipe(gulp.dest(config.stage + config.vendor.cssDest));
});

gulp.task("minifyCss", function () {
    return gulp.src([].concat(config.vendor.cssSrc, config.css.src))
      .pipe(flatten())
      .pipe(concat('all.min.css'))
      .pipe(minifyCSS({}))
      .pipe(gulp.dest(config.dist + config.vendor.cssDest));
});





