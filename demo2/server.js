/**
 * Created by hand on 2017/4/26.
 */
var path = require('path');
var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var webpackCfg = require('./webpack.config');
var compiler = webpack(webpackCfg);

var app = new webpackDevServer(compiler, {
    publicPath: webpackCfg.output.publicPath
});

app.listen(9090, "localhost", function(err) {
    if (err) {
        console.log(err);
    }
});