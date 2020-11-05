class TxtWebpackPlugin{
 constructor(options){

 }
  apply(complier){
     complier.hooks.emit.tapAsync('TxtWebpackPlugin',(compilation,cb)=>{
      //  console.log(compilation.assets)
      // Object.keys(compilation.assets).forEach((item)=>{
      //   console.log(item)
      // })
       compilation.assets["zyl.txt"]={
         source:function(){
             return 'hi hi之后还是多好的'
         },
         size:function(){
           return 1
         }
       }
      cb();
     });
     complier.hooks.compile.tap('TxtWebpackPlugin',(compilation)=>{
       console.log('同步的钩子')
     })
  }
}

module.exports=TxtWebpackPlugin;