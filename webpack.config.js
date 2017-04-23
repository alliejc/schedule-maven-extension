const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: './src/event-page.js',
    output: {
        path: `${__dirname}/dist`,
        filename: 'build.js',
        publicPath: '/',
        sourcePrefix: '  ',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'auth-popup.html',
            template: './src/auth-popup.html',

        }),
        new CopyWebpackPlugin([
            { from: './src/manifest.json', to: 'manifest.json' },
            { from: 'assets', to: 'assets' },
        ])
    ]
};