const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // 开发模式,上线用生产模式
    mode: "production", 
    entry: {
        index: "./main.ts",
    },
    output: {
        filename: 'main.js', //输出的文件           
        path: path.resolve(__dirname, 'dist'), //输出文件所在的目
    },
    devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, 'dist') // 设置静态资源的根目录
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts",".js"]
    },
    module: { 
        rules: [ 
            {
                test: /\.ts$/,
                loader: "ts-loader"
            }
        ]
    },

    plugins: [
        // 这个插件是生成index.html
        new HtmlWebpackPlugin({
            // 以哪个文件为模板，模板路径
            template: "./index.html",
            // 编译后的文件名
            filename: "index.html"
        }),
    ]
}