/**
 * Created by hand on 2017/4/26.
 */
var webpack = require('webpack');

module.exports = {
    entry: './app/main.js',
    output: {
        path: __dirname+"/build/",
        publicPath: "/build/",
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['react','es2015']
                }
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    }
};