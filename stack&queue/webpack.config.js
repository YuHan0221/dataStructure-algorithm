const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: {
        stack: './src/component/stack.js',
        queue: './src/component/queue.js',
        priorityQueue: './src/component/priorityQueue.js',
        stackUse: './src/index/stackUse.js',
        queueUse: './src/index/queueUse.js',
        hanoi: './src/index/hanoi.js',
        hanoiShow: './src/index/hanoiShow.js',
        pqueueUse: './src/index/pqueueUse.js',
        hotPotato: './src/index/hotPotato.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/"
    },
    devtool: 'eval',
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        hot: true,
        open: false,
        port: 1234
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin('./dist'),
        new HtmlWebpackPlugin({
            filename : 'stackUse',//输出的html路径
            //inject : 'head',  //js文件在head中，若为body则在body中
            inject : true,
            title : 'stack use',
            //excludeChunks: ['main'],//打包时不打包main.js文件
            chunks : ['stackUse'], //打包时只打包main和a的js文件，见entry，注意使用chunks时模板index.html文件里面不允许有script标签，即使注释掉也会报错
            minify : {
                removeComments : true, //打包后删除参数
                collapseWhitespace : true //打包后删除空格
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'queueUse',
            title: 'queue Use',
            chunks: ['queueUse'],
        }),
        new HtmlWebpackPlugin({
            filename: 'hanoi',
            title: 'hanoi',
            chunks: ['hanoi'],
        }),
        new HtmlWebpackPlugin({
            filename: 'hanoiShow',
            template: './view/hanoi.html',
            title: 'hanoiShow',
            chunks: ['hanoiShow']
        }),
        new HtmlWebpackPlugin({
            filename: 'priorityQueueUse',
            title: 'priorityQueue Use',
            chunks: ['pqueueUse'],
        }),
        new HtmlWebpackPlugin({
            filename: 'hotPotato',
            title: 'hotPotato',
            chunks: ['hotPotato'],
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};