'use strict';

// 
var gulp = require('gulp');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');

// -------------------------------------
gulp.task('sass', () => {
    return gulp.src('./resources/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(uglifycss())
    .pipe(gulp.dest('./public/css'));
});

// watch
gulp.task('watch', () => {
    gulp.watch('./resources/sass/**/*.scss', gulp.series('sass'));
  });
  
  
gulp.task('default', gulp.parallel( 'sass','watch'));