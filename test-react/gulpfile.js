const _ = require('lodash');
const webpack = require('webpack');
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const webpackConfig = require('./webpack.config.js');


gulp.task('default', ['build', 'webpack', 'watch']);

gulp.task('webpack', (callback) => {
  webpack(_.merge(webpackConfig, {
    devtool: null
  }), () => {
    // compileLogger(err, stats);
    callback();
  });
});

gulp.task('watch', () => {
  gulp.watch('src/*.js', ['webpack']);
});

gulp.task('build', () => {
  gulp.src('src/**/*.js')
         .pipe(uglify())
         .pipe(gulp.dest('dist'));
});
