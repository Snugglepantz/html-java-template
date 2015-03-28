var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');
var config = require('../config');

gulp.task('templates', function () {
  gulp.src(config.html.src)
    .pipe(templateCache('templates.js', {
      module: 'app.core',
      standalone: false,
      root: 'app/'
    }))
    .pipe(gulp.dest(config.stage));
});