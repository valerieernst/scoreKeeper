const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const webpack = require('webpack');
const webpackConfig = require('../webpackConfig.js');
const webpackDevMiddleware = require('webpack-dev-middleware');

//instantiate app using express
const app = express();

//use webpack with custom config
const compiler = webpack(webpackConfig);

//using dev middleware instead of hot reload for simplicity
app.use(webpackDevMiddleware(compiler, {
  publicPath: '/',
  stats: {
    // Config to log when webpack compiles successfully
    assets: false,
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false,
  }
}));

//set port for app
const port = process.env.port || 3030

//parse incoming requests
app.use(bodyParser.json());

//server static files from dist folder
app.use(express.static(path.join(__dirname, '../dist')));

//launch app
app.listen(port, () => console.log('App listening on ', port));