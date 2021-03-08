const webpack = require('webpack');
require('dotenv').config();

const dotenvPlugin = new webpack.DefinePlugin({
    'process.env': {
        'MY_API_KEY': JSON.stringify(process.env.MY_API_KEY)
    }
});

module.exports = {
    mode: 'development',
    entry: {
        'index': './src/js/index.js',
        'secscr': './src/js/secscr.js',
        'animation': './src/js/animation.js',
        'animation2': './src/js/animation2.js',
        'animation3': './src/js/animation3.js',
        'animation4': './src/js/animation4.js',
    },
    output: {
        path: `${__dirname}/docs/js`,
        filename: '[name].js'
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