const webpack = require("webpack");
const path = require("path");
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
module.exports = {
    module: {
        loaders: [{
            test: /\.jsx$|\.js$/,
            loader: "react-hot!babel-loader",
            include: path.join(__dirname, 'app')
        },{
            test: /\.scss$/,
            loader: "style-loader!css-loader!sass-loader"
        }]
    },
    entry: {
        app: [
            'webpack-dev-server/client?http://localhost:3000', // WebpackDevServer host and port
            'webpack/hot/dev-server', // "only" prevents reload on syntax errors
            "./app/js/app.jsx"
        ],
        vendor: ["react", "react-dom", "react-router","react-redux","redux"]
    },
    output: {
        path: path.join(__dirname, '/app/bundle'),
        filename: "[name].bundle.js",
        publicPath: '/bundle'
    },
    resolve: {
        alias: {
            "widget": path.join(__dirname, './app/js/widget'),
            "base": path.join(__dirname, './app/js/base')
        }
        // ,
        // extensions: ['', '.js', '.jsx']
    },
    compiler: {
        stats: {
            colors: true
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity
        })
        // ,
        // new webpack.optimize.UglifyJsPlugin({
        //     sourceMap: false
        // })
        // ,
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': '"production"'
        // }),
    ],
    devtool: 'inline-source-map'
};
