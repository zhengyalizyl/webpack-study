const path = require("path");
const TerserWebpackPlugin=require('terser-webpack-plugin');

module.exports = {
  entry: {
    'add-number':"./src/index.js",
    'add-number.min':"./src/index.js",
  },
  output: {
    library:'addNumber',
    libraryTarget:'umd',
    filename: "[name].js",
    libraryExport:'default'//这个是必加的，可以简化用户的引入程序，源码的工厂函数中导出增加了["default"]属性读取
  },
  mode: "none",
  optimization:{
    minimize:true,
    minimizer:[
      new TerserWebpackPlugin({
        test:/\.min\.js$/
      })
    ]
  }
};
