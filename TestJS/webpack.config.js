module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        static: './dist',
        hot: true,

      },
    output: {
        filename: 'main.js'
    },
     
}