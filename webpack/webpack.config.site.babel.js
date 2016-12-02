import { resolve } from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import AssetsPlugin from 'assets-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import WebpackNotifierPlugin from 'webpack-notifier';

import commonConfig from './webpack.config.common.babel.js';
import devConfig from './webpack.config.dev.babel.js';
import prodConfig from './webpack.config.production.babel.js';

const siteConfig = {
    name: "client",

    target: "web",

    entry: {
        vendor: [
            'jquery',
            'react',
            'react-dom',
            'react-router',
            'react-materialize',
        ],
        materialize: [
            'materialize-loader!./src/config/materialize.config.js',
            'materialize-css',
            'styles/style.css',
        ],
        icons: [
            'webpack-material-design-icons',
        ],
        app: 'client.tsx'
    },

    output: {
        path: resolve(__dirname, '..', 'www'),
        filename: "js/[hash].[name].js",
        chunkFilename: "js/[hash].[id].[name].js",
    },

    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'babel!ts'
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: require.resolve("jquery"),
                loader: "expose?$!expose?jQuery"
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loaders: [
                    "file?hash=sha512&digest=hex&name=img/[name].[hash].[ext]",
                    "image-webpack?{optimizationLevel:7,interlaced:false}"
                ]
            },
        ],
    },

    plugins: [
        new AssetsPlugin({filename: 'www/assets.json'}),
        new webpack.optimize.CommonsChunkPlugin({
            names: ["icons", "materialize", "vendor"],
            filename: "js/[name].bundle.[hash].js"
        }),
        new FaviconsWebpackPlugin({
            logo: 'images/logo.png',
            prefix: 'icons/[hash]/',
            emitStats: true,
            statsFilename: 'iconstats.json',
            title: "Capitrium Games",
        }),
        new HtmlWebpackPlugin({ template: 'src/views/index.ejs' }),
        new WebpackNotifierPlugin({ alwaysNotify: true, title: 'Webpack-Site' }),
    ],
};


const isDevBuild = process.env.NODE_ENV.indexOf("dev") !== -1;

let config = merge(
    merge(
        commonConfig,
        isDevBuild ? devConfig : prodConfig
    ),
    siteConfig
);

export default config;
