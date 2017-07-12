var webpack = require('webpack');

var config = {
  
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'angular-image-cropper.js',
	library: 'imageCropper',
	libraryTarget: 'umd'
  },
  externals: { angular: 'angular' },
  devtool: 'source-map',

  plugins: [
    new webpack.DefinePlugin({
      ON_TEST: process.env.NODE_ENV === 'test'
    })
  ],

  devtool: 'eval-source-map', // Dev only! Creating a source-map on the fly.

  module: {
    loaders: [
      {
        exclude: /node_modules/,
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        exclude: /node_modules/,
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  }
};  

module.exports = config;