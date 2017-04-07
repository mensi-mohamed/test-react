module.exports = {
    entry: {
        app: './index.js',
    },
    output: {
        filename: 'bundle.js',
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader?presets[]=es2017&presets[]=react'],
            }
        ]
    }
}
