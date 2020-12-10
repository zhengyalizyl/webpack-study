const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackmerge=require('webpack-merge');
const baseConfig=require('./webpack.base.config')

const devconfig={
  mode: "development",
  module:{
    rules:[
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          "less-loader"
        ]
      },
    ]
  },
  devtool: "inline-source-map",
  devServer: {
    port: 8080,
    contentBase: "./dist",
    open: true,
    hot: true,
    hotOnly: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000"
      }
    }
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html"
    })
  ]
}



// module.exports=webpackmerge.merge(baseConfig,devconfig)
module.exports=(env)=>{
  
}