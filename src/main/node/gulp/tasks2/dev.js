var gulp= require('gulp');
var config = require('../config');

//gulp.task("dev", ['injectDev']);
gulp.task("dev", ['minifyCss', 'js']);