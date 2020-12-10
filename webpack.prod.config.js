const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackmerge=require('webpack-merge');
const baseConfig=require('./webpack.base.config')
const OptimizeCssAssetsWebpackPlugin=require('optimize-css-assets-webpack-plugin');
const path=require('path');
const PurifyCss=require('purifycss-webpack');
const glob=require('glob-all')
const prodconfig={
  mode: "production",
  module:{
    rules:[
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          // "style-loader",
          "css-loader",
          "postcss-loader",
          "less-loader"
        ]
      },
    ]
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    }),
    new PurifyCss({
      path:glob.sync([
        path.join(__dirname,'./src/*.html'),
        path.join(__dirname,'./src/*.js')
      ])
    }),
    new HtmlWebpackPlugin({//在production下面要进行压缩
      template: "./src/index.html",
      filename: "index.html",
      minify:{
        removeComments:true,//移除HTML中的注释
        collapseWhitespace:true,//删除空白符与换行符
        minifyCSS:true,//压缩内联css
      }
    }),
    new OptimizeCssAssetsWebpackPlugin({
      cssProcessor:require('cssnano')//css压缩
    })
  ]
}

module.exports=webpackmerge.merge(baseConfig,prodconfig)