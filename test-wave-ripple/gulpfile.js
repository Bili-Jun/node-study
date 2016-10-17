const _ = require('lodash');
const webpack = require('webpack');
const gulp = require('gulp');
const webpackConfig = require('./webpack.config.js');
const eslint = require('eslint');
const path = require('path');

const ROOT_PATH = path.resolve(__dirname);
const SCRIPTS_PATH = path.resolve(ROOT_PATH, 'scripts');
const DIST_PATH = path.resolve(ROOT_PATH, 'dist');
const MODULE_PATH = path.resolve(ROOT_PATH, 'node_modules');

gulp.task('default', ['webpack','watch']);

gulp.task('webpack', function(callback) {
  webpack(_.merge(webpackConfig, {
        devtool: null
    }), function(err, stats) {
        //compileLogger(err, stats);
        callback();
    });
});

gulp.task('watch', function () {
   gulp.watch('scripts/*.js', ['webpack']);
   
});

