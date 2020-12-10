if(process.env.NOE_ENV=='production'){
  module.exports=require('./dist/add-number.min.js')
}else{
  module.exports=require('./dist/add-number.js')
}