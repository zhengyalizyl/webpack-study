class FileWebpackPlugin {
  apply(complier) {
    //做人嘛，最重要的是开心
    complier.hooks.emit.tapAsync("FileWebpackPlugin", (compilation, cb) => {
      let length = Object.keys(compilation.assets).length;
      let fileName = "";
      let file = {};
      Object.keys(compilation.assets).forEach(item => {
        console.log(item);
        if (!item.includes("/")) {
          fileName = item;
        
        } else {
          let newItem = item.split("/");
          fileName = newItem[newItem.length - 1];
        }
        file[fileName] = item;
      });
      compilation.assets["fileList.txt"] = {
        source: function() {
          return `{
               fileName:${JSON.stringify(file, null, 2)},
               fileLength:${length}
             }`;
        },
        size: function() {
          return length;
        }
      };
      cb();
    });
  }
}

module.exports = FileWebpackPlugin;
