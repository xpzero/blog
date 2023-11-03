"use strict";(self.webpackChunkblog_2=self.webpackChunkblog_2||[]).push([[4641],{49613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},b="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),b=s(n),u=a,m=b["".concat(p,".").concat(u)]||b[u]||d[u]||l;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[b]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},14196:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(47622),a=(n(59496),n(49613));const l={title:"VSCode\u4e2dNodejs\u4f7f\u7528babel\u8fd0\u884cES6\u6a21\u5757\u673a\u5236",toc_max_heading_level:6,tags:["nodejs"]},o=void 0,i={permalink:"/blog/index/2021/10/15/using-babel-by-nodejs-in-vscode",source:"@site/blog/2021/10/15/using-babel-by-nodejs-in-vscode.md",title:"VSCode\u4e2dNodejs\u4f7f\u7528babel\u8fd0\u884cES6\u6a21\u5757\u673a\u5236",description:"\u521d\u59cb\u5316node",date:"2021-10-15T00:00:00.000Z",formattedDate:"2021\u5e7410\u670815\u65e5",tags:[{label:"nodejs",permalink:"/blog/index/tags/nodejs"}],readingTime:.855,hasTruncateMarker:!0,authors:[],frontMatter:{title:"VSCode\u4e2dNodejs\u4f7f\u7528babel\u8fd0\u884cES6\u6a21\u5757\u673a\u5236",toc_max_heading_level:6,tags:["nodejs"]},prevItem:{title:"CSS3\u52a8\u753b\u4f7f\u7528\u7b14\u8bb0",permalink:"/blog/index/2021/10/15/how-to-use-css3-transition"},nextItem:{title:"js\u539f\u578b",permalink:"/blog/index/2021/01/31/js-prototype"}},p={authorsImageUrls:[]},s=[{value:"\u521d\u59cb\u5316node",id:"\u521d\u59cb\u5316node",level:2},{value:"\u5b89\u88c5babel\u6a21\u5757",id:"\u5b89\u88c5babel\u6a21\u5757",level:2},{value:"\u914d\u7f6ebabel\u6587\u4ef6",id:"\u914d\u7f6ebabel\u6587\u4ef6",level:2},{value:"\u65b0\u5efa\u6d4b\u8bd5\u6587\u4ef6",id:"\u65b0\u5efa\u6d4b\u8bd5\u6587\u4ef6",level:2},{value:"\u8fd0\u884c\u6d4b\u8bd5\u6587\u4ef6",id:"\u8fd0\u884c\u6d4b\u8bd5\u6587\u4ef6",level:2},{value:"\u6d4b\u8bd5\u7ed3\u679c",id:"\u6d4b\u8bd5\u7ed3\u679c",level:2}],c={toc:s},b="wrapper";function d(e){let{components:t,...l}=e;return(0,a.kt)(b,(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u521d\u59cb\u5316node"},"\u521d\u59cb\u5316node"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm init -y\n")),(0,a.kt)("h2",{id:"\u5b89\u88c5babel\u6a21\u5757"},"\u5b89\u88c5babel\u6a21\u5757"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm i @babel/cli @babel/core @babel/node @babel/preset-env\n")),(0,a.kt)("h2",{id:"\u914d\u7f6ebabel\u6587\u4ef6"},"\u914d\u7f6ebabel\u6587\u4ef6"),(0,a.kt)("p",null,"\u5982\u679c\u76ee\u5f55\u4e2d\u6ca1\u6709",(0,a.kt)("inlineCode",{parentName:"p"},".babelrc"),"\u6587\u4ef6\uff0c\u65b0\u5efa\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},".babelrc"),"\u6587\u4ef6\u3002\u6587\u4ef6\u5185\u5bb9\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "presets": [\n        "@babel/preset-env"\n    ]\n}\n')),(0,a.kt)("h2",{id:"\u65b0\u5efa\u6d4b\u8bd5\u6587\u4ef6"},"\u65b0\u5efa\u6d4b\u8bd5\u6587\u4ef6"),(0,a.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"test.js"),"\u7684\u6587\u4ef6\u3002\u6587\u4ef6\u5185\u5bb9\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'console.log("babel is ok.");\n')),(0,a.kt)("h2",{id:"\u8fd0\u884c\u6d4b\u8bd5\u6587\u4ef6"},"\u8fd0\u884c\u6d4b\u8bd5\u6587\u4ef6"),(0,a.kt)("p",null,"\u4f7f\u7528",(0,a.kt)("kbd",null,"Ctrl")," + ",(0,a.kt)("kbd",null,"`"),"\uff0c\u6253\u5f00\u63a7\u5236\u53f0\uff0c\u786e\u4fdd\u63a7\u5236\u53f0\u76ee\u5f55\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"test.js"),"\u6240\u5728\u76ee\u5f55\uff0c\u8fd0\u884c\u547d\u4ee4",(0,a.kt)("inlineCode",{parentName:"p"},"babel-node .\\test.js")),(0,a.kt)("h2",{id:"\u6d4b\u8bd5\u7ed3\u679c"},"\u6d4b\u8bd5\u7ed3\u679c"),(0,a.kt)("p",null,"\u5982\u679c\u63a7\u5236\u53f0\u8f93\u51fa\u4e4b\u524d\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"test.js"),"\u6587\u4ef6\u4e2d\u7684\u5185\u5bb9\uff0c\u8868\u793a\u73af\u5883\u642d\u5efa\u6210\u529f\u3002\u5373\n",(0,a.kt)("img",{alt:"demo",src:n(99052).Z,width:"932",height:"132"})))}d.isMDXComponent=!0},99052:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/demo-ca7ebb7c2d87a75c6da59a38f00ea363.png"}}]);