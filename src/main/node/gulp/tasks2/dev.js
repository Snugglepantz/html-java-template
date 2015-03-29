var gulp= require('gulp');
var config = require('../config2');

gulp.task("dev", ['cssDev', "jsDev", "fonts", "html"]);