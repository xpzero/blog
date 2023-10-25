"use strict";(self.webpackChunkblog_2=self.webpackChunkblog_2||[]).push([[8335],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(t),m=a,f=p["".concat(c,".").concat(m)]||p[m]||h[m]||i;return t?r.createElement(f,l(l({ref:n},u),{},{components:t})):r.createElement(f,l({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},571:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=t(7622),a=(t(9496),t(9613));const i={title:"ES6\u4e2d\u4e00\u4e9b\u9ad8\u9636\u51fd\u6570\u7684\u4ee3\u7801\u5b9e\u73b0",toc_max_heading_level:6,tags:["js"]},l=void 0,o={permalink:"/blog/index/2021/12/19/ES6\u4e2d\u4e00\u4e9b\u9ad8\u9636\u51fd\u6570\u7684\u4ee3\u7801\u5b9e\u73b0",source:"@site/blog/2021/12/19/ES6\u4e2d\u4e00\u4e9b\u9ad8\u9636\u51fd\u6570\u7684\u4ee3\u7801\u5b9e\u73b0.md",title:"ES6\u4e2d\u4e00\u4e9b\u9ad8\u9636\u51fd\u6570\u7684\u4ee3\u7801\u5b9e\u73b0",description:"\u524d\u63d0",date:"2021-12-19T00:00:00.000Z",formattedDate:"2021\u5e7412\u670819\u65e5",tags:[{label:"js",permalink:"/blog/index/tags/js"}],readingTime:2.035,hasTruncateMarker:!0,authors:[],frontMatter:{title:"ES6\u4e2d\u4e00\u4e9b\u9ad8\u9636\u51fd\u6570\u7684\u4ee3\u7801\u5b9e\u73b0",toc_max_heading_level:6,tags:["js"]},prevItem:{title:"js\u7684\u51e0\u79cd\u7ee7\u627f\u65b9\u5f0f",permalink:"/blog/index/2021/12/25/js\u7684\u51e0\u79cd\u7ee7\u627f\u65b9\u5f0f"},nextItem:{title:"\u5706\u5468\u7387\u4e3a\u4ec0\u4e48\u8868\u793a\u89d2\u5ea6\u4e3a180\xb0\uff1f",permalink:"/blog/index/2021/12/11/\u5706\u5468\u7387\u4e3a\u4ec0\u4e48\u8868\u793a\u89d2\u5ea6\u4e3a180\xb0\uff1f"}},c={authorsImageUrls:[]},s=[{value:"\u524d\u63d0",id:"\u524d\u63d0",level:2},{value:"forEach",id:"foreach",level:3},{value:"filter",id:"filter",level:3},{value:"map",id:"map",level:3},{value:"\u539f\u751f\u5b9e\u73b0",id:"\u539f\u751f\u5b9e\u73b0",level:4},{value:"reduce\u5b9e\u73b0",id:"reduce\u5b9e\u73b0",level:4},{value:"some",id:"some",level:3},{value:"every",id:"every",level:3},{value:"reduce",id:"reduce",level:3}],u={toc:s},p="wrapper";function h(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u524d\u63d0"},"\u524d\u63d0"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u65b9\u6cd5\u5728\u5176\u6570\u7ec4\u5143\u7d20",(0,a.kt)("inlineCode",{parentName:"p"},"\u88ab\u5220\u9664/\u672a\u88ab\u521d\u59cb\u5316"),"\u65f6\u4e0d\u8c03\u7528\u56de\u8c03\u51fd\u6570\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"strong"},"\u7d22\u5f15 in \u6570\u7ec4"),"\u7684\u65b9\u5f0f\u5224\u65ad\u6570\u7ec4\u5143\u7d20\u662f\u5426\u662f",(0,a.kt)("inlineCode",{parentName:"strong"},"\u88ab\u5220\u9664/\u672a\u88ab\u521d\u59cb\u5316"),"\u7684\u72b6\u6001")),(0,a.kt)("h3",{id:"foreach"},"forEach"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"Array.prototype._forEach = function (callback, thisArg) {\n  const arrLen = this.length;\n  let i = 0;\n  while (i < arrLen) {\n    // \u88ab\u5220\u9664/\u672a\u88ab\u521d\u59cb\u5316\u7684\u5143\u7d20\u4e0d\u5faa\u73af\n    if (i in this) {\n      callback.call(thisArg, this[i], i, this);\n    }\n    i++;\n  }\n};\n")),(0,a.kt)("h3",{id:"filter"},"filter"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"Array.prototype._filter = function (callback, thisArg) {\n  const res = [],\n    arrLen = this.length;\n  let i = 0;\n  while (i < arrLen) {\n    if (i in this) {\n      const value = this[i];\n      callback.call(thisArg, value, i, this) && res.push(value);\n    }\n    i++;\n  }\n  return res;\n};\n")),(0,a.kt)("h3",{id:"map"},"map"),(0,a.kt)("h4",{id:"\u539f\u751f\u5b9e\u73b0"},"\u539f\u751f\u5b9e\u73b0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"Array.prototype._map = function (callback, thisArg) {\n  const res = [],\n    arrLen = this.length;\n  let i = 0;\n  while (i < arrLen) {\n    if (i in this) {\n      res[i] = callback.call(thisArg, this[i], i, this);\n    }\n    i++;\n  }\n  return res;\n};\n")),(0,a.kt)("h4",{id:"reduce\u5b9e\u73b0"},"reduce\u5b9e\u73b0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"Array.prototype._map = function (callback, thisArg) {\n  return this.reduce((arr, value, index, array) => {\n    arr[index] = callback.call(thisArg, value, index, array);\n  }, []);\n};\n")),(0,a.kt)("h3",{id:"some"},"some"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"Array.prototype._some = function (callback, thisArg) {\n  let i = 0;\n  const arrLen = this.length;\n  while (i < arrLen) {\n    if (i in this) {\n      if (callback.call(thisArg, this[i], i, this)) {\n        return true;\n      }\n    }\n    i++;\n  }\n  return false;\n};\n")),(0,a.kt)("h3",{id:"every"},"every"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"Array.prototype._every = function (callback, thisArg) {\n  let i = 0,\n    loopCount = 0,\n    trueCount = 0;\n  const arrLen = this.length;\n  while (i < arrLen) {\n    if (i in this) {\n      loopCount++;\n      if (callback.call(thisArg, this[i], i, this)) {\n        trueCount++;\n      }\n    }\n    i++;\n  }\n  return loopCount === trueCount;\n};\n")),(0,a.kt)("h3",{id:"reduce"},"reduce"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'Array.prototype._reduce = function (...args) {\n  const arrLen = this.length;\n  if (args.length === 1 && !arrLen) {\n    throw new TypeError("Reduce of empty array with no initial value");\n  }\n\n  const callback = args[0];\n  let initialValue = this[0],\n    i = 1;\n  if (args.length > 1) {\n    initialValue = args[1];\n    i--;\n  }\n  let accumulator = initialValue;\n  while (i < arrLen) {\n    if (i in this) {\n      accumulator = callback(accumulator, this[i], i, this);\n    }\n    i++;\n  }\n  return accumulator;\n};\n')))}h.isMDXComponent=!0}}]);