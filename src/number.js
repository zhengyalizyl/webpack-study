//number.js
function number(){
  let div=document.createElement("div");
  div.setAttribute("id","number");
  div.innerHTML=1300;
  div.onclick=function(){
      div.innerHTML=parseInt(div.innerHTML,10)+1;
  };
  document.body.appendChild(div);
}
export default number;