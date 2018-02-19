
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path")
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'index.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                //css file will not be displayed in the dist folder when using webpack-dev-server since dev-server is saved in memory NOT in disk
                test: /\.less$/, 
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader','less-loader'],
                    publicPath: '/dist'
                })
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 8080,
        stats: "errors-only",
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'blahr',
            minify: {
                collapseWhitespace: true
            },

            template: './src/index.html'
        }),
        new ExtractTextPlugin({
            filename: "app.css",
            allChunks: true
        })
    ]

}