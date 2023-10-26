"use strict";(self.webpackChunkblog_2=self.webpackChunkblog_2||[]).push([[6067],{49613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(59496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),p=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(a.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,a=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),d=o,f=u["".concat(a,".").concat(d)]||u[d]||m[d]||l;return t?r.createElement(f,s(s({ref:n},c),{},{components:t})):r.createElement(f,s({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,s=new Array(l);s[0]=d;var i={};for(var a in n)hasOwnProperty.call(n,a)&&(i[a]=n[a]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<l;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},40387:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=t(47622),o=(t(59496),t(49613));const l={title:"\u624b\u5199Promise\u6e90\u7801\u8fc7Promise A+\u89c4\u8303",toc_max_heading_level:6,tags:["js"]},s=void 0,i={permalink:"/blog/index/2022/11/15/\u624b\u5199Promise\u6e90\u7801\u8fc7Promise A+\u89c4\u8303",source:"@site/blog/2022/11/15/\u624b\u5199Promise\u6e90\u7801\u8fc7Promise A+\u89c4\u8303.md",title:"\u624b\u5199Promise\u6e90\u7801\u8fc7Promise A+\u89c4\u8303",description:"\u9002\u7528\u4eba\u7fa4",date:"2022-11-15T00:00:00.000Z",formattedDate:"2022\u5e7411\u670815\u65e5",tags:[{label:"js",permalink:"/blog/index/tags/js"}],readingTime:5.935,hasTruncateMarker:!0,authors:[],frontMatter:{title:"\u624b\u5199Promise\u6e90\u7801\u8fc7Promise A+\u89c4\u8303",toc_max_heading_level:6,tags:["js"]},prevItem:{title:"\u4f7f\u7528Hugo\u6784\u5efa\u4e2a\u4eba\u535a\u5ba2\u5e76\u6258\u7ba1\u81f3Github Pages",permalink:"/blog/index/2023/09/04/\u4f7f\u7528Hugo\u6784\u5efa\u4e2a\u4eba\u535a\u5ba2\u5e76\u6258\u7ba1\u81f3Github Pages"},nextItem:{title:"git rebase\u4f7f\u7528\u8bb0\u5f55",permalink:"/blog/index/2022/11/05/git-rebase\u4f7f\u7528\u8bb0\u5f55"}},a={authorsImageUrls:[]},p=[{value:"\u9002\u7528\u4eba\u7fa4",id:"\u9002\u7528\u4eba\u7fa4",level:2},{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"\u6dfb\u52a0<code>promises-aplus-tests</code>\u5305",id:"\u6dfb\u52a0promises-aplus-tests\u5305",level:3},{value:"\u4fee\u6539<code>package.json</code>\u4e2d\u7684<code>scripts</code>",id:"\u4fee\u6539packagejson\u4e2d\u7684scripts",level:3},{value:"Promise A+\u89c4\u8303",id:"promise-a\u89c4\u8303",level:2},{value:"Promise\u57fa\u672c\u7279\u5f81",id:"promise\u57fa\u672c\u7279\u5f81",level:2},{value:"\u6e90\u7801",id:"\u6e90\u7801",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],c={toc:p},u="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u9002\u7528\u4eba\u7fa4"},"\u9002\u7528\u4eba\u7fa4"),(0,o.kt)("p",null,"\u53ef\u719f\u7ec3\u4f7f\u7528Promise"),(0,o.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,o.kt)("p",null,"\u5173\u4e8e\u624b\u5199Promise\u7684\u6e90\u7801\u4e4b\u524d\u5c1d\u8bd5\u4e86\u4e0d\u6b624\uff0c5\u6b21\u4f46\u90fd\u4ee5\u5931\u8d25\u544a\u7ec8\uff0c\u4e0d\u662f\u89c9\u5f97\u96be\u4e0d\u60f3\u575a\u6301\u5c31\u662f\u9879\u76ee\u52a0\u6025\u6ca1\u6709\u65f6\u95f4\u5bfc\u81f4\u6401\u7f6e\u3002\u8fd9\u6b21\u4e0b\u5b9a\u51b3\u5fc3\u8981\u82b1\u4e00\u4e2a\u5b8c\u6574\u7684\u65f6\u95f4\u6bb5\u653b\u7834\u8fd9\u4e2a\u4e8b\u60c5\uff0c\u56e0\u4e3a\u8111\u888b\u4e0d\u662f\u5f88\u7075\u5149\uff0c\u603b\u7684\u7b97\u4e0b\u6765\u5dee\u4e0d\u591a4-5\u4e2a\u5c0f\u65f6\uff0c\u4f46\u662f\u8fd9\u91cc\u7ed3\u679c\u6700\u91cd\u8981\uff0c\u7ec8\u4e8e\u6309\u7167\u53ef\u4ee5\u7406\u89e3\u7684\u601d\u8def\u5b8c\u6210\u4e86\u901a\u8fc7Promise A+\u89c4\u8303\u7684Promise\u4ee3\u7801\u7f16\u5199\uff01\u4e0b\u9762\u6839\u636e\u6211\u7684\u7f16\u5199\u8fc7\u7a0b\u603b\u7ed3\u4e00\u4e0b\u7f16\u7801\u601d\u8def\u65b9\u4fbf\u4e4b\u540e\u7684\u7406\u89e3\u3002"),(0,o.kt)("h2",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,o.kt)("p",null,"\u9700\u8981\u901a\u8fc7Promise A+\u89c4\u8303\uff0c\u90a3\u5c31\u9700\u8981\u6709\u6d4b\u8bd5\u7528\u4f8b\u6765\u5e2e\u52a9\u6211\u4eec\u5224\u65ad\u81ea\u5df1\u5199\u7684\u7684\u4ee3\u7801\u662f\u5426\u4f1a\u7ecf\u5f97\u4f4fPromise A+\u7684\u8003\u9a8c\u3002\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u51c6\u5907\u4e00\u4e2a\u4e13\u95e8\u7528\u6765\u68c0\u6d4bPromise A+\u89c4\u8303\u7684npm\u5305\uff0c\u6765\u5e2e\u52a9\u6211\u4eec\u5224\u65ad\u7f16\u5199\u7684\u4ee3\u7801\u662f\u5426\u5df2\u7ecf\u6210\u529f\u901a\u8fc7Promise A+\u89c4\u8303\u3002"),(0,o.kt)("h3",{id:"\u6dfb\u52a0promises-aplus-tests\u5305"},"\u6dfb\u52a0",(0,o.kt)("inlineCode",{parentName:"h3"},"promises-aplus-tests"),"\u5305"),(0,o.kt)("p",null,"npm\u5305\u7ba1\u7406\u5de5\u5177\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u4e60\u60ef\u9009\u53d6\u4f7f\u7528\uff0c\u8fd9\u91cc\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"yarn")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn add promises-aplus-tests -D\n")),(0,o.kt)("h3",{id:"\u4fee\u6539packagejson\u4e2d\u7684scripts"},"\u4fee\u6539",(0,o.kt)("inlineCode",{parentName:"h3"},"package.json"),"\u4e2d\u7684",(0,o.kt)("inlineCode",{parentName:"h3"},"scripts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"scripts": {\n    "test": "promises-aplus-tests MyPromise.js"\n}\n')),(0,o.kt)("p",null,"\u5c06",(0,o.kt)("inlineCode",{parentName:"p"},"MyPromise.js"),"\u6362\u6210\u81ea\u5df1\u5199\u7684\u4ee3\u7801\u6587\u4ef6\uff0c\u5982\u679c\u6709\u6587\u4ef6\u5939\u5d4c\u5957\u9700\u8981\u5e26\u4e0a\u8def\u5f84\u3002"),(0,o.kt)("p",null,"\u8fd9\u6837\u6211\u4eec\u5c31\u53ef\u4ee5\u5728\u8ba4\u4e3a\u4ee3\u7801\u7f16\u5199\u5b8c\u6210\u540e\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"yarn test"),"\u6d4b\u8bd5\u81ea\u5df1\u7684\u4ee3\u7801\u4e86\u3002"),(0,o.kt)("h2",{id:"promise-a\u89c4\u8303"},"Promise A+\u89c4\u8303"),(0,o.kt)("p",null,"\u65e2\u7136\u6211\u4eec\u5199\u7684\u4ee3\u7801\u8981\u901a\u8fc7Promise A+\u89c4\u8303\uff0c\u6211\u4eec\u5c31\u5f97\u8981\u4e86\u89e3\u89c4\u8303\u91cc\u7684\u5185\u5bb9\u662f\u4ec0\u4e48\u3002\u5173\u4e8e\u89c4\u8303\u76f8\u5173\u7684\u5185\u5bb9\uff0c\u53ef\u4ee5\u5728\u8fd9\u91cc\u770b\ud83d\udc49\ud83d\udc49\ud83d\udc49",(0,o.kt)("a",{parentName:"p",href:"https://promisesaplus.com/"},"https://promisesaplus.com/"),"\u3002\u56e0\u4e3a\u4e0d\u80fd\u4e00\u5c4f\u622a\u51fa\u6765\uff0c\u6240\u4ee5\u5c31\u4e0d\u8d34\u51fa\u6765\u4e86\uff0c\u611f\u5174\u8da3\u7684\u540c\u5b66\u53ef\u4ee5\u8fdb\u53bb\u770b\u3002"),(0,o.kt)("h2",{id:"promise\u57fa\u672c\u7279\u5f81"},"Promise\u57fa\u672c\u7279\u5f81"),(0,o.kt)("p",null,"\u6211\u4eec\u5148\u68b3\u7406\u4e00\u756a\u81ea\u5df1\u5bf9Promise\u7684\u4e86\u89e3\uff0c\u4fbf\u4e8e\u540e\u7eed\u7684\u7406\u89e3\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"promise\u51fd\u6570\u5bf9\u8c61\u7684\u6784\u9020\u51fd\u6570\u6709\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570\uff0c\u6211\u4eec\u79f0\u4e3ac0\uff0c\u56de\u8c03\u51fd\u6570\u4f1a\u5728\u51fd\u6570\u6267\u884c\u65f6\u540c\u6b65\u6267\u884c"),(0,o.kt)("li",{parentName:"ul"},"c0\u7684\u53c2\u6570\u4e2d\u53c8\u6709\u4e24\u4e2a\u56de\u8c03\u51fd\u6570\uff0c\u6211\u4eec\u79f0\u4e3ac1\uff0cc2"),(0,o.kt)("li",{parentName:"ul"},"c1\u3001c2\u4f1a\u5728c0\u4e2d\u7684\u6211\u4eec\u6307\u5b9a\u7684\u4f4d\u7f6e\u6267\u884c"),(0,o.kt)("li",{parentName:"ul"},"promise\u7684\u521d\u59cb\u72b6\u6001\u4e3apending\uff0c\u5185\u90e8\u7684\u521d\u59cb\u503c\u4e3aundefined"),(0,o.kt)("li",{parentName:"ul"},"c1\u6267\u884c\u540epromise\u7684\u72b6\u6001\u4f1a\u53d8\u4e3afulfilled\uff0c\u5982\u679cPromise\u6709then\u65b9\u6cd5\uff0c\u5219then\u65b9\u6cd5\u4f1a\u88ab\u5f02\u6b65\u6267\u884c"),(0,o.kt)("li",{parentName:"ul"},"c2\u6267\u884c\u540epromise\u7684\u72b6\u6001\u4f1a\u53d8\u4e3arejected\uff0c\u5982\u679cPromise\u6709catch\u65b9\u6cd5\uff0c\u5219catch\u65b9\u6cd5\u4f1a\u88ab\u5f02\u6b65\u6267\u884c"),(0,o.kt)("li",{parentName:"ul"},"c1\u3001c2\u53ea\u4f1a\u88ab\u6267\u884c\u4e00\u4e2a"),(0,o.kt)("li",{parentName:"ul"},"then\u51fd\u6570\u4e2d\u7684\u8fd4\u56de\u503c\u53ef\u4ee5\u4efb\u610f\u503c\uff0c\u4e5f\u53ef\u4ee5\u662f\u65b0\u7684promise\uff0c\u4e0d\u53ef\u4ee5\u662f\u672cpromise\uff0c\u4f1a\u62a5\u9519\u63d0\u793a",(0,o.kt)("inlineCode",{parentName:"li"},"Chaining cycle detected for promise #<Promise>")),(0,o.kt)("li",{parentName:"ul"},"then\u51fd\u6570\u4e2d\u8fd4\u56de\u65b0\u7684promise\u540e\uff0c\u4e0b\u9762\u63a5\u7740\u7684then\u3001catch\u4f1a\u8ddf\u7740\u65b0\u7684promise\u7684\u72b6\u6001\u8d70"),(0,o.kt)("li",{parentName:"ul"},"\u591a\u4e2athen\u51fd\u6570\u5728promise\u7684\u72b6\u6001\u8f6c\u4e3afulfilled\u4e4b\u540e\u4f1a\u4f9d\u6b21\u5f02\u6b65\u6267\u884c")),(0,o.kt)("h2",{id:"\u6e90\u7801"},"\u6e90\u7801"),(0,o.kt)("p",null,"executor\u7684\u9519\u8bef\u6355\u83b7\u6ca1\u6709\u5904\u7406"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'PENDING = "pending";\nFULFILLED = "fulfilled";\nREJECTED = "rejected";\n\nclass MyPromise {\n  state = PENDING;\n  result = void 0;\n  _resolveArr = [];\n  _rejectedArr = [];\n  constructor(executor) {\n    const resolve = (value) => {\n      if (this.state === PENDING) {\n        this.state = FULFILLED;\n        this.result = value;\n        this._resolveArr.forEach((func) => func());\n      }\n    };\n\n    const reject = (reason) => {\n      if (this.state === PENDING) {\n        this.state = REJECTED;\n        this.result = reason;\n        this._rejectedArr.forEach((func) => func());\n      }\n    };\n\n    executor(resolve, reject);\n  }\n\n  _handleSettledFunc(promise, x, resolve, reject) {\n    // \u68c0\u6d4b\u5faa\u73af\u8c03\u7528\n    if (x === promise) {\n      reject(new TypeError("Chaining cycle detected for promise #<Promise>"));\n    }\n\n    // then\u4e2d\u8fd4\u56de\u65b0\u7684promise\u65f6\u4f7f\u7528\u65b0promise\u72b6\u6001\u3002x\u4e3a\u5047\u503c\u65f6\u5ffd\u7565.then\u7684\u5224\u65ad\n    if (x && (typeof x === "object" || typeof x === "function")) {\n      let done = false;\n      // \u6355\u83b7x.then\u53cathen.call\u7684\u62a5\u9519\n      try {\n        const then = x.then;\n        if (typeof then === "function") {\n          then.call(\n            x,\n            (y) => {\n              if (done) {\n                return;\n              }\n              done = true;\n              this._handleSettledFunc(promise, y, resolve, reject);\n            },\n            (r) => {\n              if (done) {\n                return;\n              }\n              done = true;\n              reject(r);\n            }\n          );\n        } else { // \u6ca1\u6709\u62a5\u9519\u76f4\u63a5resolve\n          resolve(x);\n        }\n      } catch (e) {\n        if (done) {\n          return;\n        }\n        done = true;\n        reject(e);\n      }\n    } else {\n      resolve(x);\n    }\n  }\n\n  /**\n   * \u8fd4\u56de\u4e00\u4e2apromise\u5bf9\u8c61\n   * @param {function} onFulfilled resolve\u540e\u9700\u8981\u6267\u884c\u7684\u51fd\u6570\n   * @param {function} onRejected reject\u540e\u9700\u8981\u6267\u884c\u7684\u51fd\u6570\n   * @returns\n   */\n  then(onFulfilled, onRejected) {\n    const promise = new MyPromise((resolve, reject) => {\n      onFulfilled =\n        typeof onFulfilled === "function" ? onFulfilled : (value) => value;\n      onRejected =\n        typeof onRejected === "function"\n          ? onRejected\n          : (reason) => {\n              throw reason;\n            };\n\n      const _handleFunc = (handleFunc) => {\n        // \u53ea\u80fd\u5728\u8fd9\u4f7f\u7528setTimeout\uff0c\u5426\u5219promise\u53d8\u91cf\u4e0d\u80fd\u4f20\u9012\uff0c\u62a5\u672a\u521d\u59cb\u5316\u7684\u9519\n        setTimeout(() => {\n          // \u6355\u83b7handleFunc(this.result)\u4e2d\u7684\u62a5\u9519\n          try {\n            this._handleSettledFunc(\n              promise,\n              handleFunc(this.result),\n              resolve,\n              reject\n            );\n          } catch (error) {\n            reject(error);\n          }\n        });\n      };\n      // \u8fd4\u56de\u7684\u51fd\u6570\u4f1a\u88ab\u5f02\u6b65\u8c03\u7528\n      if (this.state === FULFILLED) {\n        _handleFunc(onFulfilled);\n      } else if (this.state === REJECTED) {\n        _handleFunc(onRejected);\n      } else {\n        // \u6570\u7ec4\u5f62\u5f0f\u4fdd\u5b58onFulfilled\u3001onRejected\u51fd\u6570\n        this._resolveArr.push(() => _handleFunc(onFulfilled));\n        this._rejectedArr.push(() => _handleFunc(onRejected));\n      }\n    });\n    return promise;\n  }\n}\n\nMyPromise.defer = MyPromise.deferred = function () {\n  let dfd = {};\n  dfd.promise = new MyPromise((resolve, reject) => {\n    dfd.resolve = resolve;\n    dfd.reject = reject;\n  });\n  return dfd;\n};\nmodule.exports = MyPromise;\n')),(0,o.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://promisesaplus.com/"},"https://promisesaplus.com/")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/lhx9527/p/14158460.html"},"promises-aplus-tests \u6d4b\u8bd5\u624b\u5199promise\u8fc7\u7a0b - 365/24/60 - \u535a\u5ba2\u56ed")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6844903796129136654"},"https://juejin.cn/post/6844903796129136654")))}m.isMDXComponent=!0}}]);