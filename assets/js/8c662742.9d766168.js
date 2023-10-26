"use strict";(self.webpackChunkblog_2=self.webpackChunkblog_2||[]).push([[9483],{49613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(r),m=o,d=s["".concat(i,".").concat(m)]||s[m]||f[m]||a;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[s]="string"==typeof e?e:o,l[1]=c;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},75447:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(47622),o=(r(59496),r(49613));const a={title:"SharedWorker\u4f7f\u7528\u603b\u7ed3",toc_max_heading_level:6,tags:["js"]},l=void 0,c={permalink:"/blog/index/2022/10/14/SharedWorker\u4f7f\u7528\u603b\u7ed3",source:"@site/blog/2022/10/14/SharedWorker\u4f7f\u7528\u603b\u7ed3.md",title:"SharedWorker\u4f7f\u7528\u603b\u7ed3",description:"\u6700\u8fd1\u6709\u4e2a\u9700\u6c42\u8981\u5728\u6d4f\u89c8\u5668\u9875\u7b7e\u4e4b\u95f4\u5b9e\u73b0\u4fe1\u606f\u5171\u4eab\uff0c\u7531\u7b2c\u4e09\u65b9\u5305\u5904\u7406\u3002\u770b\u8fc7\u4eba\u5bb6\u7684\u6548\u679c\u4ecb\u7ecd\uff0c\u56af\u54e6\uff0c\u95ea\u778e\u6211\u7684\u53cc\u773c\uff01\u6ca1\u89c1\u8bc6\u8fc7\u7684\u6280\u672f\uff0c\u600e\u4e48\u4e5f\u5f97\u770b\u4e00\u770b\u5440\ud83e\uddd0",date:"2022-10-14T00:00:00.000Z",formattedDate:"2022\u5e7410\u670814\u65e5",tags:[{label:"js",permalink:"/blog/index/tags/js"}],readingTime:7.02,hasTruncateMarker:!0,authors:[],frontMatter:{title:"SharedWorker\u4f7f\u7528\u603b\u7ed3",toc_max_heading_level:6,tags:["js"]},prevItem:{title:"mobx\u5728react\u4e2d\u7684\u4f7f\u7528",permalink:"/blog/index/2022/10/15/mobx\u5728react\u4e2d\u7684\u4f7f\u7528"},nextItem:{title:"react-\u5e38\u7528hooks\u7684\u57fa\u672c\u4f7f\u7528demo\u8bb0\u5f55",permalink:"/blog/index/2022/07/21/react-\u5e38\u7528hooks\u7684\u57fa\u672c\u4f7f\u7528demo\u8bb0\u5f55"}},i={authorsImageUrls:[]},p=[],u={toc:p},s="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6700\u8fd1\u6709\u4e2a\u9700\u6c42\u8981\u5728\u6d4f\u89c8\u5668\u9875\u7b7e\u4e4b\u95f4\u5b9e\u73b0\u4fe1\u606f\u5171\u4eab\uff0c\u7531\u7b2c\u4e09\u65b9\u5305\u5904\u7406\u3002\u770b\u8fc7\u4eba\u5bb6\u7684\u6548\u679c\u4ecb\u7ecd\uff0c\u56af\u54e6\uff0c\u95ea\u778e\u6211\u7684\u53cc\u773c\uff01\u6ca1\u89c1\u8bc6\u8fc7\u7684\u6280\u672f\uff0c\u600e\u4e48\u4e5f\u5f97\u770b\u4e00\u770b\u5440\ud83e\uddd0"))}f.isMDXComponent=!0}}]);