const _ = require('lodash');
const webpack = require('webpack');
const gulp = require('gulp');
const webpackConfig = require('./webpack.config.js');


gulp.task('default', ['webpack', 'watch']);

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
