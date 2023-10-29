"use strict";(self.webpackChunkblog_2=self.webpackChunkblog_2||[]).push([[1776],{49613:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>b});var n=o(59496);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function p(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),i=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):p(p({},t),e)),o},u=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=i(o),d=r,b=s["".concat(c,".").concat(d)]||s[d]||m[d]||a;return o?n.createElement(b,p(p({ref:t},u),{},{components:o})):n.createElement(b,p({ref:t},u))}));function b(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,p=new Array(a);p[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:r,p[1]=l;for(var i=2;i<a;i++)p[i]=o[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},20193:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var n=o(47622),r=(o(59496),o(49613));const a={title:"js\u539f\u578b",toc_max_heading_level:6,tags:["js"]},p=void 0,l={permalink:"/blog/index/2021/01/31/js\u539f\u578b",source:"@site/blog/2021/01/31/js\u539f\u578b.md",title:"js\u539f\u578b",description:"\u9879\u76ee\u4e2d\u770b\u5230prototype\u5374\u4e0d\u77e5\u9053\u662f\u4ec0\u4e48\uff0c\u5b66\u4e60\u4e00\u4e0b",date:"2021-01-31T00:00:00.000Z",formattedDate:"2021\u5e741\u670831\u65e5",tags:[{label:"js",permalink:"/blog/index/tags/js"}],readingTime:4.155,hasTruncateMarker:!0,authors:[],frontMatter:{title:"js\u539f\u578b",toc_max_heading_level:6,tags:["js"]},prevItem:{title:"VSCode\u4e2dNodejs\u4f7f\u7528babel\u8fd0\u884cES6\u6a21\u5757\u673a\u5236",permalink:"/blog/index/2021/10/15/VScode\u4e2dNodejs\u4f7f\u7528babel\u8fd0\u884cES6\u6a21\u5757\u673a\u5236"},nextItem:{title:"\u67ef\u91cc\u5316\u662f\u4ec0\u4e48?",permalink:"/blog/index/2021/01/27/\u67ef\u91cc\u5316\u662f\u4ec0\u4e48\uff1f"}},c={authorsImageUrls:[]},i=[{value:"<code>prototype</code>",id:"prototype",level:2},{value:"<code>constructor</code>",id:"constructor",level:2},{value:"<code>__proto__</code>",id:"__proto__",level:2},{value:"<code>prototype</code>\u548c<code>__proto__</code>\u7684\u5173\u7cfb",id:"prototype\u548c__proto__\u7684\u5173\u7cfb",level:2},{value:"\u4e3a\u4ec0\u4e48\u8fd9\u91cc\u4e0d\u8f93\u51fa<code>undefined</code>\uff1f",id:"\u4e3a\u4ec0\u4e48\u8fd9\u91cc\u4e0d\u8f93\u51faundefined",level:2},{value:"\u539f\u578b\u94fe",id:"\u539f\u578b\u94fe",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],u={toc:i},s="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u9879\u76ee\u4e2d\u770b\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"prototype"),"\u5374\u4e0d\u77e5\u9053\u662f\u4ec0\u4e48\uff0c\u5b66\u4e60\u4e00\u4e0b"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"JavaScript \u5e38\u88ab\u63cf\u8ff0\u4e3a\u4e00\u79cd",(0,r.kt)("strong",{parentName:"p"},"\u57fa\u4e8e\u539f\u578b\u7684\u8bed\u8a00 (prototype-based language)"),"\u2014\u2014\u6bcf\u4e2a\u5bf9\u8c61\u62e5\u6709\u4e00\u4e2a",(0,r.kt)("strong",{parentName:"p"},"\u539f\u578b\u5bf9\u8c61"),"\uff0c",(0,r.kt)("span",{style:{color:"red",fontWeight:"bold"}},"\u5bf9\u8c61\u4ee5\u5176\u539f\u578b\u4e3a\u6a21\u677f\u3001\u4ece\u539f\u578b\u7ee7\u627f\u65b9\u6cd5\u548c\u5c5e\u6027"),"\u3002\u539f\u578b\u5bf9\u8c61\u4e5f\u53ef\u80fd\u62e5\u6709\u539f\u578b\uff0c\u5e76\u4ece\u4e2d\u7ee7\u627f\u65b9\u6cd5\u548c\u5c5e\u6027\uff0c\u4e00\u5c42\u4e00\u5c42\u3001\u4ee5\u6b64\u7c7b\u63a8\u3002\u8fd9\u79cd\u5173\u7cfb\u5e38\u88ab\u79f0\u4e3a",(0,r.kt)("strong",{parentName:"p"},"\u539f\u578b\u94fe (prototype chain)"),"\uff0c\u5b83\u89e3\u91ca\u4e86\u4e3a\u4f55\u4e00\u4e2a\u5bf9\u8c61\u4f1a\u62e5\u6709\u5b9a\u4e49\u5728\u5176\u4ed6\u5bf9\u8c61\u4e2d\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\u3002"),(0,r.kt)("p",{parentName:"blockquote"},"\u51c6\u786e\u5730\u8bf4\uff0c\u8fd9\u4e9b\u5c5e\u6027\u548c\u65b9\u6cd5\u5b9a\u4e49\u5728Object\u7684\u6784\u9020\u5668\u51fd\u6570(constructor functions)\u4e4b\u4e0a\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"prototype"),"\u5c5e\u6027\u4e0a\uff0c\u800c\u975e\u5bf9\u8c61\u5b9e\u4f8b\u672c\u8eab\u3002"),(0,r.kt)("p",{parentName:"blockquote"},"\u5728\u4f20\u7edf\u7684 OOP \u4e2d\uff0c\u9996\u5148\u5b9a\u4e49\u201c\u7c7b\u201d\uff0c\u6b64\u540e\u521b\u5efa\u5bf9\u8c61\u5b9e\u4f8b\u65f6\uff0c\u7c7b\u4e2d\u5b9a\u4e49\u7684\u6240\u6709\u5c5e\u6027\u548c\u65b9\u6cd5\u90fd\u88ab\u590d\u5236\u5230\u5b9e\u4f8b\u4e2d\u3002\u5728 JavaScript \u4e2d\u5e76\u4e0d\u5982\u6b64\u590d\u5236\u2014\u2014\u800c\u662f\u5728\u5bf9\u8c61\u5b9e\u4f8b\u548c\u5b83\u7684\u6784\u9020\u5668\u4e4b\u95f4\u5efa\u7acb\u4e00\u4e2a\u94fe\u63a5\uff08\u5b83\u662f",(0,r.kt)("strong",{parentName:"p"},"proto"),"\u5c5e\u6027\uff0c\u662f\u4ece\u6784\u9020\u51fd\u6570\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"prototype"),"\u5c5e\u6027\u6d3e\u751f\u7684\uff09\uff0c\u4e4b\u540e\u901a\u8fc7\u4e0a\u6eaf\u539f\u578b\u94fe\uff0c\u5728\u6784\u9020\u5668\u4e2d\u627e\u5230\u8fd9\u4e9b\u5c5e\u6027\u548c\u65b9\u6cd5\u3002")),(0,r.kt)("h2",{id:"prototype"},(0,r.kt)("inlineCode",{parentName:"h2"},"prototype")),(0,r.kt)("p",null,"\u6307\u5411\u6784\u9020\u51fd\u6570\u7684\u539f\u578b"),(0,r.kt)("p",null,"\u53ea\u6709",(0,r.kt)("span",{style:{color:"blue",fontWeight:"bold"}},"\u51fd\u6570"),"\u62e5\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"prototype")),(0,r.kt)("h2",{id:"constructor"},(0,r.kt)("inlineCode",{parentName:"h2"},"constructor")),(0,r.kt)("h2",{id:"__proto__"},(0,r.kt)("inlineCode",{parentName:"h2"},"__proto__")),(0,r.kt)("p",null,"\u6307\u5411\u5bf9\u8c61\u5b9e\u4f8b\u7684\u6784\u9020\u51fd\u6570\u7684\u539f\u578b"),(0,r.kt)("p",null,"\u53ea\u6709",(0,r.kt)("span",{style:{color:"blue",fontWeight:"bold"}},"\u5bf9\u8c61\u5b9e\u4f8b"),"\u62e5\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"__proto__"),"\u3002",(0,r.kt)("strong",{parentName:"p"},"\u5bf9\u8c61\u5b9e\u4f8b\u5c31\u662f\u4f7f\u7528\u51fd\u6570\u521b\u5efa\u7684\u5bf9\u8c61\u3002")),(0,r.kt)("p",null,"\u6bd4\u5982:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let a = {};\nfunction B() {}\nlet xxx = new B();\nlet arr = [];\n\n// a, xxx, arr\u90fd\u662f\u5bf9\u8c61\u5b9e\u4f8b\n")),(0,r.kt)("h2",{id:"prototype\u548c__proto__\u7684\u5173\u7cfb"},(0,r.kt)("inlineCode",{parentName:"h2"},"prototype"),"\u548c",(0,r.kt)("inlineCode",{parentName:"h2"},"__proto__"),"\u7684\u5173\u7cfb"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function A() {}\nlet a = new A();\nconsole.log(a.__proto__ === A.prototype); // true\nlet arr = [];\nconsole.log(arr.__proto__ === Array.prototype); // true\n")),(0,r.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u8fd9\u91cc\u4e0d\u8f93\u51faundefined"},"\u4e3a\u4ec0\u4e48\u8fd9\u91cc\u4e0d\u8f93\u51fa",(0,r.kt)("inlineCode",{parentName:"h2"},"undefined"),"\uff1f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function A() {}\nconsole.log(A.__proto__); // \u5e76\u4e0d\u8f93\u51faundefined\uff0c\u8bf4\u660e\u51fd\u6570A\u6709`__proto__`\u5c5e\u6027\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5728JavaScript\u4e2d\uff0c",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("span",{style:{color:"red"}},"\u51e0\u4e4e\u6240\u6709\u7684\u5bf9\u8c61\u90fd\u662f",(0,r.kt)("inlineCode",{parentName:"strong"},"Object"),"\u7c7b\u578b\u7684\u5b9e\u4f8b")),"\uff0c\u5b83\u4eec\u90fd\u4f1a\u4ece",(0,r.kt)("inlineCode",{parentName:"p"},"Object.prototype"),"\u7ee7\u627f\u5c5e\u6027\u548c\u65b9\u6cd5\u3002"),(0,r.kt)("p",{parentName:"blockquote"},"\u6bcf\u4e2a ",(0,r.kt)("span",{style:{color:"red",fontWeight:"bold"}},"JavaScript \u51fd\u6570"),"\u5b9e\u9645\u4e0a\u90fd",(0,r.kt)("span",{style:{color:"red",fontWeight:"bold"}},"\u662f"),"\u4e00\u4e2a `Function` ",(0,r.kt)("span",{style:{color:"red",fontWeight:"bold"}},"\u5bf9\u8c61"),"\u3002\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"(function(){}).constructor === Function // true")," \u4fbf\u53ef\u4ee5\u5f97\u5230\u8fd9\u4e2a\u7ed3\u8bba\u3002")),(0,r.kt)("p",null,"\u7531",(0,r.kt)("inlineCode",{parentName:"p"},"MDN"),"\u7684\u89e3\u91ca\u53ef\u77e5\uff0c\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"JavaScript"),"\u4e2d\u51fd\u6570\u4e5f\u662f\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"Object"),"\u7684\u5b9e\u4f8b\uff0c\u800c\u5bf9\u8c61\u5b9e\u4f8b\u90fd\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"__proto__"),"\u5c5e\u6027\uff0c\u6240\u4ee5",(0,r.kt)("inlineCode",{parentName:"p"},"A.__proto__"),"\u662f\u5b58\u5728\u7684\u3002"),(0,r.kt)("h2",{id:"\u539f\u578b\u94fe"},"\u539f\u578b\u94fe"),(0,r.kt)("p",null,"\u7531\u4e8e\u77e5\u8bc6\u8303\u56f4\u6709\u9650\uff0c\u6240\u4ee5",(0,r.kt)("inlineCode",{parentName:"p"},"Symbol"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"BigInt"),"\u7684\u521b\u5efa\u8fd9\u91cc\u6ca1\u6709\u4e3e\u4f8b\u5217\u51fa\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"prototype",src:o(96620).Z,width:"3132",height:"3000"})),(0,r.kt)("p",null,"\u5982\u679c\u67d0\u4e2a\u5c5e\u6027\u5728\u5f53\u524d\u5bf9\u8c61\u4e0a\u67e5\u627e\u4e0d\u5230\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"JavaScript"),"\u5c31\u4f1a\u6309\u7167",(0,r.kt)("inlineCode",{parentName:"p"},"xxx.__proto__.__proto__...."),"\u7684\u987a\u5e8f\u67e5\u627e\u76f4\u5230\u627e\u5230\u5bf9\u5e94\u7684\u5c5e\u6027\u540d\u79f0/Null\u4e3a\u6b62\uff0c\u627e\u5230\u540e\u5373\u8fd4\u56de\uff0c\u4e0d\u518d\u5411\u540e\u7ee7\u7eed\u67e5\u627e\u3002\u4f8b\u5982"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'Object.prototype.mName = "Object";\nObject.prototype.xxx = "xxx";\nNumber.prototype.mName = "mNmaee os Number";\nNumber.prototype.mFunc = "suio Func";\nlet count = 123;\n// \u56e0\u4e3acount\u662f\u6570\u5b57\u7c7b\u578b\uff0c\u6240\u4ee5\u8fd9\u91cc\u7684\u5c5e\u6027\u4e0d\u80fd\u88ab\u6dfb\u52a0\u5230count\u4e0a\ncount.mName = "123";\nconsole.log(count); // 123\n// \u5728Number\u7684\u539f\u578b\u4e0a\u5b9a\u4e49\u7684\nconsole.log(count.mName); // mNmaee os Number\n// \u5728Number\u7684\u539f\u578b\u4e0a\u5b9a\u4e49\u7684\nconsole.log(count.mFunc); // suio Func\n// \u5728Object\u7684\u539f\u578b\u4e0a\u5b9a\u4e49\u7684[\u539f\u578b\u94fe\uff1acount.__proto__ => Number.prototype => Number.prototype.__proto__ => Object.prototype]\nconsole.log(count.xxx); // xxx\n\nlet obj = {\n  mName: "obj",\n  mFunc() {\n    console.log("mFunc");\n  },\n};\nconsole.log(obj); // {mName: "obj", mFunc: \u0192}\n// obj\u5bf9\u8c61\u4e0a\u5b9a\u4e49\u7684\nconsole.log(obj.mName); // obj\n// obj\u5bf9\u8c61\u4e0a\u5b9a\u4e49\u7684\nconsole.log(obj.mFunc); // \u0192 mFunc () {console.log(\'mFunc\');}\n// Object\u539f\u578b\u4e0a\u5b9a\u4e49\u7684[\u539f\u578b\u94fe\uff1aobj.__proto__ => Object.prototype]\nconsole.log(obj.xxx); // xxx\n')),(0,r.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Object_prototypes"},"Object_prototypes")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object"},"Object")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function"},"Function")))}m.isMDXComponent=!0},96620:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/prototype-4a49ea6f1e0d6b6c14bb79fad78cf01b.png"}}]);