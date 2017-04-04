const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
/* const HtmlWebpackPlugin = require('html-webpack-plugin');*/


module.exports = {
  devtool: false,
  entry: {
    /* components: './src/js/components/index.js',
    testComponent: './src/js/components/Test/Test.js',
    input: './src/js/components/Input/index.js',
    helloWorld: './src/js/components/HelloWorld/index.js',
    commentBox: './src/js/components/CommentBox/index.js',
    commentForm: './src/js/components/CommentForm/index.js',
    commentList: './src/js/components/CommentList/index.js',
    nodeList: './src/js/components/NodeList/index.js',
    test: './src/js/scripts/test/test.js',
    index: './src/js/scripts/index.js',*/
    'TestReact.test': path.join(__dirname, 'src', 'index.test.js'), // demo测试程序入口文件
    TestReact: path.join(__dirname, 'src', 'index.js'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/[name].js',
    chunkFilename: 'js/[id].chunk.js',
  },
  module: {
    preLoaders: [
      {
        // Eslint loader
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        include: [path.resolve(__dirname, 'src')],
        exclude: [nodeModulesPath],
      },
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader'),
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      /* {
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
           }*/
    ],
  },
  externals: { // 指定采用外部 CDN 依赖的资源，不被webpack打包
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  plugins: [

    // new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    /* new webpack.optimize.OccurenceOrderPlugin(),*/
    /*    new webpack.ProvidePlugin({ // 加载jq
          react: 'react'
        }),*/

    /*    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendors', // 将公共模块提取，生成名为`vendors`的chunk
        chunks: ['index', 'test'], // 提取哪些模块共有的部分
        minChunks: 3 // 提取至少3个模块共有的部分
      }),*/

    /* new ExtractTextPlugin('css/[name].css'),*/

    /* new HtmlWebpackPlugin({ // 根据模板插入css/js等生成最终HTML
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
    }),*/

    /* new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        // NODE_ENV: JSON.stringify(process.env.NODE_ENV)
        NODE_ENV: '"production"'
      }
    })*/
  ],
  devServer: {
    hot: true,
    inline: true,
    progress: true,
    port: '3001',
  },
  eslint: {
    configFile: '.eslintrc',
  },
};
