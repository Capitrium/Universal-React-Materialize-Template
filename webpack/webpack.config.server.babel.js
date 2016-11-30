import { resolve } from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import WebpackNotifierPlugin from 'webpack-notifier';

import nodeExternals from 'webpack-node-externals';

import commonConfig from './webpack.config.common.babel.js';
import devConfig from './webpack.config.dev.babel.js';
import prodConfig from './webpack.config.production.babel.js';

const serverConfig = {
    name: "server",

    target: "node",

    entry: {
        app: [
            'materialize-loader!./src/config/materialize.config.js',
            'styles/materialize-style.css',
            'styles/style.css',
            'webpack-material-design-icons',
            'application/server.tsx'
        ]
    },

    externals: nodeExternals({
         whitelist: [
             'webpack-material-design-icons',
             /\.(eot|woff|woff2|ttf|otf)(\?.*$|$)/,
             /\.(svg|png|jpg|jpeg|gif)$/,
             /\.(mp4|mp3|ogg|swf|webp)$/,
             /\.(css|scss|sass|sss|less)$/,
         ],
     }),

    output: {
        path: resolve(__dirname, '..', 'www'),
        filename: '[name].js',
        chunkFilename: '[name].js',
        libraryTarget: 'commonjs2',
        pathinfo: true
    },

    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'babel!ts'
            },
            {
                test: /\.jsx?$/,
                loader: 'babel'
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.ejs$/,
                loader: 'ejs'
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loaders: [
                    "file?hash=sha512&digest=hex&name=img/[name].[hash].[ext]",
                    "image-webpack?{optimizationLevel:7,interlaced:false}",
                    "image-maxsize-webpack?useImageMagick=true&max-width=1024"
                ]
            },
        ]
    },

    node: {
        __dirname  : false,
        __filename : false,
    },

    plugins: [
        new webpack.BannerPlugin('require("source-map-support").install();', { raw: true }),
        new webpack.ProvidePlugin({
            _: "underscore"
        }),
        new WebpackNotifierPlugin({ alwaysNotify: true, title: 'Webpack-Server' }),
    ]
};

const isDevBuild = process.env.NODE_ENV.indexOf("dev") !== -1;

let config = merge(
    merge(
        commonConfig,
        isDevBuild ? devConfig : prodConfig
    ),
    serverConfig
);

export default config;
