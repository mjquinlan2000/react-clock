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
      exclude: /(node_modules|bower_components)/
    }]
  }
};
