const webpack = require('webpack');
require('dotenv').config();

const dotenvPlugin = new webpack.DefinePlugin({
    'process.env': {
        'MY_API_KEY': JSON.stringify(process.env.MY_API_KEY)
    }
});

module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    output: {
        path: `${__dirname}/docs/js`,
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                            ]
                        }
                    }
                ]
            }
        ]
    },
    target: ["web", "es5"],
    plugins: [dotenvPlugin]
};