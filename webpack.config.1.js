const fs = require("fs");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const TxtWebpackPlugin=require('./src/myPlugins/txt-webpack-plugin')
const FileWebpackPlugin=require('./src/myPlugins/file-webpack-plugin')

module.exports = {
  // entry: {
  //   index: "./src/index.js",
  //   detail: "./src/detail.js",
  //   info: "./src/info.js"
  // },
  // entry:['./src/index.js','./src/detail.js'],
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js"
  },
  mode: "development",
  resolveLoader: {
    modules: ["node_modules", path.resolve(__dirname, "./myLoaders")]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: [
          // MiniCssExtractPlugin.loader,
          "style-loader",
          "css-loader",
          "postcss-loader",
          "less-loader"
        ]
      },
      // {
      //   test: /\.less$/,
      //   use: [
      //     "my-style-loader",
      //     "my-css-loader",
      //     "my-less-loader"
      //   ]
      // },
      // {
      //   test: /\.js$/,
      //   use: [
      //     {
      //       loader: "replace-loader"
      //     },
      //     {
      //       loader: "replace-loader-async",
      //       options: {
      //         name: "zyl"
      //       }
      //     }
      //   ]
      // },
      {
        test:/.\js$/,
        use:[{
          loader:'babel-loader',
        }]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: {
          loader: "url-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "images/",
            publicPath: "/",
            limit: 1024 * 3
          }
        }
      }
    ]
  },
  devtool: "source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new TxtWebpackPlugin({
     name:'zyl'  
    }),
    new FileWebpackPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html"
    })
  ],
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
  }
};
