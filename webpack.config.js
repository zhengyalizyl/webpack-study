const fs = require("fs");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  // entry:{
  //   index:'./src/index.js',
  //   detail:'./src/detail.js',
  //   info:'./src/info.js'
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
      // {
      //   test: /\.less$/,
      //   use: [
      //     MiniCssExtractPlugin.loader,
      //     "css-loader",
      //     "postcss-loader",
      //     "less-loader"
      //   ]
      // },
      {
        test: /\.less$/,
        use: [
          "my-style-loader",
          "my-css-loader",
          "my-less-loader"
        ]
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: "replace-loader"
          },
          {
            loader: "replace-loader-async",
            options: {
              name: "zyl"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html"
    })
  ]
};
