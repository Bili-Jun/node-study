const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
  devtool: false,
  entry: {
    components: './src/js/components/index.js',
    testComponent: './src/js/components/Test/Test.js',

    /* input: './src/js/components/Input/index.js',
    helloWorld: './src/js/components/HelloWorld/index.js',
    commentBox: './src/js/components/CommentBox/index.js',
    commentForm: './src/js/components/CommentForm/index.js',
    commentList: './src/js/components/CommentList/index.js',
    nodeList: './src/js/components/NodeList/index.js',*/

    test: './src/js/scripts/test/test.js',
    index: './src/js/scripts/index.js',
    vendors: [
      'react',
      'react-dom'
    ]
    /* react: 'react',
    'react-dom': 'react-dom'*/
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'js/[name]/[name].js',
    chunkFilename: 'js/[id].chunk.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      }, {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }, {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('css!less')
      }, {
        test: /\.html$/,
        loader: 'html?attrs=img:src img:data-src'
      }, {
        test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=./fonts/[name].[ext]'
      }, {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=8192&name=./img/[hash].[ext]'
      }
    ]
  },
  externals: {    // 指定采用外部 CDN 依赖的资源，不被webpack打包
    react: 'react',
    'react-dom': 'react-dom'
  },
  plugins: [

    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    /* new webpack.optimize.OccurenceOrderPlugin(),*/

    new ExtractTextPlugin('css/[name].css'),

    new HtmlWebpackPlugin({ // 根据模板插入css/js等生成最终HTML
      favicon: './src/img/favicon.ico', // favicon路径，通过webpack引入同时可以生成hash值
      filename: './view/index.html', // 生成的html存放路径，相对于path
      template: './src/view/index.html', // html模板路径
      inject: 'body', // js插入的位置，true/'head'/'body'/false
      hash: true, // 为静态资源生成hash值
      chunks: ['vendors', 'index'], // 需要引入的chunk，不配置就会引入所有页面的资源
      minify: { // 压缩HTML文件
        removeComments: true, // 移除HTML中的注释
        collapseWhitespace: false // 删除空白符与换行符
      }
    }),

    new HtmlWebpackPlugin({ // 根据模板插入css/js等生成最终HTML
      favicon: './src/img/favicon.ico', // favicon路径，通过webpack引入同时可以生成hash值
      filename: './view//test/test.html', // 生成的html存放路径，相对于path
      template: './src/view/test/test.html', // html模板路径
      inject: true, // js插入的位置，true/'head'/'body'/false
      hash: true, // 为静态资源生成hash值
      chunks: ['vendors', 'test'], // 需要引入的chunk，不配置就会引入所有页面的资源
      minify: { // 压缩HTML文件
        removeComments: true, // 移除HTML中的注释
        collapseWhitespace: false // 删除空白符与换行符
      }
    }),

    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        // NODE_ENV: JSON.stringify(process.env.NODE_ENV)
        NODE_ENV: '"production"'
      }
    })
  ],
  devServer: {
    contentBase: './',
    host: 'localhost',
    port: 9090, // 默认8080
    inline: true, // 可以监控js变化
    hot: true // 热启动
  }
};
