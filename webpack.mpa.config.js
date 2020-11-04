const fs = require("fs");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const glob = require("glob");

function setMpa() {
  const entry = {};
  const htmlWebpackPlugin = [];
  const entryFiles = glob.sync(path.join(__dirname, "./src/*/index.js"));
  console.log(entryFiles);
  entryFiles.map((entryFile) => {
    //暗号：等价交换，炼金术不变的原则
    const matchFile = entryFile.match(/src\/(.*)\/index\.js$/);
    console.log(matchFile);
    const pageName=matchFile[1];
    entry[pageName] = entryFile;
    htmlWebpackPlugin.push(new HtmlWebpackPlugin({
      template:`./src/${pageName}/index.html`,
      filename:`${pageName}.html`,
      chunks:[pageName]
    }))
  });
  return {
    entry,
    htmlWebpackPlugin
  };
}

const { entry, htmlWebpackPlugin } = setMpa();

module.exports = {
  entry,
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
          MiniCssExtractPlugin.loader,
          // "style-loader",
          "css-loader",
          "postcss-loader",
          "less-loader"
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
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: {
          loader: "url-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "images/",
            publicPath: "../images",
            limit: 1024 * 3
          }
        }
      }
    ]
  },
  devtool: "source-map",
  plugins: [
    ...htmlWebpackPlugin,
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    })
  ],
  devServer: {
    port: 8080,
    contentBase: "./dist",
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000"
      }
    }
  }
};
