module.exports=function(source){
  console.log(this.query)
  const callback=this.async();
const content=source.replace('hello','nihao')
setTimeout(()=>{
callback(null,content)
},1000)
  // this.callback(null,content)
  // return source.replace('hello','nihao')
}