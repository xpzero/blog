"use strict";(self.webpackChunkblog_2=self.webpackChunkblog_2||[]).push([[6775],{49613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),g=o,f=u["".concat(c,".").concat(g)]||u[g]||m[g]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},19238:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(47622),o=(r(59496),r(49613));const a={title:"git rebase\u4f7f\u7528\u8bb0\u5f55",toc_max_heading_level:6,tags:["git"]},i=void 0,l={permalink:"/blog/index/2022/11/05/git-rebase-useage",source:"@site/blog/2022/11/05/git-rebase-useage.md",title:"git rebase\u4f7f\u7528\u8bb0\u5f55",description:"\u4e4b\u524d\u867d\u7136\u542c\u8bf4\u8fc7git\u7684rebase\u547d\u4ee4\uff0c\u4f46\u662f\u4ece\u672a\u4f7f\u7528\u8fc7\uff0c\u6240\u4ee5\u4e0d\u592a\u4e86\u89e3\u3002\u56e0\u4e3a\u4e00\u6b21\u9700\u6c42\u7684\u5c0f\u6539\u52a8\u63d0\u4ea4\u4e86\u5f88\u591a\u65e0\u7528\u7684commit\uff0c\u4e0d\u60f3\u5e26\u5230\u8fdc\u7a0b\u4ed3\u5e93\u4e0a\u88ab\u5acc\u5f03\ud83e\udee3\uff0c\u6240\u4ee5\u5c1d\u8bd5\u4e86\u4e0b\u5982\u4f55\u4f7f\u7528\uff0c\u73b0\u5c06\u4f7f\u7528\u60c5\u51b5\u8bb0\u5f55\u4e0b\u6765\u4ee5\u4fbf\u540e\u7eed\u4f7f\u7528\u53c2\u8003\u3002",date:"2022-11-05T00:00:00.000Z",formattedDate:"2022\u5e7411\u67085\u65e5",tags:[{label:"git",permalink:"/blog/index/tags/git"}],readingTime:5.965,hasTruncateMarker:!0,authors:[],frontMatter:{title:"git rebase\u4f7f\u7528\u8bb0\u5f55",toc_max_heading_level:6,tags:["git"]},prevItem:{title:"\u624b\u5199Promise\u6e90\u7801\u8fc7Promise A+\u89c4\u8303",permalink:"/blog/index/2022/11/15/code-of-Promise-pass-Promise-A+"},nextItem:{title:"mobx\u5728react\u4e2d\u7684\u4f7f\u7528",permalink:"/blog/index/2022/10/15/how-to-use-mobx-in-react"}},c={authorsImageUrls:[]},p=[],s={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4e4b\u524d\u867d\u7136\u542c\u8bf4\u8fc7git\u7684rebase\u547d\u4ee4\uff0c\u4f46\u662f\u4ece\u672a\u4f7f\u7528\u8fc7\uff0c\u6240\u4ee5\u4e0d\u592a\u4e86\u89e3\u3002\u56e0\u4e3a\u4e00\u6b21\u9700\u6c42\u7684\u5c0f\u6539\u52a8\u63d0\u4ea4\u4e86\u5f88\u591a\u65e0\u7528\u7684commit\uff0c\u4e0d\u60f3\u5e26\u5230\u8fdc\u7a0b\u4ed3\u5e93\u4e0a\u88ab\u5acc\u5f03\ud83e\udee3\uff0c\u6240\u4ee5\u5c1d\u8bd5\u4e86\u4e0b\u5982\u4f55\u4f7f\u7528\uff0c\u73b0\u5c06\u4f7f\u7528\u60c5\u51b5\u8bb0\u5f55\u4e0b\u6765\u4ee5\u4fbf\u540e\u7eed\u4f7f\u7528\u53c2\u8003\u3002"),(0,o.kt)("p",null,"\u547d\u4ee4\u4f5c\u7528"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5c06\u591a\u4e2acommit\u5408\u5e76\u6210\u4e00\u4e2a"),(0,o.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u8ba9git graph\u66f4\u597d\u770b\u4e00\u70b9")))}m.isMDXComponent=!0}}]);