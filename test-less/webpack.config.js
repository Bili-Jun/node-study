const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
let extractLESS = new ExtractTextPlugin('[name].less');

module.exports = {
    entry: {
      'less':path.resolve(__dirname, 'index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),//编译生成的css存放目录
        filename: 'build.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
        {
          test: /\.less$/,
          loader: ExtractTextPlugin.extract(
            'css?sourceMap!' +
            'less?sourceMap'
          )
        }
      ]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ]
}