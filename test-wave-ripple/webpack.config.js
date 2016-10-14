const path = require('path');
const webpack = require('webpack');

const ROOT_PATH = path.resolve(__dirname);
const SCRIPTS_PATH = path.resolve(ROOT_PATH, 'scripts');
const DIST_PATH = path.resolve(ROOT_PATH, 'dist');
const MODULE_PATH = path.resolve(ROOT_PATH, 'node_modules');

const config = {
    entry: {
        'index': path.resolve(SCRIPTS_PATH, 'index'),
    },
    output: {
        path: DIST_PATH,
        filename: 'index.js',
        publicPath: '/'
    },
    module: {
        preLoaders: [
            { test: /\.js$/, loader: "eslint-loader", exclude: /scripts/ }
        ],
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            include: [SCRIPTS_PATH]
        }]
    },
    resolve: {
        modulesDirectories: [
            'node_modules',
            'scripts'
        ],
    },
    eslint: {
        failOnWarning: true
    }
}

module.exports = config;