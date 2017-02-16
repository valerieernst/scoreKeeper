const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'source-map',

  entry: [
    path.join(__dirname, '/client/index.jsx'),
  ],

  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'bundle.js',
    publicPath: '/',
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react'],
      },
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader',
    },
    ],
  },
};
