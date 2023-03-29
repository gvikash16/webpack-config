let mode = "development";
if(process.env.Node_ENV ==="production"){
    mode = "production";
    console.log('mode', mode)
}
module.exports = {
    mode: mode,
    devtool: "source-map", // for source map
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    devServer: {
        contentBase: "./dist"
    }
}