var autoPrefixer = require('autoprefixer');
var del = require('del');
var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var path = require('path');
var precss = require('precss');
var runSequence = require('run-sequence');
var webpack = require('webpack');

var settings = require('./settings');
var webpackConfig = require('./webpack.config');

var $ = gulpLoadPlugins({
  config: settings.paths.package
});

// clean
gulp.task('build:clean', function() {
  return del(settings.paths.dist);
});

// js
gulp.task('build:js', function(done) {
  webpack(webpackConfig, function(err, stats) {
    if (err) new $.util.PluginError('webpack', err);
    $.util.log('[webpack]', stats.toString());
    done();
  });
});

// css
gulp.task('build:css', function() {
  return gulp.src(settings.paths.src.css)
    .pipe($.sourcemaps.init())
    .pipe($.postcss([autoPrefixer, precss]))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(settings.paths.dist));
});

// html
gulp.task('build:html', function() {
  return gulp.src(settings.paths.src.html)
    .pipe(gulp.dest(settings.paths.dist));
});

// watch
gulp.task('build:watch', function() {
  $.watch(settings.paths.watch.js, function() {
    gulp.start('build:js');
  });

  $.watch(settings.paths.watch.css, function() {
    gulp.start('build:css');
  });

  $.watch(settings.paths.watch.html, function() {
    gulp.start('build:html');
  });
});

// default
gulp.task('default', function(done) {
  runSequence('build:clean', ['build:js', 'build:css', 'build:html'], 'build:watch', done);
});
