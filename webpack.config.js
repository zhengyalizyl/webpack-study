const path = require("path");

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
    filename: "main.js"
  },
  mode: "development"
};
