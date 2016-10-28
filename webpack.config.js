const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, 'app'),
  entry: {
    application: './index'
  },
  output: {
    filename: '[name].js',
    publicPath: 'scripts',
    path: 'static'
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
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`
    })
  ]
};
