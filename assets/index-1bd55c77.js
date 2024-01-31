import{e as Y,c as K,a as X,b as U,d as Q,S as J}from"./swiper-f4a6d1a9.js";import{i as R,j as G,d as W,c as B,a as c,F as H,b as V,u as F,n as q,o as A,t as P,p as Z,h as ee,_ as ae}from"./index-892cdcee.js";function j(v,e,y,d){return v.params.createElements&&Object.keys(d).forEach(f=>{if(!y[f]&&y.auto===!0){let n=Y(v.el,`.${d[f]}`)[0];n||(n=K("div",d[f]),n.className=d[f],v.el.append(n)),y[f]=n,e[f]=n}}),y}function te(v){let{swiper:e,extendParams:y,on:d,emit:f}=v;y({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};const n=s=>(Array.isArray(s)?s:[s]).filter(l=>!!l);function o(s){let l;return s&&typeof s=="string"&&e.isElement&&(l=e.el.querySelector(s),l)?l:(s&&(typeof s=="string"&&(l=[...document.querySelectorAll(s)]),e.params.uniqueNavElements&&typeof s=="string"&&l.length>1&&e.el.querySelectorAll(s).length===1&&(l=e.el.querySelector(s))),s&&!l?s:l)}function u(s,l){const m=e.params.navigation;s=n(s),s.forEach(a=>{a&&(a.classList[l?"add":"remove"](...m.disabledClass.split(" ")),a.tagName==="BUTTON"&&(a.disabled=l),e.params.watchOverflow&&e.enabled&&a.classList[e.isLocked?"add":"remove"](m.lockClass))})}function g(){const{nextEl:s,prevEl:l}=e.navigation;if(e.params.loop){u(l,!1),u(s,!1);return}u(l,e.isBeginning&&!e.params.rewind),u(s,e.isEnd&&!e.params.rewind)}function M(s){s.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),f("navigationPrev"))}function I(s){s.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),f("navigationNext"))}function S(){const s=e.params.navigation;if(e.params.navigation=j(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(s.nextEl||s.prevEl))return;let l=o(s.nextEl),m=o(s.prevEl);Object.assign(e.navigation,{nextEl:l,prevEl:m}),l=n(l),m=n(m);const a=(t,i)=>{t&&t.addEventListener("click",i==="next"?I:M),!e.enabled&&t&&t.classList.add(...s.lockClass.split(" "))};l.forEach(t=>a(t,"next")),m.forEach(t=>a(t,"prev"))}function L(){let{nextEl:s,prevEl:l}=e.navigation;s=n(s),l=n(l);const m=(a,t)=>{a.removeEventListener("click",t==="next"?I:M),a.classList.remove(...e.params.navigation.disabledClass.split(" "))};s.forEach(a=>m(a,"next")),l.forEach(a=>m(a,"prev"))}d("init",()=>{e.params.navigation.enabled===!1?E():(S(),g())}),d("toEdge fromEdge lock unlock",()=>{g()}),d("destroy",()=>{L()}),d("enable disable",()=>{let{nextEl:s,prevEl:l}=e.navigation;if(s=n(s),l=n(l),e.enabled){g();return}[...s,...l].filter(m=>!!m).forEach(m=>m.classList.add(e.params.navigation.lockClass))}),d("click",(s,l)=>{let{nextEl:m,prevEl:a}=e.navigation;m=n(m),a=n(a);const t=l.target;if(e.params.navigation.hideOnClick&&!a.includes(t)&&!m.includes(t)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===t||e.pagination.el.contains(t)))return;let i;m.length?i=m[0].classList.contains(e.params.navigation.hiddenClass):a.length&&(i=a[0].classList.contains(e.params.navigation.hiddenClass)),f(i===!0?"navigationShow":"navigationHide"),[...m,...a].filter(r=>!!r).forEach(r=>r.classList.toggle(e.params.navigation.hiddenClass))}});const C=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),S(),g()},E=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),L()};Object.assign(e.navigation,{enable:C,disable:E,update:g,init:S,destroy:L})}function z(v){return v===void 0&&(v=""),`.${v.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function se(v){let{swiper:e,extendParams:y,on:d,emit:f}=v;const n="swiper-pagination";y({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:a=>a,formatFractionTotal:a=>a,bulletClass:`${n}-bullet`,bulletActiveClass:`${n}-bullet-active`,modifierClass:`${n}-`,currentClass:`${n}-current`,totalClass:`${n}-total`,hiddenClass:`${n}-hidden`,progressbarFillClass:`${n}-progressbar-fill`,progressbarOppositeClass:`${n}-progressbar-opposite`,clickableClass:`${n}-clickable`,lockClass:`${n}-lock`,horizontalClass:`${n}-horizontal`,verticalClass:`${n}-vertical`,paginationDisabledClass:`${n}-disabled`}}),e.pagination={el:null,bullets:[]};let o,u=0;const g=a=>(Array.isArray(a)?a:[a]).filter(t=>!!t);function M(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function I(a,t){const{bulletActiveClass:i}=e.params.pagination;a&&(a=a[`${t==="prev"?"previous":"next"}ElementSibling`],a&&(a.classList.add(`${i}-${t}`),a=a[`${t==="prev"?"previous":"next"}ElementSibling`],a&&a.classList.add(`${i}-${t}-${t}`)))}function S(a){const t=a.target.closest(z(e.params.pagination.bulletClass));if(!t)return;a.preventDefault();const i=U(t)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===i)return;const r=e.realIndex,h=e.getSlideIndexByData(i),$=e.getSlideIndexByData(e.realIndex),D=p=>{const k=e.activeIndex;e.loopFix({direction:p,activeSlideIndex:h,slideTo:!1});const _=e.activeIndex;k===_&&e.slideToLoop(r,0,!1,!0)};if(h>e.slides.length-e.loopedSlides)D(h>$?"next":"prev");else if(e.params.centeredSlides){const p=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(parseFloat(e.params.slidesPerView,10));h<Math.floor(p/2)&&D("prev")}e.slideToLoop(i)}else e.slideTo(i)}function L(){const a=e.rtl,t=e.params.pagination;if(M())return;let i=e.pagination.el;i=g(i);let r,h;const $=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,D=e.params.loop?Math.ceil($/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(h=e.previousRealIndex||0,r=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(r=e.snapIndex,h=e.previousSnapIndex):(h=e.previousIndex||0,r=e.activeIndex||0),t.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const p=e.pagination.bullets;let k,_,O;if(t.dynamicBullets&&(o=X(p[0],e.isHorizontal()?"width":"height",!0),i.forEach(b=>{b.style[e.isHorizontal()?"width":"height"]=`${o*(t.dynamicMainBullets+4)}px`}),t.dynamicMainBullets>1&&h!==void 0&&(u+=r-(h||0),u>t.dynamicMainBullets-1?u=t.dynamicMainBullets-1:u<0&&(u=0)),k=Math.max(r-u,0),_=k+(Math.min(p.length,t.dynamicMainBullets)-1),O=(_+k)/2),p.forEach(b=>{const x=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(w=>`${t.bulletActiveClass}${w}`)].map(w=>typeof w=="string"&&w.includes(" ")?w.split(" "):w).flat();b.classList.remove(...x)}),i.length>1)p.forEach(b=>{const x=U(b);x===r?b.classList.add(...t.bulletActiveClass.split(" ")):e.isElement&&b.setAttribute("part","bullet"),t.dynamicBullets&&(x>=k&&x<=_&&b.classList.add(...`${t.bulletActiveClass}-main`.split(" ")),x===k&&I(b,"prev"),x===_&&I(b,"next"))});else{const b=p[r];if(b&&b.classList.add(...t.bulletActiveClass.split(" ")),e.isElement&&p.forEach((x,w)=>{x.setAttribute("part",w===r?"bullet-active":"bullet")}),t.dynamicBullets){const x=p[k],w=p[_];for(let N=k;N<=_;N+=1)p[N]&&p[N].classList.add(...`${t.bulletActiveClass}-main`.split(" "));I(x,"prev"),I(w,"next")}}if(t.dynamicBullets){const b=Math.min(p.length,t.dynamicMainBullets+4),x=(o*b-o)/2-O*o,w=a?"right":"left";p.forEach(N=>{N.style[e.isHorizontal()?w:"top"]=`${x}px`})}}i.forEach((p,k)=>{if(t.type==="fraction"&&(p.querySelectorAll(z(t.currentClass)).forEach(_=>{_.textContent=t.formatFractionCurrent(r+1)}),p.querySelectorAll(z(t.totalClass)).forEach(_=>{_.textContent=t.formatFractionTotal(D)})),t.type==="progressbar"){let _;t.progressbarOpposite?_=e.isHorizontal()?"vertical":"horizontal":_=e.isHorizontal()?"horizontal":"vertical";const O=(r+1)/D;let b=1,x=1;_==="horizontal"?b=O:x=O,p.querySelectorAll(z(t.progressbarFillClass)).forEach(w=>{w.style.transform=`translate3d(0,0,0) scaleX(${b}) scaleY(${x})`,w.style.transitionDuration=`${e.params.speed}ms`})}t.type==="custom"&&t.renderCustom?(p.innerHTML=t.renderCustom(e,r+1,D),k===0&&f("paginationRender",p)):(k===0&&f("paginationRender",p),f("paginationUpdate",p)),e.params.watchOverflow&&e.enabled&&p.classList[e.isLocked?"add":"remove"](t.lockClass)})}function C(){const a=e.params.pagination;if(M())return;const t=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length;let i=e.pagination.el;i=g(i);let r="";if(a.type==="bullets"){let h=e.params.loop?Math.ceil(t/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&h>t&&(h=t);for(let $=0;$<h;$+=1)a.renderBullet?r+=a.renderBullet.call(e,$,a.bulletClass):r+=`<${a.bulletElement} ${e.isElement?'part="bullet"':""} class="${a.bulletClass}"></${a.bulletElement}>`}a.type==="fraction"&&(a.renderFraction?r=a.renderFraction.call(e,a.currentClass,a.totalClass):r=`<span class="${a.currentClass}"></span> / <span class="${a.totalClass}"></span>`),a.type==="progressbar"&&(a.renderProgressbar?r=a.renderProgressbar.call(e,a.progressbarFillClass):r=`<span class="${a.progressbarFillClass}"></span>`),e.pagination.bullets=[],i.forEach(h=>{a.type!=="custom"&&(h.innerHTML=r||""),a.type==="bullets"&&e.pagination.bullets.push(...h.querySelectorAll(z(a.bulletClass)))}),a.type!=="custom"&&f("paginationRender",i[0])}function E(){e.params.pagination=j(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const a=e.params.pagination;if(!a.el)return;let t;typeof a.el=="string"&&e.isElement&&(t=e.el.querySelector(a.el)),!t&&typeof a.el=="string"&&(t=[...document.querySelectorAll(a.el)]),t||(t=a.el),!(!t||t.length===0)&&(e.params.uniqueNavElements&&typeof a.el=="string"&&Array.isArray(t)&&t.length>1&&(t=[...e.el.querySelectorAll(a.el)],t.length>1&&(t=t.filter(i=>Q(i,".swiper")[0]===e.el)[0])),Array.isArray(t)&&t.length===1&&(t=t[0]),Object.assign(e.pagination,{el:t}),t=g(t),t.forEach(i=>{a.type==="bullets"&&a.clickable&&i.classList.add(...(a.clickableClass||"").split(" ")),i.classList.add(a.modifierClass+a.type),i.classList.add(e.isHorizontal()?a.horizontalClass:a.verticalClass),a.type==="bullets"&&a.dynamicBullets&&(i.classList.add(`${a.modifierClass}${a.type}-dynamic`),u=0,a.dynamicMainBullets<1&&(a.dynamicMainBullets=1)),a.type==="progressbar"&&a.progressbarOpposite&&i.classList.add(a.progressbarOppositeClass),a.clickable&&i.addEventListener("click",S),e.enabled||i.classList.add(a.lockClass)}))}function s(){const a=e.params.pagination;if(M())return;let t=e.pagination.el;t&&(t=g(t),t.forEach(i=>{i.classList.remove(a.hiddenClass),i.classList.remove(a.modifierClass+a.type),i.classList.remove(e.isHorizontal()?a.horizontalClass:a.verticalClass),a.clickable&&(i.classList.remove(...(a.clickableClass||"").split(" ")),i.removeEventListener("click",S))})),e.pagination.bullets&&e.pagination.bullets.forEach(i=>i.classList.remove(...a.bulletActiveClass.split(" ")))}d("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const a=e.params.pagination;let{el:t}=e.pagination;t=g(t),t.forEach(i=>{i.classList.remove(a.horizontalClass,a.verticalClass),i.classList.add(e.isHorizontal()?a.horizontalClass:a.verticalClass)})}),d("init",()=>{e.params.pagination.enabled===!1?m():(E(),C(),L())}),d("activeIndexChange",()=>{typeof e.snapIndex>"u"&&L()}),d("snapIndexChange",()=>{L()}),d("snapGridLengthChange",()=>{C(),L()}),d("destroy",()=>{s()}),d("enable disable",()=>{let{el:a}=e.pagination;a&&(a=g(a),a.forEach(t=>t.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),d("lock unlock",()=>{L()}),d("click",(a,t)=>{const i=t.target,r=g(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&r&&r.length>0&&!i.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&i===e.navigation.nextEl||e.navigation.prevEl&&i===e.navigation.prevEl))return;const h=r[0].classList.contains(e.params.pagination.hiddenClass);f(h===!0?"paginationShow":"paginationHide"),r.forEach($=>$.classList.toggle(e.params.pagination.hiddenClass))}});const l=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:a}=e.pagination;a&&(a=g(a),a.forEach(t=>t.classList.remove(e.params.pagination.paginationDisabledClass))),E(),C(),L()},m=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:a}=e.pagination;a&&(a=g(a),a.forEach(t=>t.classList.add(e.params.pagination.paginationDisabledClass))),s()};Object.assign(e.pagination,{enable:l,disable:m,render:C,update:L,init:E,destroy:s})}const ie="/assets/swiper01-4ce6655a.png",ne="/assets/swiper02-1ffde6f3.png",le="/assets/swiper04-b30b3f58.png",oe="/assets/imgs03-525f71c3.png",re="/assets/imgs04-dddce007.png",ce="/assets/imgs07-ceab9be3.png",de="/assets/imgs08-d1d85f33.png",pe="/assets/imgs09-1fd4d16c.png",fe="/assets/imgs10-44e8f2d4.png",ue="/assets/imgs11-d236aedc.png",ge=()=>{const v={loop:!0,autoplay:{delay:3e3},longSwipesMs:3e3,effect:"coverflow",speed:1e3,modules:[te,se],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",dynamicBullets:!0}};return R(()=>{setTimeout(()=>{new J(".swiper-container",v)},1e3)}),{swiperList:Object.freeze([{title:"ecosystem",url:ne,desc:"一个简单的生态系统，包含 APP，H5，微信小程序，控制台，服务端 😄",tags:["Vue2.x","Uni-App","Node","MySql"],link:"https://github.com/biaov/ecosystem",className:"bgc-2",btnText:"查看源码"},{title:"MINE-DESKTOP",url:le,desc:"一个使用 Vite + TS + Vue3.x + Electron 开发的桌面软件 👍",tags:["TS","Vue3.x","Electron","Node"],link:"https://github.com/biaov/mine-desktop",className:"bgc-4",btnText:"源码地址"},{title:"MINE-H5-UI",url:ie,desc:"一款轻量级、模块化基于 VUE 的 H5 前端 UI 组件库 👍",tags:["TS","Vue3.x","Markdown","Gulp","Rollup"],link:"https://mineh5ui.biaov.cn/v2",className:"bgc-1",btnText:"代码演示"}])}},me=()=>{const v=G([{_animation:"fadeInBottomLeft",animation:"",title:"ecosystem",url:re,desc:"一个简单的生态系统，包含 APP，H5，微信小程序，控制台，服务端 😄",tags:["H5","微信小程序","Vue3.x","Uni-App","Node","MySql","React","Vite"],link:"https://github.com/biaov/ecosystem"},{_animation:"bounceInDown",animation:"",title:"MINE-DESKTOP",url:de,desc:"一个关于 MINE-DESKTOP 的桌面软件！",tags:["客户端","TS","Vue3.x","Electron","Node"],link:"https://github.com/biaov/mine-desktop/"},{_animation:"fadeInTopRight",animation:"",title:"MINE-H5-UI",url:oe,desc:"一款轻量级、模块化基于 VUE 的 H5 前端 UI 组件库",tags:["组件库","组件库文档","TS","Vue3.x","Markdown","Gulp"],link:"https://mineh5ui.biaov.cn/v2"},{_animation:"fadeInBottomLeft",animation:"",title:"个人博客",url:ce,desc:"一个使用 Vuepress 快速搭建的个人博客！",tags:["博客","VuePress","Markdown"],link:"http://wordpress.biaov.cn/"},{_animation:"bounceInUp",animation:"",title:"create-mine",url:pe,desc:"一个用于初始化项目的脚手架 👍",tags:["脚手架","TS","Node","Vite"],link:"https://github.com/biaov/create-mine/"},{_animation:"fadeInBottomRight",animation:"",title:"vscode-extension",url:fe,desc:"关于 vscode 的一些语法 emmet 提示",tags:["VSCode 插件"],link:"https://github.com/biaov/vscode-extension"},{_animation:"fadeInBottomLeft",animation:"",title:"effects",url:ue,desc:"一些有意思的特效集锦",tags:["特效集锦"],link:"http://effects.biaov.cn/"}]),e=G([{_animation:"bounceInDown",animation:""}]);return{projectList:v,animationList:e}},ve=({projectList:v,animationList:e})=>{let y=!1;const d=(n,o,u)=>{if(y)return;y=!0;const g=window.scrollY,M=n-g,I=performance.now(),S=()=>{const E=performance.now()-I,s=L(E,g,M,o);window.scrollTo(0,s),E<o?requestAnimationFrame(S):(u&&u(),y=!1)},L=(C,E,s,l)=>(C/=l/2,C<1?s/2*C*C+E:(C--,-s/2*(C*(C-2)-1)+E));requestAnimationFrame(S)},f=(n,o)=>{n.forEach(u=>{u.animation=o??u._animation})};return R(()=>{const n=window.innerHeight,o=100;window.addEventListener("wheel",u=>{u.deltaY>0?window.scrollY<=o&&d(n,1e3,()=>{f(v.value),f(e.value)}):window.scrollY<=n-o&&d(0,1e3,()=>{f(v.value,""),f(e.value,"")})})}),{}},T=v=>(Z("data-v-d2751354"),v=v(),ee(),v),he={class:"slider swiper-container"},be={class:"swiper-wrapper"},_e={class:"wrap flex-center"},xe=["src"],ye={class:"rt animate__animated animate__fadeInRight"},Ce={class:"tags darken"},we={class:"tit"},Le={class:"desc"},Ee=["href"],ke=T(()=>c("div",{class:"swiper-button-next"},null,-1)),Ie=T(()=>c("div",{class:"swiper-button-prev"},null,-1)),Se=T(()=>c("div",{class:"swiper-pagination"},null,-1)),$e=T(()=>c("section",{class:""},null,-1)),Be={class:"container"},Ae=T(()=>c("div",{class:"placeholder"},null,-1)),Me={class:"wrap"},Te={class:"section"},Pe=T(()=>c("h2",{class:"tit"},"项目案例",-1)),De=T(()=>c("p",{class:"subtit"},"一些技术项目的案例，有源码或者演示地址",-1)),Ne=[Pe,De],Oe={class:"bd-list"},He=["href"],ze=["src"],Ve={class:"txt"},Fe={class:"tags"},qe={class:"tit clamp"},Ue={class:"desc clamp"},Ge=T(()=>c("div",{class:"opacity"},null,-1)),Re=W({__name:"index",setup(v){const{swiperList:e}=ge(),{projectList:y,animationList:d}=me();return ve({projectList:y,animationList:d}),(f,n)=>(A(),B(H,null,[c("section",he,[c("div",be,[(A(!0),B(H,null,V(F(e),(o,u)=>(A(),B("div",{key:u,class:q(`swiper-slide ${o.className}`)},[c("div",_e,[c("img",{src:o.url,alt:"图片",class:"lf animate__animated animate__fadeInLeft"},null,8,xe),c("div",ye,[c("div",Ce,[(A(!0),B(H,null,V(o.tags,g=>(A(),B("span",{key:g},P(g),1))),128))]),c("h2",we,P(o.title),1),c("p",Le,P(o.desc),1),c("a",{href:o.link,target:"_blank",class:"btn-link"},P(o.btnText),9,Ee)])])],2))),128))]),ke,Ie,Se]),$e,c("div",Be,[Ae,c("div",Me,[c("section",Te,[c("div",{class:q(["hd",`animate__animated animate__${F(d)[0].animation} ${F(d)[0].animation?"show":""}`])},Ne,2),c("ul",Oe,[(A(!0),B(H,null,V(F(y),(o,u)=>(A(),B("li",{key:u,class:q(`animate__animated animate__${o.animation} ${o.animation?"show":""}`)},[c("a",{href:o.link,target:"_blank",class:"cont"},[c("img",{src:o.url,alt:"图片",class:"img"},null,8,ze),c("div",Ve,[c("div",Fe,[(A(!0),B(H,null,V(o.tags,g=>(A(),B("span",{key:g},P(g),1))),128))]),c("h3",qe,P(o.title),1),c("p",Ue,P(o.desc),1)]),Ge],8,He)],2))),128))])])])])],64))}});const Ke=ae(Re,[["__scopeId","data-v-d2751354"]]);export{Ke as default};
