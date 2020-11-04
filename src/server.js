const express=require('express');
const app=express();
app.get('/api/info',(req,res)=>{
  res.json({
    name:'zyl'
  })
})

app.listen(3000)