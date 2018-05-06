const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        publicPath: "/",
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            title: 'Shobokshy',
            template: 'index.html',
            filename: 'index.html'    
        }),
        new HtmlWebpackHarddiskPlugin({
            outputPath: path.resolve(__dirname, 'dist')
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
};