module.exports=function(source){
  
  return  `const styleElement=document.createElement('style');
  styleElement.innerHTML=${source};
  document.head.appendChild(styleElement)
  `
}