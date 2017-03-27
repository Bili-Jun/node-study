const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');

module.exports = {
  devtool: false,
  entry: {
    'Dialog.test': path.join(__dirname, 'src', 'index.test.js'),
    Dialog: path.join(__dirname, 'src', 'index.js'),
  },

  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '',
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
        test: /\.css/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader'),
      }, {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
    ],
  },
  externals: {    // 指定采用外部 CDN 依赖的资源，不被webpack打包
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-addons-css-transition-group': 'React.addons.CSSTransitionGroup',
  },
  plugins: [],
  devServer: {
    hot: true,
    inline: true,
    progress: true,
    port: '3002',
  },
  eslint: {
    configFile: '.eslintrc',
  },
};
