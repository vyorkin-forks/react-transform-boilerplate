var path = require('path');
var webpack = require('webpack');

var NODE_MODULES_PATH = path.resolve(__dirname, './node_modules');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  resolve: {
    root: path.resolve(__dirname, '.'),
    extensions: ['', '.scss', '.jsx', '.js', '.json']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css?modules']
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css?modules', 'sass?includePath[]=' + NODE_MODULES_PATH],
      },
      {
        test: /\.sass$/,
        loaders: ['style', 'css?modules', 'sass?includePath[]=' + NODE_MODULES_PATH + '&indentedSyntax'],
      }
    ]
  }
};
