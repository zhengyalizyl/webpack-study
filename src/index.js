import {str} from'./a.js'
// import "./index.css";
import './index.less'

import axios from "axios";

axios.get('/api/info').then(res=>{
  console.log(res)
})
console.log('hihi'+str)

// import logo  from './2.jpg';
// const  pic=new Image();
// pic.src=logo;
// const tag=document.getElementById('app');
// tag.append(pic)