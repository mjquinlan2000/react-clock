const path = require('path');

module.exports = {
  context: path.join(__dirname, 'app'),
  entry: {
    application: './index'
  },
  output: {
    filename: '[name].js',
    publicPath: 'scripts',
    path: 'dist'
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      test: /\.js$/,
      include: path.join(__dirname, 'app')
    }, {
      loaders: ['style-loader', 'css-loader', 'sass-loader'],
      test: /\.scss$/,
      include: path.join(__dirname, 'app')
    }]
  },
  resolve: {
    alias: {
      app: path.join(__dirname, 'app')
    }
  }
};
