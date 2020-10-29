
const fs=require('fs');
const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports={
  // entry:{
  //   index:'./src/index.js',
  //   detail:'./src/detail.js',
  //   info:'./src/info.js'
  // },
  // entry:['./src/index.js','./src/detail.js'],
  entry:'./src/index.js',
  output:{
     path:path.resolve(__dirname,'./dist'),
     filename:'[name].js'
  },
  mode:'development',
  module:{
    rules:[{
      test:/\.css$/,
      use:['style-loader','css-loader']
    }]
  },
  plugins:
  [new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
    template:'./src/index.html',
    filename:'index.html'
  })]
}