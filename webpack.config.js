// webpack.config.js

const webpack = require('webpack');
const path = require('path');

const libName = 'ReactAutoHeaderList';
const fileName = libName + '.js';

var config = {
	mode: 'production',
  entry: __dirname + `/src/${fileName}`,
	devtool: 'source-map',
	externals: {
		react: 'react'
	},
  output: {
    path: __dirname + '/lib',
    filename: fileName,
    library: libName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
			}
    ]
  }
};

module.exports = config;
