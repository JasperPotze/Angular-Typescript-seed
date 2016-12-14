var path = require('path');
var webpack = require('webpack');
module.exports = {
    devtool: 'source-map',
    entry: ['./app/app.ts'],
    output: {
        path: './build',
        filename: 'app.js'
    },
    module: {
        loaders: [{
            test: /\.ts$/,
            include: path.resolve(__dirname, 'app'),
            loader: 'ts-loader'
        },{
            test: /\.scss$/,
            loader: 'style!css!sass'
        }]
    },
    resolve: {
        extensions: ['', '".webpack.js', '.web.js', '.ts', '.js']
    },
    watch: true
}