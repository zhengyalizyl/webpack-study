const fs = require("fs");
const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

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
  plugins: [
   
    new CleanWebpackPlugin(),
  ],

};
