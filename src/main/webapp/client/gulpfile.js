/* jshint camelcase:false */
var gulp = require('gulp');
var merge = require('merge-stream');
var pkg = require('./package.json');
var plug = require('gulp-load-plugins')();

var env = plug.util.env;
var log = plug.util.log;

/**
 * List the available gulp tasks
 */
gulp.task('help', plug.taskListing);

/**
 * Lint the code
 * @return {Stream}
 */
gulp.task('analyze', function () {
  log('Analyzing source with JSHint and JSCS');

  var jshint = analyzejshint([].concat(pkg.paths.js), './.jshintrc');
  var jscs = analyzejscs([].concat(pkg.paths.js), './.jshintrc');
  return merge(jshint, jscs);
});

/**
 * Create $templateCache from the html templates
 * @return {Stream}
 */
gulp.task('templatecache', function () {
  log('Creating an AngularJS $templateCache');

  return gulp
    .src(pkg.paths.htmltemplates)
    .pipe(plug.angularTemplatecache('templates.js', {
      module: 'app.core',
      standalone: false,
      root: 'app/'
    }))
    .pipe(gulp.dest(pkg.paths.stage));
});

/**
 * Minify and bundle the app's JavaScript
 * @return {Stream}
 */
gulp.task('js', ['analyze', 'templatecache'], function () {
  log('Bundling, minifying, and copying the app\'s JavaScript');

  var source = [].concat(pkg.paths.js, pkg.paths.stage + 'templates.js');
  return gulp
    .src(source)
    .pipe(plug.concat('all.min.js'))
    .pipe(plug.ngAnnotate({add: true, single_quotes: true}))
    .pipe(plug.bytediff.start())
    .pipe(plug.uglify({mangle: true}))
    .pipe(plug.bytediff.stop())
    .pipe(gulp.dest(pkg.paths.stage));
});

/**
 * Copy the Vendor JavaScript
 * @return {Stream}
 */
gulp.task('vendorjs', function () {
  log('Bundling, minifying, and copying the Vendor JavaScript');
  return gulp.src(pkg.paths.vendorjs)
    .pipe(plug.concat('vendor.min.js'))
    .pipe(plug.bytediff.start())
    .pipe(plug.uglify())
    .pipe(plug.bytediff.stop())
    .pipe(gulp.dest(pkg.paths.stage)); // + 'vendor'));
});

/**
 * Minify and bundle the CSS
 * @return {Stream}
 */
gulp.task('css', function () {
  log('Bundling, minifying, and copying the app\'s CSS');
  return gulp.src(pkg.paths.css)
    .pipe(plug.concat('all.min.css')) // Before bytediff or after
    .pipe(plug.autoprefixer('last 2 version', '> 5%'))
    .pipe(plug.bytediff.start())
    .pipe(plug.minifyCss({}))
    .pipe(plug.bytediff.stop())
//        .pipe(plug.concat('all.min.css')) // Before bytediff or after
    .pipe(gulp.dest(pkg.paths.stage + 'content'));
});

/**
 * Minify and bundle the Vendor CSS
 * @return {Stream}
 */
gulp.task('vendorcss', function () {
  log('Compressing, bundling, copying vendor CSS');
  return gulp.src(pkg.paths.vendorcss)
    .pipe(plug.concat('vendor.min.css'))
    .pipe(plug.bytediff.start())
    .pipe(plug.minifyCss({}))
    .pipe(plug.bytediff.stop())
    .pipe(gulp.dest(pkg.paths.stage + 'content'));
});

/**
 * Copy fonts
 * @return {Stream}
 */
gulp.task('fonts', function () {
  var dest = pkg.paths.stage + 'fonts';
  log('Copying fonts');
  return gulp
    .src(pkg.paths.fonts)
    .pipe(gulp.dest(dest));
});

/**
 * Compress images
 * @return {Stream}
 */
gulp.task('images', function () {
  var dest = pkg.paths.stage + 'content/images';
  log('Compressing, caching, and copying images');
  return gulp
    .src(pkg.paths.images)
    .pipe(plug.cache(plug.imagemin({optimizationLevel: 3})))
    .pipe(gulp.dest(dest));
});

/**
 * Inject all the files into the new index.html
 * @return {Stream}
 */
gulp.task('injection',
  ['js', 'vendorjs', 'css', 'vendorcss'], function () {
    log('Injecting files and building index.html');

    var minified = pkg.paths.stage + '**/*.min.*';
    var index = pkg.paths.client + 'index.html';
    var minFilter = plug.filter(['**/*.min.*', '!**/*.map']);
    var indexFilter = plug.filter(['index.html']);

    var stream = gulp
      // Write the revisioned files
      .src([].concat(minified, index)) // add all staged min files and index.html
      .pipe(minFilter) // filter the stream to minified css and js
      .pipe(gulp.dest(pkg.paths.stage)) // write the rev files
      .pipe(minFilter.restore()) // remove filter, back to original stream

      // inject the files into index.html
      .pipe(indexFilter) // filter to index.html
      .pipe(inject('content/vendor.min.css', 'inject-vendor'))
      .pipe(inject('content/all.min.css'))
      .pipe(inject('vendor.min.js', 'inject-vendor'))
      .pipe(inject('all.min.js'))
      .pipe(gulp.dest(pkg.paths.stage)); // write the manifest

    function inject(path, name) {
      var glob = pkg.paths.stage + path;
      var options = {
        ignorePath: pkg.paths.stage.substring(1),
        read: false,
        addRootSlash: false
      };
      if (name) {
        options.name = name;
      }
      return plug.inject(gulp.src(glob), options);
    }
  });

/**
 * Stage the optimized app
 * @return {Stream}
 */
gulp.task('stage',
  ['injection', 'images', 'fonts'], function () {
    log('Staging the optimized app');

    return gulp.src('').pipe(plug.notify({
      onLast: true,
      message: 'Deployed code to stage!'
    }));
  });

////////////////

/**
 * Execute JSHint on given source files
 * @param  {Array} sources
 * @param  {string} jshintrc - file
 * @return {Stream}
 */
function analyzejshint(sources, jshintrc) {
  return gulp
    .src(sources)
    .pipe(plug.jshint(jshintrc))
    .pipe(plug.jshint.reporter('jshint-stylish'));
}

/**
 * Execute JSCS on given source files
 * @param  {Array} sources
 * @return {Stream}
 */
function analyzejscs(sources) {
  return gulp
    .src(sources)
    .pipe(plug.jscs('./.jscsrc'));
};