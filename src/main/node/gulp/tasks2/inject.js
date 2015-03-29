var gulp = require('gulp');
var inject = require("gulp-inject");
var config = require('../config');

gulp.task("injectDev", ['cssDev', "jsDev", "fontsDev", "html"], function () {

    return gulp.src(config.html.index)
      .pipe(inject(
        gulp.src(
          [
              config.stage + config.vendor.jsFiles,
              config.stage + config.vendor.cssFiles
          ]),
        {
            name: "vendor",
            ignorePath: "build/",
            addRootSlash: false
        }
      ))
      .pipe(inject(gulp.src(config.stage + config.js.files),
        {
            ignorePath: 'build/',
            addRootSlash: false
        }
      ))
      .pipe(inject(gulp.src(config.stage + config.css.files),
        {
            ignorePath: 'build/',
            addRootSlash: false
        }
      ))
      .pipe(gulp.dest(config.stage));
});