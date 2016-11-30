import webpack from 'webpack';

const commonConfig = {

    resolve: {
        extensions: ['', '.ts', '.tsx', '.js', '.jsx', '.css', '.scss', '.less'],
        modulesDirectories: ['src', 'node_modules'],
    },

    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: [
                    '@vtex/style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.scss$/,
                loaders: [
                    '@vtex/style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.less$/,
                loaders: [
                    '@vtex/style-loader',
                    'css-loader',
                    'less-loader'
                ],
            },
            {
                test: /\.(woff)(\?.*$|$)/,
                loader: 'url?limit=10000&mimetype=application/font-woff&name=fonts/[name].[hash].[ext]'
            },
            {
                test: /\.(woff2)(\?.*$|$)/,
                loader: 'url?limit=10000&mimetype=application/font-woff2&name=fonts/[name].[hash].[ext]'
            },
            {
                test: /\.(svg)(\?.*$|$)/,
                loader: 'url?limit=10000&mimetype=image/svg+xml&name=fonts/[name].[hash].[ext]',
            },
            {
                test: /\.(eot|ttf)(\?.*$|$)/,
                loader: 'file?name=fonts/[name].[hash].[ext]',
            },
        ],

        preLoaders: [
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    imageWebpackLoader: {
        mozjpeg: {
            quality: 65
        },
        pngquant:{
            quality: "65-90",
            speed: 4
        },
        svgo:{
            plugins: [
                { removeViewBox: false },
                { removeEmptyAttrs: false }
            ]
        }
    },

    plugins: [
        new webpack.NoErrorsPlugin()
    ]
};

export default commonConfig;
