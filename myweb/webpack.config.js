const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        main: './src/main.ts',
    },
    // target: 'web',
    output: {
        filename: 'index.js',
        path: __dirname + "/public/javascripts",
        libraryTarget: "umd",
        globalObject: "this",
    },
    // devtool: "source-map",
    module: {
        rules: [
            { test: /\.ts?$/, loader: "ts-loader" }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        modules: ['src', 'node_modules'], // important to help locate import resource (And all module file should be seperated.)
        plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })]
    },

    optimization: {
        minimizer: [new UglifyJsPlugin()],
    },
}