var webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
var config = {
  
  entry: {
    "angular-image-cropper": __dirname + '/src/index.js',
    "angular-image-cropper.min": __dirname + '/src/index.js'
  },

  output: {
    path: __dirname + '/dist',
    filename: "[name].js",
	library: 'imageCropper',
	libraryTarget: 'umd'
  },
  externals: { angular: 'angular' },
  devtool: 'source-map',

  plugins: [
    new webpack.DefinePlugin({
      ON_TEST: process.env.NODE_ENV === 'test'
    }),
	new UglifyJsPlugin({
        include: /\.min\.js$/
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