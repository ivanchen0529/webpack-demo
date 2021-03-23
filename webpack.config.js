var path = require('path');

module.exports = {
    mode: 'development',   //development(开发)  production(用户)
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js'
    }
};