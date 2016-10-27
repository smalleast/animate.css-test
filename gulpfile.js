/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are splitted in several files in the gulp directory
 *  because putting all here was really too long
 */

'use strict';

var gulp = require('gulp');
var del = require('del');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*', 'del']
});


gulp.task('clean', function () {
  return del('dist');
});
gulp.task('styles', function () {
  return gulp.src('bower_components/animate.css/**.css')
    .pipe(gulp.dest('src/css'));
});

gulp.task('htmls', function() {
  return gulp.src(['src/**/*.html','src/**/*.css'])
    .pipe($.fileInclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe($.htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['clean'], function () {
  gulp.start(['styles','htmls']);
});
