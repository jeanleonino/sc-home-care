var del = require('del');
var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var path = require('path');
var runSequence = require('run-sequence');

var settings = require('./settings');

var $ = gulpLoadPlugins({
  config: settings.paths.package
});

// clean
gulp.task('build:clean', function() {
  return del(settings.paths.dist);
});

// js
gulp.task('build:js', function() {
  return gulp.src(settings.paths.src.js)
    .pipe(gulp.dest(settings.paths.dist));
});

// css
gulp.task('build:css', function() {
  return gulp.src(settings.paths.src.css)
    .pipe(gulp.dest(settings.paths.dist));
});

// html
gulp.task('build:html', function() {
  return gulp.src(settings.paths.src.html)
    .pipe(gulp.dest(settings.paths.dist));
});

// watch
gulp.task('build:watch', function() {
  $.watch(settings.paths.watch.js, ['build:js']);
  $.watch(settings.paths.watch.css, ['build:css']);
  $.watch(settings.paths.watch.html, ['build:html']);
});

gulp.task('default', function(done) {
  runSequence('build:clean', ['build:js', 'build:css'], 'build:html', 'build:watch', done);
});
