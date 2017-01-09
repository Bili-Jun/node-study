const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
let extractLESS = new ExtractTextPlugin('[name].scss');

module.exports = {
    entry: {
      'scss':path.resolve(__dirname, 'index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),//编译生成的css存放目录
        filename: 'index.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
        {
          test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
        }
      ]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ]
}