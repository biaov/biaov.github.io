import{d as f,r as v,c as o,a as e,F as c,b as _,u as l,e as g,t as r,o as n,n as d,f as m,g as k,p as b,h as w,_ as y}from"./index-61cd4767.js";const x="/logo.svg",C=()=>{const t=Object.freeze([{title:"首页",link:"/"},{title:"UI组件库",link:"https://mineh5ui.biaov.cn/v2"},{title:"简易博客",link:"http://wordpress.biaov.cn/"},{title:"CSDN",link:"https://blog.csdn.net/biao_feng"},{title:"Github",link:"https://github.com/biaov"}]),i=new Date().getFullYear();return{navList:t,now:i}},p=t=>(b("data-v-d8ccd1cf"),t=t(),w(),t),I={class:"header"},N={class:"wrap flex-center"},S=p(()=>e("div",{class:"lf flex-center"},[e("a",{href:"/",class:"logo"},[e("img",{src:x,width:"100%",alt:"logo",title:"首页"})]),e("span",{class:"name"},"个人网站")],-1)),D={class:"nav"},V=["href"],B={class:"footer"},F={class:"wrap"},L={class:"link"},z=["href"],R=p(()=>e("p",{class:"copyright"},[e("a",{href:"https://beian.miit.gov.cn",target:"_blank"},"湘ICP备18022869号-2")],-1)),j=f({__name:"index",setup(t){const{navList:i,now:h}=C();return(A,E)=>{const u=v("router-view");return n(),o(c,null,[e("header",I,[e("div",N,[S,e("nav",D,[(n(!0),o(c,null,_(l(i),(a,s)=>(n(),o("a",{key:s,href:a.link,class:d({on:s===0})},r(a.title),11,V))),128))])])]),g(u),e("footer",B,[e("div",F,[e("p",L,[(n(!0),o(c,null,_(l(i),(a,s)=>(n(),o(c,{key:s},[s!==0?(n(),o(c,{key:0},[m("|")],64)):k("",!0),e("a",{href:a.link,class:d({on:s===0})},r(a.title),11,z)],64))),128))]),e("p",null,"Copyright © 2020-"+r(l(h))+" biaov.cn All Rights Reserved biaov",1),R])])],64)}}});const O=y(j,[["__scopeId","data-v-d8ccd1cf"]]);export{O as default};
