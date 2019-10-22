const path = require('path'); // node内置的模块用来设置路径
const HtmlWebpackPlugin = require('html-webpack-plugin'); //自动生成 html 文件的插件
// const CleanWebpackPlugin = require('clean-webpack-plugin'); // 清除之前打包的文件

module.exports = {
    entry: './src/js/entry.js', // 入口
    output: {                // 出口
        filename: 'bundle.js', // 输出的文件名
        path: path.resolve(__dirname, 'dist/js/') // __dirname：node 中跟目录，此处path为根目录拼接后面的 dist
    },
    module: {
          rules: [
              {
                  test: /\.css$/,
                  use: [
                      'style-loader',
                      'css-loader'
                  ]
              },
              {
                  test: /\.(png|svg|jpg|gif)$/,
                  use: [
                      {
                          loader : 'url-loader',
                          options : {
                              limit : 8192
                          }
                      }
                  ]
              }
          ]
      },
    devServer: {
       contentBase: './dist' // webpack 默认服务于根目录下index.html页面，不配置的话可能找不到index.html页面
      },
    plugins : [
        new HtmlWebpackPlugin({template: './index.html'}), // 根据index.html 生成新的html文件
        // new CleanWebpackPlugin(['dist']), //清楚的目录
    ]

};