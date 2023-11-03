"use strict";(self.webpackChunkblog_2=self.webpackChunkblog_2||[]).push([[2442],{49613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>y});var r=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),i=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=i(e.components);return r.createElement(p.Provider,{value:n},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=i(t),d=a,y=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return t?r.createElement(y,l(l({ref:n},u),{},{components:t})):r.createElement(y,l({ref:n},u))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c[m]="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=t[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},82233:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var r=t(47622),a=(t(59496),t(49613));const o={title:"concurrently\u4f7f\u7528\u8bb0\u5f55",toc_max_heading_level:6,tags:["npm"]},l=void 0,c={permalink:"/blog/index/2022/01/23/concurrently",source:"@site/blog/2022/01/23/concurrently.md",title:"concurrently\u4f7f\u7528\u8bb0\u5f55",description:"\u53ef\u4ee5\u540c\u65f6\u8fd0\u884c\u591a\u6761\u547d\u4ee4",date:"2022-01-23T00:00:00.000Z",formattedDate:"2022\u5e741\u670823\u65e5",tags:[{label:"npm",permalink:"/blog/index/tags/npm"}],readingTime:.59,hasTruncateMarker:!0,authors:[],frontMatter:{title:"concurrently\u4f7f\u7528\u8bb0\u5f55",toc_max_heading_level:6,tags:["npm"]},prevItem:{title:"\u5982\u4f55\u76d1\u542cinput\u8f93\u5165\u6846\u4e2d\u7684\u4e2d\u6587\u8f93\u5165\uff1f",permalink:"/blog/index/2022/04/07/listener-chinese-in-input-tag"},nextItem:{title:"yarn\u5e38\u7528\u547d\u4ee4\u8bb0\u5f55",permalink:"/blog/index/2022/01/09/yarn-command-common"}},p={authorsImageUrls:[]},i=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u6ce8\u610f",id:"\u6ce8\u610f",level:3}],u={toc:i},m="wrapper";function s(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u53ef\u4ee5\u540c\u65f6\u8fd0\u884c\u591a\u6761\u547d\u4ee4"),(0,a.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm i concurrently -D\n# \u6216\u8005\nnpm i concurrently -g\n")),(0,a.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,a.kt)("p",null,"\u5177\u4f53\u4f7f\u7528\u53c2\u8003\u5b98\u65b9\u6587\u6863"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"package.json")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "scripts": {\n        "dev": "concurrently --names \\"HTTP,WATCH\\" -c \\"bgBlue.bold,bgMagenta.bold\\"\n     \\"http-server\\" \\"npm run watch\\"",\n        "watch": "..."\n    }\n}\n')),(0,a.kt)("h3",{id:"\u6ce8\u610f"},"\u6ce8\u610f"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"concurrently"),"\u8981\u6267\u884c\u7684\u811a\u672c\u547d\u4ee4\uff0c\u9700\u5168\u5c40\u5b89\u88c5\u6216\u4f7f\u7528\u5168\u5c40\u5305\u7ba1\u7406\u5de5\u5177\u8fd0\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),"\u4e2d\u7684\u811a\u672c\u547d\u4ee4\u3002"),(0,a.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"http-server"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"npm"),"\u90fd\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"nodejs"),"\u7684\u5168\u5c40\u5b89\u88c5\u8def\u5f84\u4e2d"),(0,a.kt)("h1",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/concurrently"},"https://www.npmjs.com/package/concurrently")))}s.isMDXComponent=!0}}]);