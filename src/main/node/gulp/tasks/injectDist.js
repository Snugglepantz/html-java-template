var gulp = require('gulp');
var inject = require("gulp-inject");
var mainBowerFiles = require("main-bower-files");
var filter = require('gulp-filter');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var config = require('../config');

var jsFilter = filter('*.js');
var cssFilter = filter('*.css');


gulp.task("injectDist", ['clean', 'uglifyJs', 'minifyCss'], function () {
  var bowerOptions = {
    name: "bower",
    ignorePath: config.stage,
    addRootSlash: false
  }

  return gulp.src(config.html.index)
    .pipe(inject(
      gulp.src(mainBowerFiles())
        .pipe(jsFilter)
        .pipe(concat('config.js.vendorFile'))
        .pipe(uglify())
        .pipe(gulp.dest(config.stage)),
      bowerOptions
    ))
    .pipe(inject(
      gulp.src(mainBowerFiles())
        .pipe(cssFilter)
        .pipe(concat(config.css.vendorFile))
        .pipe(minifyCSS({}))
        .pipe(gulp.dest(config.stage)),
      bowerOptions
    ))
    .pipe(inject(gulp.src(config.stage + '/' + config.js.dist),
      {
        ignorePath: config.stage,
        addRootSlash: false
      }
    ))
    .pipe(inject(gulp.src(config.stage + '/' + config.css.dist),
      {
        ignorePath: config.stage,
        addRootSlash: false
      }
    ))
    .pipe(gulp.dest(config.stage));
});