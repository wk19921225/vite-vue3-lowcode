!function(){var e=document.createElement("style");e.innerHTML="body::-webkit-scrollbar{width:0}\n",document.head.appendChild(e),System.register(["./preload-helper-legacy.3a841cdc.js","./plugin-vue_export-helper-legacy.7bb61c33.js"],(function(e,t){"use strict";var n,o,r,l,a,i,c,u,s,p,d,v,f,g,h,m,b;return{setters:[function(e){n=e.d,o=e.r,r=e.aR,l=e.w,a=e.x,i=e.b,c=e.j,u=e.k,s=e.aS,p=e.aU,d=e.l,v=e.as,f=e.at,g=e.au,h=e.S,m=e.Y},function(e){b=e._}],execute:function(){const A=n({name:"App",setup(){const e=o(),t=s(),n=JSON.parse(localStorage.getItem(r.PAGE_DATA_KEY)),a=Object.keys(n.pages).filter((e=>!n.pages[e].config.keepAlive));return l((()=>t.path),(t=>{if(a.includes(t)){var n,o;(null===(n=e.value)||void 0===n||null===(o=n.$)||void 0===o?void 0:o.__v_cache).delete(t)}})),{keepAliveRef:e}}});var _=b(A,[["render",function(e,t,n,o,r,l){const s=a("router-view");return i(),c(s,null,{default:u((({Component:e,route:t})=>[(i(),c(p,{ref:"keepAliveRef"},[(i(),c(d(e),{key:t.path}))],1536))])),_:1})}]]);const y=[{path:"/:pathMatch(.*)*",component:()=>g((()=>t.import("./preview-legacy.ee851fce.js")),void 0)}],k=e("r",v({history:f(),routes:y})),w=JSON.parse(localStorage.getItem(r.PAGE_DATA_KEY));k.beforeEach((e=>{var t,n,o;return document.title=null!==(t=null==w||null===(n=w.pages)||void 0===n||null===(o=n[e.path])||void 0===o?void 0:o.title)&&void 0!==t?t:document.title,!0}));const S=h(_);m(S),S.config.globalProperties.$$refs={},window.$$refs=S.config.globalProperties.$$refs,S.use(k).mount("#app")}}}))}();