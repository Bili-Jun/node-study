const path = require('path');
const webpack = require('webpack');

const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
const DIST_PATH = path.resolve(ROOT_PATH, 'dist');
const MODULE_PATH = path.resolve(ROOT_PATH, 'node_modules');

const config={
    entry: {
        'index': path.resolve(SRC_PATH, 'index'),
    },
    output: {
        path: DIST_PATH,
        filename: 'index.js',
        publicPath: '/'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            include: [SRC_PATH]
        },{ test: /\.css$/, loader: 'style-loader!css-loader' }]
    },
    resolve: {
        modulesDirectories: [
            'node_modules',
            'src'
        ],
    },

}

module.exports = config;