"use strict";(self.webpackChunkblog_2=self.webpackChunkblog_2||[]).push([[4459],{78197:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>b,frontMatter:()=>o,metadata:()=>a,toc:()=>i});var d=s(11527),l=s(56213);const o={title:"VSCode\u4e2dNodejs\u4f7f\u7528babel\u8fd0\u884cES6\u6a21\u5757\u673a\u5236",toc_max_heading_level:6,tags:["nodejs"],last_update:{date:new Date("2021-10-15T00:00:00.000Z")}},t=void 0,a={id:"Nodejs/using-babel-by-nodejs-in-vscode/using-babel-by-nodejs-in-vscode",title:"VSCode\u4e2dNodejs\u4f7f\u7528babel\u8fd0\u884cES6\u6a21\u5757\u673a\u5236",description:"\u521d\u59cb\u5316node",source:"@site/docs/Nodejs/using-babel-by-nodejs-in-vscode/using-babel-by-nodejs-in-vscode.md",sourceDirName:"Nodejs/using-babel-by-nodejs-in-vscode",slug:"/Nodejs/using-babel-by-nodejs-in-vscode/",permalink:"/blog/docs/Nodejs/using-babel-by-nodejs-in-vscode/",draft:!1,unlisted:!1,tags:[{label:"nodejs",permalink:"/blog/docs/tags/nodejs"}],version:"current",lastUpdatedAt:1634256e3,formattedLastUpdatedAt:"2021\u5e7410\u670815\u65e5",frontMatter:{title:"VSCode\u4e2dNodejs\u4f7f\u7528babel\u8fd0\u884cES6\u6a21\u5757\u673a\u5236",toc_max_heading_level:6,tags:["nodejs"],last_update:{date:"2021-10-15T00:00:00.000Z"}},sidebar:"tutorialSidebar",previous:{title:"concurrently\u4f7f\u7528\u8bb0\u5f55",permalink:"/blog/docs/Nodejs/concurrently"},next:{title:"yarn\u5e38\u7528\u547d\u4ee4\u8bb0\u5f55",permalink:"/blog/docs/Nodejs/yarn-command-common"}},c={},i=[{value:"\u521d\u59cb\u5316node",id:"\u521d\u59cb\u5316node",level:2},{value:"\u5b89\u88c5babel\u6a21\u5757",id:"\u5b89\u88c5babel\u6a21\u5757",level:2},{value:"\u914d\u7f6ebabel\u6587\u4ef6",id:"\u914d\u7f6ebabel\u6587\u4ef6",level:2},{value:"\u65b0\u5efa\u6d4b\u8bd5\u6587\u4ef6",id:"\u65b0\u5efa\u6d4b\u8bd5\u6587\u4ef6",level:2},{value:"\u8fd0\u884c\u6d4b\u8bd5\u6587\u4ef6",id:"\u8fd0\u884c\u6d4b\u8bd5\u6587\u4ef6",level:2},{value:"\u6d4b\u8bd5\u7ed3\u679c",id:"\u6d4b\u8bd5\u7ed3\u679c",level:2}];function r(e){const n={code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h2,{id:"\u521d\u59cb\u5316node",children:"\u521d\u59cb\u5316node"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"npm init -y\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u5b89\u88c5babel\u6a21\u5757",children:"\u5b89\u88c5babel\u6a21\u5757"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"npm i @babel/cli @babel/core @babel/node @babel/preset-env\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u914d\u7f6ebabel\u6587\u4ef6",children:"\u914d\u7f6ebabel\u6587\u4ef6"}),"\n",(0,d.jsxs)(n.p,{children:["\u5982\u679c\u76ee\u5f55\u4e2d\u6ca1\u6709",(0,d.jsx)(n.code,{children:".babelrc"}),"\u6587\u4ef6\uff0c\u65b0\u5efa\u4e00\u4e2a",(0,d.jsx)(n.code,{children:".babelrc"}),"\u6587\u4ef6\u3002\u6587\u4ef6\u5185\u5bb9\u5982\u4e0b"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:'{\n\t"presets": [\n\t\t"@babel/preset-env"\n\t]\n}\n'})}),"\n",(0,d.jsx)(n.h2,{id:"\u65b0\u5efa\u6d4b\u8bd5\u6587\u4ef6",children:"\u65b0\u5efa\u6d4b\u8bd5\u6587\u4ef6"}),"\n",(0,d.jsxs)(n.p,{children:["\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a",(0,d.jsx)(n.code,{children:"test.js"}),"\u7684\u6587\u4ef6\u3002\u6587\u4ef6\u5185\u5bb9\u5982\u4e0b"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:'console.log("babel is ok.");\n'})}),"\n",(0,d.jsx)(n.h2,{id:"\u8fd0\u884c\u6d4b\u8bd5\u6587\u4ef6",children:"\u8fd0\u884c\u6d4b\u8bd5\u6587\u4ef6"}),"\n",(0,d.jsxs)(n.p,{children:["\u4f7f\u7528",(0,d.jsx)("kbd",{children:"Ctrl"})," + ",(0,d.jsx)("kbd",{children:"`"}),"\uff0c\u6253\u5f00\u63a7\u5236\u53f0\uff0c\u786e\u4fdd\u63a7\u5236\u53f0\u76ee\u5f55\u5728",(0,d.jsx)(n.code,{children:"test.js"}),"\u6240\u5728\u76ee\u5f55\uff0c\u8fd0\u884c\u547d\u4ee4",(0,d.jsx)(n.code,{children:"babel-node .\\test.js"})]}),"\n",(0,d.jsx)(n.h2,{id:"\u6d4b\u8bd5\u7ed3\u679c",children:"\u6d4b\u8bd5\u7ed3\u679c"}),"\n",(0,d.jsxs)(n.p,{children:["\u5982\u679c\u63a7\u5236\u53f0\u8f93\u51fa\u4e4b\u524d\u5728",(0,d.jsx)(n.code,{children:"test.js"}),"\u6587\u4ef6\u4e2d\u7684\u5185\u5bb9\uff0c\u8868\u793a\u73af\u5883\u642d\u5efa\u6210\u529f\u3002\u5373\n",(0,d.jsx)(n.img,{alt:"demo",src:s(8918).Z+"",width:"932",height:"132"})]})]})}function b(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(r,{...e})}):r(e)}},8918:(e,n,s)=>{s.d(n,{Z:()=>d});const d=s.p+"assets/images/demo-ca7ebb7c2d87a75c6da59a38f00ea363.png"},56213:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>t});var d=s(50959);const l={},o=d.createContext(l);function t(e){const n=d.useContext(o);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),d.createElement(o.Provider,{value:n},e.children)}}}]);