"use strict";(self.webpackChunkblog_2=self.webpackChunkblog_2||[]).push([[1473],{9613:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>u});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},k=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),d=i(n),m=a,u=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(u,l(l({ref:t},k),{},{components:n})):r.createElement(u,l({ref:t},k))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:a,l[1]=p;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},629:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var r=n(7622),a=(n(9496),n(9613));const o={title:"SharedWorker\u4f7f\u7528\u603b\u7ed3",toc_max_heading_level:6,tags:["js"]},l=void 0,p={permalink:"/blog/index/2022/10/14/SharedWorker\u4f7f\u7528\u603b\u7ed3",source:"@site/blog/2022/10/14/SharedWorker\u4f7f\u7528\u603b\u7ed3.md",title:"SharedWorker\u4f7f\u7528\u603b\u7ed3",description:"\u6700\u8fd1\u6709\u4e2a\u9700\u6c42\u8981\u5728\u6d4f\u89c8\u5668\u9875\u7b7e\u4e4b\u95f4\u5b9e\u73b0\u4fe1\u606f\u5171\u4eab\uff0c\u7531\u7b2c\u4e09\u65b9\u5305\u5904\u7406\u3002\u770b\u8fc7\u4eba\u5bb6\u7684\u6548\u679c\u4ecb\u7ecd\uff0c\u56af\u54e6\uff0c\u95ea\u778e\u6211\u7684\u53cc\u773c\uff01\u6ca1\u89c1\u8bc6\u8fc7\u7684\u6280\u672f\uff0c\u600e\u4e48\u4e5f\u5f97\u770b\u4e00\u770b\u5440\ud83e\uddd0",date:"2022-10-14T00:00:00.000Z",formattedDate:"2022\u5e7410\u670814\u65e5",tags:[{label:"js",permalink:"/blog/index/tags/js"}],readingTime:7.02,hasTruncateMarker:!0,authors:[],frontMatter:{title:"SharedWorker\u4f7f\u7528\u603b\u7ed3",toc_max_heading_level:6,tags:["js"]},prevItem:{title:"mobx\u5728react\u4e2d\u7684\u4f7f\u7528",permalink:"/blog/index/2022/10/15/mobx\u5728react\u4e2d\u7684\u4f7f\u7528"},nextItem:{title:"react-\u5e38\u7528hooks\u7684\u57fa\u672c\u4f7f\u7528demo\u8bb0\u5f55",permalink:"/blog/index/2022/07/21/react-\u5e38\u7528hooks\u7684\u57fa\u672c\u4f7f\u7528demo\u8bb0\u5f55"}},s={authorsImageUrls:[]},i=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"api",id:"api",level:2},{value:"\u521b\u5efa",id:"\u521b\u5efa",level:3},{value:"\u542f\u7528",id:"\u542f\u7528",level:3},{value:"\u5173\u95ed",id:"\u5173\u95ed",level:3},{value:"\u6d88\u606f\u901a\u4fe1",id:"\u6d88\u606f\u901a\u4fe1",level:3},{value:"\u8c03\u8bd5",id:"\u8c03\u8bd5",level:3},{value:"\u2757\ufe0f\u2757\ufe0f\u2757\ufe0f\u6ce8\u610f",id:"\ufe0f\ufe0f\ufe0f\u6ce8\u610f",level:2},{value:"\u6848\u4f8b",id:"\u6848\u4f8b",level:2},{value:"\u5171\u4eabjs\u6587\u4ef6",id:"\u5171\u4eabjs\u6587\u4ef6",level:3},{value:"html\u6587\u4ef6",id:"html\u6587\u4ef6",level:3},{value:"\u586b\u8111\u5751",id:"\u586b\u8111\u5751",level:2},{value:"MessagePort\u5bf9\u8c61\u4e00\u5b9a\u8981\u8c03\u7528start()\u5417\uff1f",id:"messageport\u5bf9\u8c61\u4e00\u5b9a\u8981\u8c03\u7528start\u5417",level:3},{value:"\u5171\u4eabjs\u6587\u4ef6\u4e2d\u7684onconnect\u51fd\u6570\u4e3a\u4ec0\u4e48\u7528e.port0\u83b7\u53d6port\u5bf9\u8c61\uff1f\u6ca1\u6709\u5176\u4ed6\u7684\u83b7\u53d6\u65b9\u5f0f\u4e86\u5417\uff1f",id:"\u5171\u4eabjs\u6587\u4ef6\u4e2d\u7684onconnect\u51fd\u6570\u4e3a\u4ec0\u4e48\u7528eport0\u83b7\u53d6port\u5bf9\u8c61\u6ca1\u6709\u5176\u4ed6\u7684\u83b7\u53d6\u65b9\u5f0f\u4e86\u5417",level:3},{value:"\u5171\u4eabjs\u6587\u4ef6\u4e2donconnect\u600e\u4e48\u89e3\u91ca\uff1f",id:"\u5171\u4eabjs\u6587\u4ef6\u4e2donconnect\u600e\u4e48\u89e3\u91ca",level:3},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],k={toc:i},d="wrapper";function c(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,r.Z)({},k,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6700\u8fd1\u6709\u4e2a\u9700\u6c42\u8981\u5728\u6d4f\u89c8\u5668\u9875\u7b7e\u4e4b\u95f4\u5b9e\u73b0\u4fe1\u606f\u5171\u4eab\uff0c\u7531\u7b2c\u4e09\u65b9\u5305\u5904\u7406\u3002\u770b\u8fc7\u4eba\u5bb6\u7684\u6548\u679c\u4ecb\u7ecd\uff0c\u56af\u54e6\uff0c\u95ea\u778e\u6211\u7684\u53cc\u773c\uff01\u6ca1\u89c1\u8bc6\u8fc7\u7684\u6280\u672f\uff0c\u600e\u4e48\u4e5f\u5f97\u770b\u4e00\u770b\u5440\ud83e\uddd0"),(0,a.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"SharedWorker")),"\xa0\u63a5\u53e3\u4ee3\u8868\u4e00\u79cd\u7279\u5b9a\u7c7b\u578b\u7684 worker\uff0c\u53ef\u4ee5\u4ece\u51e0\u4e2a\u6d4f\u89c8\u4e0a\u4e0b\u6587\u4e2d",(0,a.kt)("em",{parentName:"p"},"\u8bbf\u95ee"),"\uff0c\u4f8b\u5982\u51e0\u4e2a\u7a97\u53e3\u3001iframe \u6216\u5176\u4ed6 worker\u3002\u5b83\u4eec\u5b9e\u73b0\u4e00\u4e2a\u4e0d\u540c\u4e8e\u666e\u901a worker \u7684\u63a5\u53e3\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u5177\u6709\u4e0d\u540c\u7684\u5168\u5c40\u4f5c\u7528\u57df"),"\uff0c",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/SharedWorkerGlobalScope",title:"Currently only available in English (US)"},"SharedWorkerGlobalScope"),"\xa0\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u5907\u6ce8\uff1a")," \xa0\u5982\u679c\u8981\u4f7f\xa0",(0,a.kt)("strong",{parentName:"p"},"SharedWorker"),"\xa0\u8fde\u63a5\u5230\u591a\u4e2a\u4e0d\u540c\u7684\u9875\u9762\uff0c\u8fd9\u4e9b\u9875\u9762\u5fc5\u987b\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"\u540c\u6e90"),"\u7684\uff08\u76f8\u540c\u7684\u534f\u8bae\u3001host \u4ee5\u53ca\u7aef\u53e3\uff09\u3002")),(0,a.kt)("p",null,"\u53c8\u79f0\u5171\u4eab\u7ebf\u7a0b\u3002\u4e4b\u6240\u4ee5\u53ef\u4ee5\u5728\u591a\u4e2a\u6d4f\u89c8\u5668\u9875\u7b7e\u4e2d\u5171\u4eab\u4fe1\u606f\uff0c\u662f\u56e0\u4e3a\u5728\u9875\u7b7e\u7684html\u4e2d\u521b\u5efa",(0,a.kt)("inlineCode",{parentName:"p"},"SharedWorker"),"\u65f6\uff0c\u5982\u679c\u7b2c\u4e00\u4e2a\u53c2\u6570\u76f8\u540c\uff0c\u5219\u89c6\u4e3a\u540c\u4e00\u7ebf\u7a0b\uff0c\u6240\u4ee5\u53ea\u8981\u4fdd\u8bc1\u521b\u5efa\u65f6\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u76f8\u540c\uff0c\u5c31\u53ef\u4ee5\u5728\u591a\u9875\u7b7e\u95f4\u5171\u4eab\u4fe1\u606f\u3002"),(0,a.kt)("h2",{id:"api"},"api"),(0,a.kt)("p",null,"\u4e0b\u9762\u7ed9\u4e86\u4e00\u4e9b\u57fa\u672c\u7684api\u4f7f\u7528\u3002\u4ee5\u4e0bapi\u7684\u4f7f\u7528\u90fd\u57fa\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"SharedWorker"),"\u7684\u5b9e\u4f8b\u5bf9\u8c61\u7684port\u5c5e\u6027\u3002"),(0,a.kt)("h3",{id:"\u521b\u5efa"},"\u521b\u5efa"),(0,a.kt)("p",null,"\u4f7f\u7528\u6784\u9020\u51fd\u6570",(0,a.kt)("inlineCode",{parentName:"p"},"SharedWorker()"),"\u521b\u5efa",(0,a.kt)("inlineCode",{parentName:"p"},"SharedWorker"),"\u5b9e\u4f8b\u3002\u5b83\u6709\u4e09\u4e2a\u53c2\u6570\u5982\u4e0b"),(0,a.kt)("p",null,"MDN\u89e3\u91ca\n",(0,a.kt)("img",{alt:"api",src:n(4502).Z,width:"1582",height:"1120"})),(0,a.kt)("p",null,"\u4e3e\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const sharedWorker = new SharedWorker(\n  "\u88ab\u5171\u4eab\u7684js\u6587\u4ef6url",\n  "\u6807\u8bc6woker\u7684\u540d\u5b57",\n  \u53ef\u9009\u5c5e\u6027\u5bf9\u8c61,\n);\n')),(0,a.kt)("p",null,"\u81ea\u6211\u201c\u6cbb\u6108\u201d\uff1a"),(0,a.kt)("p",null,"\u7b2c\u4e00\u4e2a\u53c2\u6570\uff1a\u662f\u88ab\u5171\u4eab\u7684js\u7684url\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u8981\u540c\u6e90\uff01")," \u5728\u5171\u4eab\u7ebf\u7a0b\u4e2d\uff0c\u6211\u4eec\u603b\u8981\u505a\u70b9\u4ec0\u4e48\u3002\u5728\u54ea\u91cc\u505a\u5462\uff1f\u5c31\u5728\u8fd9\u4e2a\u88ab\u5171\u4eab\u7684js\u6587\u4ef6\u4e2d\u6363\u9f13\u3002"),(0,a.kt)("p",null,"\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff1a\u53ef\u4ee5\u6807\u8bc6\u5f53\u524d\u7684worker\u3002\u5728\u4e0b\u6587\u63d0\u5230\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"\u8c03\u8bd5"),"\u4e2d\uff0c\u6211\u4eec\u4f1a\u7528\u5230\u3002\u4e3b\u8981\u7528\u6765\u786e\u5b9a\uff0c\u8fd9\u4e2aworker\u662f\u4e0d\u662f\u6211\u4eec\u73b0\u5728\u5199\u7684worker\uff0c\u4e07\u4e00\u6d4f\u89c8\u5668\u91cc\u6709\u5176\u4ed6\u4eba\u5199\u7684worker\u5462\uff1f"),(0,a.kt)("p",null,"\u7b2c\u4e09\u4e2a\u53c2\u6570: \u8fd8\u6ca1\u6709\u6df1\u7a76\u8fc7\uff0c\u8fd9\u91cc\u5c31\u4e0d\u4ecb\u7ecd\u4e86\u3002"),(0,a.kt)("h3",{id:"\u542f\u7528"},"\u542f\u7528"),(0,a.kt)("p",null,"\u8fd9\u91cc\u5148\u968f\u4fbf\u7ed9\u4e2aurl\u505a\u793a\u4f8b\uff5e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const sharedWorker = new SharedWorker("sharedWorker.js", "test worker");\n\n// \u5f00\u542f\u4e0e\u5171\u4eab\u7ebf\u7a0b\u7684\u8fde\u63a5\nsharedWorker.port.start();\n')),(0,a.kt)("p",null,"MDN\u89e3\u91ca\n",(0,a.kt)("img",{alt:"api2",src:n(4255).Z,width:"1620",height:"256"})),(0,a.kt)("p",null,"\u5173\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"start()"),"\u7684\u4f7f\u7528\uff0c\u53ef\u4ee5\u53c2\u8003\u4e0b\u6587\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},"\u586b\u8111\u5751"),"\u7684\u7b2c\u4e00\u6761\u3002"),(0,a.kt)("p",null,"\u4e0a\u9762\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"MessagePort"),"\u5bf9\u8c61\u5c31\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"sharedWorker.port"),"\u3002\u6240\u6709\u5173\u4e8e\u6d4f\u89c8\u5668\u9875\u7b7e\u548c\u5171\u4eab\u7ebf\u7a0b\u7684\u901a\u4fe1\u90fd\u662f\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"sharedWorker.port"),"\u6765\u63a7\u5236\u548c\u7ba1\u7406\u3002"),(0,a.kt)("h3",{id:"\u5173\u95ed"},"\u5173\u95ed"),(0,a.kt)("p",null,"\u548c\u4e0a\u9762\u7684\u542f\u7528\u57fa\u672c\u4e00\u6837\uff0c\u53ea\u4e0d\u8fc7\u540d\u5b57\u6362\u6210\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"close"),"\u3002\u5373",(0,a.kt)("inlineCode",{parentName:"p"},"sharedWorker.port.close()"),"\u6267\u884c\u4e4b\u540e\uff0c\u5c31\u5173\u95ed\u4e86\u5f53\u524d\u6d4f\u89c8\u5668\u9875\u7b7e\u4e0e\u5171\u4eab\u7ebf\u7a0b\u95f4\u7684\u8fde\u63a5\uff0c\u4e0d\u518d\u548c\u5171\u4eab\u7ebf\u7a0b\u4e92\u901a\u6d88\u606f\u3002"),(0,a.kt)("h3",{id:"\u6d88\u606f\u901a\u4fe1"},"\u6d88\u606f\u901a\u4fe1"),(0,a.kt)("p",null,"\u5c31\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"sharedWorker.port.postMessage(message, transferList)"),"."),(0,a.kt)("p",null,"\u7b2c\u4e00\u4e2a\u53c2\u6570\uff1a\u5f53\u524d\u6d4f\u89c8\u5668\u9875\u7b7e\u60f3\u8981\u53d1\u7ed9\u5171\u4eab\u7ebf\u7a0b\u7684\u4fe1\u606f\uff0c\u53ef\u4ee5\u662f\u4efb\u610f\u6570\u636e\u7c7b\u578b"),(0,a.kt)("p",null,"\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff1a\u6682\u4e0d\u6df1\u7a76"),(0,a.kt)("h3",{id:"\u8c03\u8bd5"},"\u8c03\u8bd5"),(0,a.kt)("p",null,"\u70b9\u51fb\u6253\u5f00\u8c03\u8bd5\u9875\u9762\ud83d\udc49",(0,a.kt)("a",{parentName:"p",href:"chrome://inspect/#workers"},"chrome://inspect/#workers")," \u53ef\u4ee5\u770b\u5230\u4e0b\u9762\u7684\u5185\u5bb9\n",(0,a.kt)("img",{alt:"debug",src:n(417).Z,width:"1176",height:"509"}),"\n\u8c03\u8bd5\u63a7\u5236\u53f0\u5927\u5bb6\u53ef\u4ee5\u7406\u89e3\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"Chrome"),"\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"DevTools"),"\uff0c\u4e00\u6a21\u4e00\u6837\u3002\u53ef\u4ee5\u5728\u4e0a\u9762\u770b\u5230\u81ea\u5df1\u5728\u5171\u4eabjs\u6587\u4ef6\u4e2d\u5199\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"console")),(0,a.kt)("h2",{id:"\ufe0f\ufe0f\ufe0f\u6ce8\u610f"},"\u2757\ufe0f\u2757\ufe0f\u2757\ufe0f\u6ce8\u610f"),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"\u5355\u9875\u5e94\u7528\u7684\u65f6\u5019\u8bb0\u5f97\u53ca\u65f6\u5173\u95edworker\uff0c\u5426\u5219\u5e38\u9a7b"),(0,a.kt)("li",{parentName:"ul"},"\u6bcf\u521b\u5efa\u4e00\u4e2aworker\uff0c\u5982\u679c\u53c2\u6570url\u90fd\u4e00\u6837\uff0c\u90a3\u4e48\u4f1a",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"\u89c6\u4e3a\u4f7f\u7528\u540c\u4e00\u4e2a\u5171\u4eab\u7ebf\u7a0b")),"\uff0c\u5171\u4eab\u7ebf\u7a0b\u4f1a\u5206\u914d\u4e00\u4e2aport\u5bf9\u8c61\u6765\u533a\u5206\u4e0d\u540c\u4f7f\u7528\u8005\u3002\u5373",(0,a.kt)("inlineCode",{parentName:"li"},"SharedWorker"),"\u5b9e\u4f8b\u5bf9\u8c61\u7684port\u53ef\u4ee5\u7528\u6765\u533a\u5206\u4e0d\u540c\u7684\u9875\u7b7e\u3002"))),(0,a.kt)("p",null,"\u5173\u4e8e\u5171\u4eabjs\u6587\u4ef6\n",(0,a.kt)("img",{alt:"commonjs",src:n(6416).Z,width:"1950",height:"1386"})),(0,a.kt)("p",null,"\u8fd8\u6709\u4e00\u70b9\u3002\u56e0\u4e3a\u6709\u540c\u6e90\u9650\u5236\uff0c\u6240\u4ee5\u9700\u8981\u5f00\u4e00\u4e2a\u670d\u52a1\u5668\u624d\u80fd\u770b\u5230\u4fe1\u606f\u5171\u4eab\u6548\u679c\u3002\u53ef\u4ee5\u8bd5\u8bd5",(0,a.kt)("inlineCode",{parentName:"p"},"VS Code"),"\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"Live Server"),"\u63d2\u4ef6."),(0,a.kt)("h2",{id:"\u6848\u4f8b"},"\u6848\u4f8b"),(0,a.kt)("p",null,"\u6848\u4f8b\u51c6\u5907\u4e86\u4e24\u4e2a\u6587\u4ef6\uff0c\u4e00\u4e2a\u662f\u5171\u4eab\u7684js\u6587\u4ef6\uff0c\u4e00\u4e2a\u662fhtml\u6587\u4ef6\u3002"),(0,a.kt)("p",null,"\u6d4b\u8bd5\u6548\u679c\u7684\u65f6\u5019\uff0c\u6700\u5c11\u5728\u6d4f\u89c8\u5668\u4e0a\u6253\u5f00\u4e24\u4e2a\u76f8\u540c\u7684\u9875\u7b7e\u3002\u65e0\u8bba\u70b9\u51fb\u54ea\u4e2a\u9875\u7b7e\u7684\u3010\u83b7\u53d6\u6d88\u606f\u3011\uff0c\u4e24\u4e2a\u9875\u7b7e\u90fd\u4f1aalert\u4e00\u4e2a3\u51fa\u6765\u3002"),(0,a.kt)("h3",{id:"\u5171\u4eabjs\u6587\u4ef6"},"\u5171\u4eabjs\u6587\u4ef6"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sharedWorker.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'let number = 3;\n// \u50a8\u5b58\u6240\u6709port\nthis.ports = [];\nonconnect = (e) => {\n  const port = e.ports[0];\n  !this.ports.includes(port) && this.ports.push(port);\n  // \u76d1\u542c\u6d4f\u89c8\u5668\u9875\u7b7e\u53d1\u9001\u7684\u6d88\u606f\n  port.onmessage = (e) => {\n    switch (e.data) {\n      case "getData":\n        // \u5e7f\u64ad\uff1a\u7ed9\u6240\u6709port\u53d1\u6d88\u606f\n        broadcast(number);\n        break;\n      case "close":\n        clearInvalidPort(port);\n        break;\n\n      default:\n        break;\n    }\n  };\n};\n\nfunction broadcast(message) {\n  console.log("ports", this.ports);\n  this.ports.forEach((port) => {\n    // \u7ed9\u6d4f\u89c8\u5668\u9875\u7b7e\u53d1\u6d88\u606f\n    port.postMessage(message);\n  });\n}\n\nfunction clearInvalidPort(port) {\n  const index = this.ports.findIndex((item) => item === port);\n  if (~index) {\n    this.ports.splice(index, 1);\n  }\n}\n')),(0,a.kt)("h3",{id:"html\u6587\u4ef6"},"html\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Document</title>\n  </head>\n  <body>\n    <button id="btn">\u83b7\u53d6\u6d88\u606f</button><br />\n    <button id="closeBtn">\u5173\u95edsharedWorker</button>\n    <script>\n      let myWorker = new SharedWorker("./sharedWorker.js", "test worker");\n\n      // \u76d1\u542c\u5171\u4eab\u7ebf\u7a0b\u4f20\u9012\u7684\u6d88\u606f\n      myWorker.port.onmessage = (e) => alert(e.data);\n\n      btn.addEventListener("click", (e) => {\n        // \u7ed9\u5171\u4eab\u7ebf\u7a0b\u53d1\u9001\u6d88\u606f\n        myWorker.port.postMessage("getData");\n      });\n      closeBtn.addEventListener("click", (e) => {\n        // \u53d6\u6d88\u8be5port\u5728\u5171\u4eab\u7ebf\u7a0b\u4e2d\u7684\u5b58\u50a8[\u5e7f\u64ad\u7528\u7684]\n        myWorker.port.postMessage("close");\n        // \u5173\u95ed\u4e0e\u5171\u4eab\u7ebf\u7a0b\u7684\u8fde\u63a5\n        myWorker.port.close();\n      });\n\n      window.onbeforeunload = () => {\n        myWorker.port.postMessage("close");\n        myWorker.port.close();\n      };\n    <\/script>\n  </body>\n</html>\n')),(0,a.kt)("h2",{id:"\u586b\u8111\u5751"},"\u586b\u8111\u5751"),(0,a.kt)("p",null,"\u81ea\u5df1\u5728\u5b66\u4e60\u8fc7\u7a0b\u4e2d\u4e0d\u7406\u89e3\u7684\u70b9\u3002"),(0,a.kt)("h3",{id:"messageport\u5bf9\u8c61\u4e00\u5b9a\u8981\u8c03\u7528start\u5417"},"MessagePort\u5bf9\u8c61\u4e00\u5b9a\u8981\u8c03\u7528start()\u5417\uff1f"),(0,a.kt)("p",null,"\u4e0d\u4e00\u5b9a\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u7ed9",(0,a.kt)("inlineCode",{parentName:"li"},"MessagePort"),"\u5bf9\u8c61\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"onmessage"),"\u5c5e\u6027\u8d4b\u503c\uff0c\u5c31\u9ed8\u8ba4\u5f00\u542f\u4e0e\u5171\u4eab\u7ebf\u7a0b\u7684\u8fde\u63a5\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u5bf9\u8c61\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"addEventListener()"),"\u76d1\u542c",(0,a.kt)("inlineCode",{parentName:"li"},"message"),"\uff0c\u5c31\u9700\u8981\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"start()"))),(0,a.kt)("h3",{id:"\u5171\u4eabjs\u6587\u4ef6\u4e2d\u7684onconnect\u51fd\u6570\u4e3a\u4ec0\u4e48\u7528eport0\u83b7\u53d6port\u5bf9\u8c61\u6ca1\u6709\u5176\u4ed6\u7684\u83b7\u53d6\u65b9\u5f0f\u4e86\u5417"},"\u5171\u4eabjs\u6587\u4ef6\u4e2d\u7684onconnect\u51fd\u6570\u4e3a\u4ec0\u4e48\u7528e.port","[0]","\u83b7\u53d6port\u5bf9\u8c61\uff1f\u6ca1\u6709\u5176\u4ed6\u7684\u83b7\u53d6\u65b9\u5f0f\u4e86\u5417\uff1f"),(0,a.kt)("p",null,"\u56e0\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"e.port"),"\u662f\u53ea\u5305\u62ec\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"MessagePort"),"\u5bf9\u8c61\u7684\u6570\u7ec4\u3002\u6ca1\u6709\u5176\u4ed6\u65b9\u5f0f\u3002"),(0,a.kt)("h3",{id:"\u5171\u4eabjs\u6587\u4ef6\u4e2donconnect\u600e\u4e48\u89e3\u91ca"},"\u5171\u4eabjs\u6587\u4ef6\u4e2donconnect\u600e\u4e48\u89e3\u91ca\uff1f"),(0,a.kt)("p",null,"\u65b0\u5ba2\u6237\u7aef\u8fde\u63a5\u7684\u65f6\u5019\u4f1a\u89e6\u53d1\u3002\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/SharedWorkerGlobalScope/connect_event"},"\u5177\u4f53\u53ef\u4ee5\u770b\u4e0b\u8fd9\u91cc")),(0,a.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/SharedWorker"},"MDN SharedWorker")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/MessagePort"},"MDN MessagePort")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/MessagePort/postMessage"},"MDN postMessage")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/imgss/p/14634577.html"},"sharedWorker \u5b9e\u73b0\u591a\u9875\u9762\u901a\u4fe1")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://blog.csdn.net/iamlujingtao/article/details/122078713"},"JS SharedWorker\u8be6\u7ec6\u4ecb\u7ecd/\u5e7f\u64ad/Vue\u4f7f\u7528")))}c.isMDXComponent=!0},4502:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/api-f950112641dff63b6ec13b8e03380e83.png"},4255:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/api2-e0b9dc1369b14d3bccf77171cc5fd95a.png"},6416:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/commonjs-aa86457ab52142a12323ff644159b688.png"},417:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/debug-708532366022d5ed436adc3f71a20391.png"}}]);