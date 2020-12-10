const fs = require("fs");
const path = require("path");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const { transformFromAst } = require("@babel/core");

module.exports = class webpack {
  constructor(options) {
    const { entry, output } = options;
    // console.log(options);
    this.entry = entry;
    this.output = output;
    this.modules = [];
  }
  run() {
    //开发编译,执行打包
    const info = this.parse(this.entry);
    this.modules.push(info);

    for (let i = 0; i < this.modules.length; i++) {
      const item = this.modules[i];
      const dependencies = item.dependencies;
      if (dependencies) {
        for (let j in dependencies) {
          this.modules.push(this.parse(dependencies[j]));
        }
      }
    }
    console.log(this.modules);

    const obj = {};
    this.modules.forEach(item => {
      obj[item.entryFile] = {
        dependencies: item.dependencies,
        code: item.code
      };
    });

    console.log(obj)

    this.file(obj);
  }

  parse(entryFile) {
    // 暗号：优点感动了怎么办
    //分析入口模块的内容
    const content = fs.readFileSync(entryFile, "utf-8");
    //处理依赖
    const ast = parser.parse(content, {
      sourceType: "module"
    });

    const dependencies = {};
    traverse(ast, {
      ImportDeclaration({ node }) {
        const pathName = path.resolve(
          "./",
          path.join(path.dirname(entryFile), node.source.value)
        );
        dependencies[node.source.value] = pathName;
        console.log(dependencies);
      }
    });

    //处理内容
    const { code } = transformFromAst(ast, null, {
      presets: ["@babel/preset-env"]
    });

    //  console.log(code)
    return {
      entryFile,
      code,
      dependencies
    };
  }

  file(code) {
    //生成代码内容,webpack启动函数
    const filePath= path.join(this.output.path,this.output.filename)
    
   
    const bundle=`(function(graph){
     function require(module){

      function PathRequire(relativePath){
        return require(graph[module].dependencies[relativePath])
      }
       const exports={};
          (function(require,exports,code){
            eval(code)
          })(PathRequire,exports,graph[module].code)
          return exports;
     }
     require('${this.entry}')
    })(${JSON.stringify(code)})`
    //生成mian.js，位置是./dist目录
    fs.writeFileSync(filePath,bundle,'utf-8');
  
  }
};
