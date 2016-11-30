import webpack from 'webpack';

const devConfig = {
    devtool: "source-map",

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
            },
        }),
    ],
};

export default devConfig;
