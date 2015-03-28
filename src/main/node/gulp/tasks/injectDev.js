var gulp = require('gulp');
var inject = require("gulp-inject");
var mainBowerFiles = require("main-bower-files");
var filter = require('gulp-filter');
var config = require('../config');

var jsFilter = filter('*.js');
var cssFilter = filter('*.css');


gulp.task("injectDev", ['copyDevCss'], function () {
  var bowerOptions = {
    name: "bower",
    ignorePath: config.stage,
    addRootSlash: false
  }

  return gulp.src(config.html.index)
    .pipe(inject(
      gulp.src(mainBowerFiles())
        .pipe(jsFilter)
        .pipe(gulp.dest(config.stage + '/js/')),
      bowerOptions
    ))
    .pipe(inject(gulp.src(config.js.src),
      {
        ignorePath: 'src/',
        addRootSlash: false
      }
    ))
    .pipe(inject(gulp.src([config.stage + '/css/**/*.css']),
      {
        ignorePath:  'build/',
        addRootSlash: false
      }
    ))
    .pipe(gulp.dest(config.stage));
});