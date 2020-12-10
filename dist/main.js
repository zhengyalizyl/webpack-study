(function(graph){
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
     require('./src/index.js')
    })({"./src/index.js":{"dependencies":{"./a.js":"F:\\zyl\\webpack-study\\src\\a.js","./b.js":"F:\\zyl\\webpack-study\\src\\b.js"},"code":"\"use strict\";\n\nvar _a = require(\"./a.js\");\n\nvar _b = require(\"./b.js\");\n\n// import {str} from'./a.js'\n// import \"./index.css\";\n// import './index.less'\n// import axios from \"axios\";\n// axios.get('/api/info').then(res=>{\n//   console.log(res)\n// })\n// console.log('hihi'+str)\n// import logo  from './2.jpg';\n// const  pic=new Image();\n// pic.src=logo;\n// const tag=document.getElementById('app');\n// tag.append(pic)\n// let btn=document.createElement('button');\n// btn.innerHTML='add';\n// document.body.appendChild(btn);\n// btn.onclick=function(){\n//   let div=document.createElement('div');\n//   div.innerHTML='item';\n//   document.body.appendChild(div)\n// }\n// import counter from \"./count\";\n// import number from \"./number\";\n// counter();\n// number();\n// if(module.hot){\n//     module.hot.accept(\"./number\",function(){\n//         document.body.removeChild(document.getElementById(\"number\"));\n//         number();\n//     })\n// }\n// const arr=[new Promise(()=>{}),new Promise(()=>{})];\n// arr.map(item=>{\n//  console.log(item);\n//  })\n// const webpack=require('webpack');\n// const webpackConfig=require('../webpack.config');\n// const  compiler=webpack(webpackConfig);\n// Object.keys(compiler.hooks).forEach((hookName)=>{\n//   compiler.hooks[hookName].tap('zyl',()=>{\n//     console.log(`run-------${hookName}`)\n//   })\n// })\n// compiler.run();\nconsole.log(\"hello \".concat(_a.str, \",\").concat(_b.str2));"},"F:\\zyl\\webpack-study\\src\\a.js":{"dependencies":{},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.str = void 0;\nvar str = 'hihizykk';\nexports.str = str;"},"F:\\zyl\\webpack-study\\src\\b.js":{"dependencies":{},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.str2 = void 0;\nvar str2 = 'buhao';\nexports.str2 = str2;"}})