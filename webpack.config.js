var path = require('path');
var webpack = require('webpack');
module.exports = {
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
        }]
    },
    resolve: {
        extensions: ['', '".webpack.js', '.web.js', '.ts', '.js']
    }
}