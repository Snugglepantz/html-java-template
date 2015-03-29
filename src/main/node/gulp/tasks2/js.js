var gulp = require('gulp');
var flatten = require('gulp-flatten');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var templateCache = require('gulp-angular-templatecache');
var config = require('../config');

gulp.task("jsDev", ["copyDevJs", "copyVendorJs"]);
gulp.task("js", ["appJs", "vendorJs", 'templates']);

gulp.task("copyDevJs", function () {
    return gulp.src(config.js.src, {base: './src'})
      .pipe(gulp.dest(config.stage));
});

gulp.task("copyVendorJs", function () {
    return gulp.src(config.vendor.jsSrc)
      .pipe(flatten())
      .pipe(gulp.dest(config.stage + config.vendor.jsDest));
});

gulp.task("appJs", function () {
    return gulp.src(config.js.src)
      .pipe(concat('app.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest(config.dist));
});

gulp.task("vendorJs", function () {
    return gulp.src(config.vendor.jsSrc)
      .pipe(flatten())
      .pipe(concat('vendor.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest(config.dist + config.vendor.jsDest));
});

gulp.task('templates', function () {
  gulp.src(config.html.src)
    .pipe(templateCache('templates.js', {
      module: 'app.core',
      standalone: false
    }))
    .pipe(gulp.dest(config.dist));
});

