"use strict";(self.webpackChunkblog_2=self.webpackChunkblog_2||[]).push([[54],{55817:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var s=l(11527),d=l(56213);const i={title:"\u900f\u8fc7performance\u63a2\u7a76js\u64cd\u4f5cdom\u6837\u5f0f\u65f6\u6d4f\u89c8\u5668\u4f1a\u505a\u4ec0\u4e48\uff1f",toc_max_heading_level:6,tags:["devtools"],last_update:{date:new Date("2021-12-04T00:00:00.000Z")}},c=void 0,r={id:"ChromeDevTool/what-will-do-when-js-handle-dom-in-performance/what-will-do-when-js-handle-dom-in-performance",title:"\u900f\u8fc7performance\u63a2\u7a76js\u64cd\u4f5cdom\u6837\u5f0f\u65f6\u6d4f\u89c8\u5668\u4f1a\u505a\u4ec0\u4e48\uff1f",description:"\u6d4f\u89c8\u5668\u5bf9\u56de\u6d41(\u91cd\u6392)\u3001\u91cd\u7ed8\u7684\u4f18\u5316\u7b56\u7565",source:"@site/docs/ChromeDevTool/what-will-do-when-js-handle-dom-in-performance/what-will-do-when-js-handle-dom-in-performance.md",sourceDirName:"ChromeDevTool/what-will-do-when-js-handle-dom-in-performance",slug:"/ChromeDevTool/what-will-do-when-js-handle-dom-in-performance/",permalink:"/blog/docs/ChromeDevTool/what-will-do-when-js-handle-dom-in-performance/",draft:!1,unlisted:!1,tags:[{label:"devtools",permalink:"/blog/docs/tags/devtools"}],version:"current",lastUpdatedAt:1638576e3,formattedLastUpdatedAt:"2021\u5e7412\u67084\u65e5",frontMatter:{title:"\u900f\u8fc7performance\u63a2\u7a76js\u64cd\u4f5cdom\u6837\u5f0f\u65f6\u6d4f\u89c8\u5668\u4f1a\u505a\u4ec0\u4e48\uff1f",toc_max_heading_level:6,tags:["devtools"],last_update:{date:"2021-12-04T00:00:00.000Z"}},sidebar:"tutorialSidebar",previous:{title:"canvas\u5b9e\u73b0\u7684\u592a\u9633\u7cfb\u52a8\u753b\u601d\u8def\u603b\u7ed3",permalink:"/blog/docs/Canvas/summary-canvas-solar/"},next:{title:"\u57fa\u4e8ed3\u7684\u5e26\u8f74\u7684\u67f1\u7ebf\u56fe",permalink:"/blog/docs/D3/bar-graph-of-d3/"}},t={},o=[{value:"\u6d4f\u89c8\u5668\u5bf9\u56de\u6d41(\u91cd\u6392)\u3001\u91cd\u7ed8\u7684\u4f18\u5316\u7b56\u7565",id:"\u6d4f\u89c8\u5668\u5bf9\u56de\u6d41\u91cd\u6392\u91cd\u7ed8\u7684\u4f18\u5316\u7b56\u7565",level:2},{value:"\u201c\u4f18\u5316\u961f\u5217\u201d",id:"\u4f18\u5316\u961f\u5217",level:3},{value:"\u6570\u636e\u7f13\u5b58",id:"\u6570\u636e\u7f13\u5b58",level:3},{value:"\u6d4b\u8bd5\u73af\u5883",id:"\u6d4b\u8bd5\u73af\u5883",level:2},{value:"\u6d4b\u8bd5\u4ee3\u7801",id:"\u6d4b\u8bd5\u4ee3\u7801",level:2},{value:"\u8bbe\u7f6e\u8282\u70b9\u7684style\u65f6\u6d4f\u89c8\u5668\u7684\u591a\u79cd\u5904\u7406\u60c5\u51b5",id:"\u8bbe\u7f6e\u8282\u70b9\u7684style\u65f6\u6d4f\u89c8\u5668\u7684\u591a\u79cd\u5904\u7406\u60c5\u51b5",level:2},{value:"\u6d4f\u89c8\u5668\u5728js\u6267\u884c\u671f\u95f4\u4ec0\u4e48\u90fd\u4e0d\u505a",id:"\u6d4f\u89c8\u5668\u5728js\u6267\u884c\u671f\u95f4\u4ec0\u4e48\u90fd\u4e0d\u505a",level:3},{value:"js\u6267\u884c\u4e4b\u540e\u8fdb\u884c\u6837\u5f0f\u8ba1\u7b97\u3001\u66f4\u65b0\u5206\u5c42\u6811\u3001\u7ed8\u5236\u3001\u5408\u6210",id:"js\u6267\u884c\u4e4b\u540e\u8fdb\u884c\u6837\u5f0f\u8ba1\u7b97\u66f4\u65b0\u5206\u5c42\u6811\u7ed8\u5236\u5408\u6210",level:4},{value:"\u6d4b\u8bd5\u60c5\u51b5",id:"\u6d4b\u8bd5\u60c5\u51b5",level:5},{value:"\u70b9\u51fb\u4e8b\u4ef6\u4e2d\u6ca1\u6709\u4ee3\u7801",id:"\u70b9\u51fb\u4e8b\u4ef6\u4e2d\u6ca1\u6709\u4ee3\u7801",level:6},{value:"\u8bbe\u7f6e\u65e0\u5173\u5143\u7d20\u51e0\u4f55\uff08\u4f4d\u7f6e\u3001\u5c3a\u5bf8\u7b49\uff09\u7684\u5c5e\u6027",id:"\u8bbe\u7f6e\u65e0\u5173\u5143\u7d20\u51e0\u4f55\u4f4d\u7f6e\u5c3a\u5bf8\u7b49\u7684\u5c5e\u6027",level:6},{value:"\u8bbe\u7f6e\u65e0\u5173\u5143\u7d20\u51e0\u4f55\uff08\u4f4d\u7f6e\u3001\u5c3a\u5bf8\u7b49\uff09\u7684\u5c5e\u6027\u5e76\u8bfb\u53d6\u8be5\u5143\u7d20\u7684\u4e00\u4e9b\u6837\u5f0f\u5c5e\u6027",id:"\u8bbe\u7f6e\u65e0\u5173\u5143\u7d20\u51e0\u4f55\u4f4d\u7f6e\u5c3a\u5bf8\u7b49\u7684\u5c5e\u6027\u5e76\u8bfb\u53d6\u8be5\u5143\u7d20\u7684\u4e00\u4e9b\u6837\u5f0f\u5c5e\u6027",level:6},{value:"performance\u8bb0\u5f55",id:"performance\u8bb0\u5f55",level:5},{value:"js\u6267\u884c\u4e4b\u540e\u8fdb\u884c\u6837\u5f0f\u8ba1\u7b97\u3001\u5e03\u5c40\u3001\u66f4\u65b0\u5206\u5c42\u6811\u3001\u7ed8\u5236\u3001\u5408\u6210",id:"js\u6267\u884c\u4e4b\u540e\u8fdb\u884c\u6837\u5f0f\u8ba1\u7b97\u5e03\u5c40\u66f4\u65b0\u5206\u5c42\u6811\u7ed8\u5236\u5408\u6210",level:4},{value:"\u6d4b\u8bd5\u60c5\u51b5",id:"\u6d4b\u8bd5\u60c5\u51b5-1",level:5},{value:"\u8bbe\u7f6e\u6709\u5173\u5143\u7d20\u51e0\u4f55\uff08\u4f4d\u7f6e\u3001\u5c3a\u5bf8\u7b49\uff09\u7684\u5c5e\u6027",id:"\u8bbe\u7f6e\u6709\u5173\u5143\u7d20\u51e0\u4f55\u4f4d\u7f6e\u5c3a\u5bf8\u7b49\u7684\u5c5e\u6027",level:6},{value:"\u8bbe\u7f6e\u6709\u5173\u5143\u7d20\u51e0\u4f55\uff08\u4f4d\u7f6e\u3001\u5c3a\u5bf8\u7b49\uff09\u7684\u5c5e\u6027\u5e76\u8bfb\u53d6\u8be5\u5143\u7d20\u7684\u975e\u201c\u654f\u611f\u201d\u6837\u5f0f\u5c5e\u6027",id:"\u8bbe\u7f6e\u6709\u5173\u5143\u7d20\u51e0\u4f55\u4f4d\u7f6e\u5c3a\u5bf8\u7b49\u7684\u5c5e\u6027\u5e76\u8bfb\u53d6\u8be5\u5143\u7d20\u7684\u975e\u654f\u611f\u6837\u5f0f\u5c5e\u6027",level:6},{value:"performance\u8bb0\u5f55",id:"performance\u8bb0\u5f55-1",level:5},{value:"\u6d4f\u89c8\u5668\u5728js\u6267\u884c\u671f\u95f4\u8fdb\u884c\u6837\u5f0f\u8ba1\u7b97",id:"\u6d4f\u89c8\u5668\u5728js\u6267\u884c\u671f\u95f4\u8fdb\u884c\u6837\u5f0f\u8ba1\u7b97",level:3},{value:"\u8bfb\u53d6\u201c\u654f\u611f\u201d\u5c5e\u6027",id:"\u8bfb\u53d6\u654f\u611f\u5c5e\u6027",level:4},{value:"performance\u8bb0\u5f55",id:"performance\u8bb0\u5f55-2",level:5},{value:"\u8bfb\u53d6\u201c\u654f\u611f\u201d\u5c5e\u6027\u540e\u5e76\u8bbe\u7f6e\u65e0\u5173\u8282\u70b9\u51e0\u4f55\u4f4d\u7f6e\u7684\u6837\u5f0f",id:"\u8bfb\u53d6\u654f\u611f\u5c5e\u6027\u540e\u5e76\u8bbe\u7f6e\u65e0\u5173\u8282\u70b9\u51e0\u4f55\u4f4d\u7f6e\u7684\u6837\u5f0f",level:4},{value:"performance\u8bb0\u5f55",id:"performance\u8bb0\u5f55-3",level:5},{value:"\u8bfb\u53d6\u201c\u654f\u611f\u201d\u5c5e\u6027\u540e\u5e76\u8bbe\u7f6e\u6709\u5173\u8282\u70b9\u51e0\u4f55\u4f4d\u7f6e\u7684\u6837\u5f0f",id:"\u8bfb\u53d6\u654f\u611f\u5c5e\u6027\u540e\u5e76\u8bbe\u7f6e\u6709\u5173\u8282\u70b9\u51e0\u4f55\u4f4d\u7f6e\u7684\u6837\u5f0f",level:4},{value:"performance\u8bb0\u5f55",id:"performance\u8bb0\u5f55-4",level:5},{value:"\u8bfb\u53d6\u201c\u654f\u611f\u201d\u5c5e\u6027\u540e\u5e76\u8bbe\u7f6e\u65e0\u5173\u8282\u70b9\u51e0\u4f55\u4f4d\u7f6e\u7684\u6837\u5f0f\uff0c\u4e4b\u540e\u518d\u6b21\u8bfb\u53d6\u201c\u654f\u611f\u201d\u5c5e\u6027",id:"\u8bfb\u53d6\u654f\u611f\u5c5e\u6027\u540e\u5e76\u8bbe\u7f6e\u65e0\u5173\u8282\u70b9\u51e0\u4f55\u4f4d\u7f6e\u7684\u6837\u5f0f\u4e4b\u540e\u518d\u6b21\u8bfb\u53d6\u654f\u611f\u5c5e\u6027",level:4},{value:"performane\u8bb0\u5f55",id:"performane\u8bb0\u5f55",level:5},{value:"\u8bfb\u53d6\u201c\u654f\u611f\u201d\u5c5e\u6027\u540e\u5e76\u8bbe\u7f6e\u6709\u5173\u8282\u70b9\u51e0\u4f55\u4f4d\u7f6e\u7684\u6837\u5f0f\uff0c\u4e4b\u540e\u518d\u6b21\u8bfb\u53d6\u201c\u654f\u611f\u201d\u5c5e\u6027",id:"\u8bfb\u53d6\u654f\u611f\u5c5e\u6027\u540e\u5e76\u8bbe\u7f6e\u6709\u5173\u8282\u70b9\u51e0\u4f55\u4f4d\u7f6e\u7684\u6837\u5f0f\u4e4b\u540e\u518d\u6b21\u8bfb\u53d6\u654f\u611f\u5c5e\u6027",level:4},{value:"performane\u8bb0\u5f55",id:"performane\u8bb0\u5f55-1",level:5},{value:"\u4e0e\u8282\u70b9\u7684class\u76f8\u5173\u7684\u6d4f\u89c8\u5668\u5904\u7406\u64cd\u4f5c",id:"\u4e0e\u8282\u70b9\u7684class\u76f8\u5173\u7684\u6d4f\u89c8\u5668\u5904\u7406\u64cd\u4f5c",level:2},{value:"performance\u8bb0\u5f55",id:"performance\u8bb0\u5f55-5",level:3},{value:"\u5173\u4e8ewindow.getComputedStyle()",id:"\u5173\u4e8ewindowgetcomputedstyle",level:2},{value:"\u4f18\u5316\u56de\u6d41\u3001\u91cd\u7ed8",id:"\u4f18\u5316\u56de\u6d41\u91cd\u7ed8",level:2},{value:"\u6765\u6e90",id:"\u6765\u6e90",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,d.a)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u6d4f\u89c8\u5668\u5bf9\u56de\u6d41\u91cd\u6392\u91cd\u7ed8\u7684\u4f18\u5316\u7b56\u7565",children:"\u6d4f\u89c8\u5668\u5bf9\u56de\u6d41(\u91cd\u6392)\u3001\u91cd\u7ed8\u7684\u4f18\u5316\u7b56\u7565"}),"\n",(0,s.jsx)(n.h3,{id:"\u4f18\u5316\u961f\u5217",children:"\u201c\u4f18\u5316\u961f\u5217\u201d"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"opti-queue",src:l(84086).Z+"",width:"1340",height:"905"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u53ea\u662f\u8bfb\u53d6\u201c\u654f\u611f\u201d\u5c5e\u6027\uff0c\u6ca1\u6709\u5bf9\u8282\u70b9\u8fdb\u884c\u51e0\u4f55\u6539\u53d8\uff0cjs\u6267\u884c\u671f\u95f4\u4ec5\u4f1a\u8fdb\u884c\u6837\u5f0f\u8ba1\u7b97\uff0c\u4e0d\u4f1a\u5f3a\u5236\u5e03\u5c40\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u6570\u636e\u7f13\u5b58",children:"\u6570\u636e\u7f13\u5b58"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"data-cache",src:l(41975).Z+"",width:"1621",height:"716"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u6539\u53d8\u8282\u70b9\u7684\u51e0\u4f55\u4f4d\u7f6e\uff0c\u4f1a\u5bfc\u81f4\u7f13\u5b58\u5931\u6548"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"no-cache",src:l(59026).Z+"",width:"1550",height:"1004"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6d4b\u8bd5\u73af\u5883",children:"\u6d4b\u8bd5\u73af\u5883"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Chrome \u7248\u672c 96.0.4664.45\uff08\u6b63\u5f0f\u7248\u672c\uff09 \uff0864 \u4f4d\uff09"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6d4b\u8bd5\u4ee3\u7801",children:"\u6d4b\u8bd5\u4ee3\u7801"}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"\u70b9\u51fb\u67e5\u770b\u4ee3\u7801"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'\n\n\n    <meta charset="UTF-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Document</title>\n\n\n    <div id="div">\n      <div></div>\n    </div>\n    <button>\u70b9\u51fb\u6d4b\u8bd5</button>\n    <script>\n      const div = document.getElementById(\'div\');\n      const btn = document.querySelector(\'button\');\n\n      btn.onclick = () => {\n        // do something\n      };\n    <\/script>\n\n\n\n'})})]}),"\n",(0,s.jsx)(n.h2,{id:"\u8bbe\u7f6e\u8282\u70b9\u7684style\u65f6\u6d4f\u89c8\u5668\u7684\u591a\u79cd\u5904\u7406\u60c5\u51b5",children:"\u8bbe\u7f6e\u8282\u70b9\u7684style\u65f6\u6d4f\u89c8\u5668\u7684\u591a\u79cd\u5904\u7406\u60c5\u51b5"}),"\n",(0,s.jsxs)(n.p,{children:["\u4ec5\u89c2\u5bdf\u4ee3\u7801\u4e2d",(0,s.jsx)(n.code,{children:"btn"}),"\u70b9\u51fb\u4e8b\u4ef6\u9644\u8fd1\u76f8\u5173\u7684\u6d4f\u89c8\u5668\u5904\u7406"]}),"\n",(0,s.jsx)(n.h3,{id:"\u6d4f\u89c8\u5668\u5728js\u6267\u884c\u671f\u95f4\u4ec0\u4e48\u90fd\u4e0d\u505a",children:"\u6d4f\u89c8\u5668\u5728js\u6267\u884c\u671f\u95f4\u4ec0\u4e48\u90fd\u4e0d\u505a"}),"\n",(0,s.jsx)(n.h4,{id:"js\u6267\u884c\u4e4b\u540e\u8fdb\u884c\u6837\u5f0f\u8ba1\u7b97\u66f4\u65b0\u5206\u5c42\u6811\u7ed8\u5236\u5408\u6210",children:"js\u6267\u884c\u4e4b\u540e\u8fdb\u884c\u6837\u5f0f\u8ba1\u7b97\u3001\u66f4\u65b0\u5206\u5c42\u6811\u3001\u7ed8\u5236\u3001\u5408\u6210"}),"\n",(0,s.jsx)(n.h5,{id:"\u6d4b\u8bd5\u60c5\u51b5",children:"\u6d4b\u8bd5\u60c5\u51b5"}),"\n",(0,s.jsx)(n.h6,{id:"\u70b9\u51fb\u4e8b\u4ef6\u4e2d\u6ca1\u6709\u4ee3\u7801",children:"\u70b9\u51fb\u4e8b\u4ef6\u4e2d\u6ca1\u6709\u4ee3\u7801"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"btn.onclick = () => {\n  // do something\n};\n"})}),"\n",(0,s.jsx)(n.h6,{id:"\u8bbe\u7f6e\u65e0\u5173\u5143\u7d20\u51e0\u4f55\u4f4d\u7f6e\u5c3a\u5bf8\u7b49\u7684\u5c5e\u6027",children:"\u8bbe\u7f6e\u65e0\u5173\u5143\u7d20\u51e0\u4f55\uff08\u4f4d\u7f6e\u3001\u5c3a\u5bf8\u7b49\uff09\u7684\u5c5e\u6027"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'btn.onclick = () => {\n  div.style.color = "red";\n};\n'})}),"\n",(0,s.jsx)(n.h6,{id:"\u8bbe\u7f6e\u65e0\u5173\u5143\u7d20\u51e0\u4f55\u4f4d\u7f6e\u5c3a\u5bf8\u7b49\u7684\u5c5e\u6027\u5e76\u8bfb\u53d6\u8be5\u5143\u7d20\u7684\u4e00\u4e9b\u6837\u5f0f\u5c5e\u6027",children:"\u8bbe\u7f6e\u65e0\u5173\u5143\u7d20\u51e0\u4f55\uff08\u4f4d\u7f6e\u3001\u5c3a\u5bf8\u7b49\uff09\u7684\u5c5e\u6027\u5e76\u8bfb\u53d6\u8be5\u5143\u7d20\u7684\u4e00\u4e9b\u6837\u5f0f\u5c5e\u6027"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'btn.onclick = () => {\n  div.style.color = "red";\n  const { color, width, height } = div.style;\n};\n'})}),"\n",(0,s.jsx)(n.h5,{id:"performance\u8bb0\u5f55",children:"performance\u8bb0\u5f55"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"record1",src:l(4117).Z+"",width:"1025",height:"594"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"record2",src:l(96240).Z+"",width:"1040",height:"603"})}),"\n",(0,s.jsx)(n.h4,{id:"js\u6267\u884c\u4e4b\u540e\u8fdb\u884c\u6837\u5f0f\u8ba1\u7b97\u5e03\u5c40\u66f4\u65b0\u5206\u5c42\u6811\u7ed8\u5236\u5408\u6210",children:"js\u6267\u884c\u4e4b\u540e\u8fdb\u884c\u6837\u5f0f\u8ba1\u7b97\u3001\u5e03\u5c40\u3001\u66f4\u65b0\u5206\u5c42\u6811\u3001\u7ed8\u5236\u3001\u5408\u6210"}),"\n",(0,s.jsx)(n.p,{children:"\u6bd4\u4e0a\u4e00\u4e2a\u591a\u4e86\u4e00\u4e2a\u5e03\u5c40\u6b65\u9aa4"}),"\n",(0,s.jsx)(n.h5,{id:"\u6d4b\u8bd5\u60c5\u51b5-1",children:"\u6d4b\u8bd5\u60c5\u51b5"}),"\n",(0,s.jsx)(n.h6,{id:"\u8bbe\u7f6e\u6709\u5173\u5143\u7d20\u51e0\u4f55\u4f4d\u7f6e\u5c3a\u5bf8\u7b49\u7684\u5c5e\u6027",children:"\u8bbe\u7f6e\u6709\u5173\u5143\u7d20\u51e0\u4f55\uff08\u4f4d\u7f6e\u3001\u5c3a\u5bf8\u7b49\uff09\u7684\u5c5e\u6027"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'btn.onclick = () => {\n  div.style.height = "100px";\n};\n'})}),"\n",(0,s.jsx)(n.h6,{id:"\u8bbe\u7f6e\u6709\u5173\u5143\u7d20\u51e0\u4f55\u4f4d\u7f6e\u5c3a\u5bf8\u7b49\u7684\u5c5e\u6027\u5e76\u8bfb\u53d6\u8be5\u5143\u7d20\u7684\u975e\u654f\u611f\u6837\u5f0f\u5c5e\u6027",children:"\u8bbe\u7f6e\u6709\u5173\u5143\u7d20\u51e0\u4f55\uff08\u4f4d\u7f6e\u3001\u5c3a\u5bf8\u7b49\uff09\u7684\u5c5e\u6027\u5e76\u8bfb\u53d6\u8be5\u5143\u7d20\u7684\u975e\u201c\u654f\u611f\u201d\u6837\u5f0f\u5c5e\u6027"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'btn.onclick = () => {\n  div.style.height = "100px";\n  const { color, width, height } = div.style;\n};\n'})}),"\n",(0,s.jsx)(n.h5,{id:"performance\u8bb0\u5f55-1",children:"performance\u8bb0\u5f55"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"record3",src:l(46769).Z+"",width:"1076",height:"590"}),"\n",(0,s.jsx)(n.img,{alt:"record4",src:l(40321).Z+"",width:"1098",height:"614"})]}),"\n",(0,s.jsx)(n.h3,{id:"\u6d4f\u89c8\u5668\u5728js\u6267\u884c\u671f\u95f4\u8fdb\u884c\u6837\u5f0f\u8ba1\u7b97",children:"\u6d4f\u89c8\u5668\u5728js\u6267\u884c\u671f\u95f4\u8fdb\u884c\u6837\u5f0f\u8ba1\u7b97"}),"\n",(0,s.jsx)(n.p,{children:"\u6837\u5f0f\u8ba1\u7b97\u540e\uff0c\u5982\u679c\u6709\u65b0\u7684\u6837\u5f0f\u8bbe\u7f6e\uff0c\u4f1a\u5c06\u5176\u653e\u5230\u201c\u6e32\u67d3\u4f18\u5316\u961f\u5217\u201d\u4e2d"}),"\n",(0,s.jsx)(n.h4,{id:"\u8bfb\u53d6\u654f\u611f\u5c5e\u6027",children:"\u8bfb\u53d6\u201c\u654f\u611f\u201d\u5c5e\u6027"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"btn.onclick = () => {\n  const top = div.scrollTop,\n    width = div.clientWidth;\n};\n"})}),"\n",(0,s.jsx)(n.h5,{id:"performance\u8bb0\u5f55-2",children:"performance\u8bb0\u5f55"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"record5",src:l(93887).Z+"",width:"1404",height:"836"})}),"\n",(0,s.jsx)(n.h4,{id:"\u8bfb\u53d6\u654f\u611f\u5c5e\u6027\u540e\u5e76\u8bbe\u7f6e\u65e0\u5173\u8282\u70b9\u51e0\u4f55\u4f4d\u7f6e\u7684\u6837\u5f0f",children:"\u8bfb\u53d6\u201c\u654f\u611f\u201d\u5c5e\u6027\u540e\u5e76\u8bbe\u7f6e\u65e0\u5173\u8282\u70b9\u51e0\u4f55\u4f4d\u7f6e\u7684\u6837\u5f0f"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'btn.onclick = () => {\n  const top = div.scrollTop;\n  div.style.color = "red";\n  div.style.backgroundColor = "blue";\n};\n'})}),"\n",(0,s.jsx)(n.h5,{id:"performance\u8bb0\u5f55-3",children:"performance\u8bb0\u5f55"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"record6",src:l(40375).Z+"",width:"2085",height:"859"})}),"\n",(0,s.jsx)(n.h4,{id:"\u8bfb\u53d6\u654f\u611f\u5c5e\u6027\u540e\u5e76\u8bbe\u7f6e\u6709\u5173\u8282\u70b9\u51e0\u4f55\u4f4d\u7f6e\u7684\u6837\u5f0f",children:"\u8bfb\u53d6\u201c\u654f\u611f\u201d\u5c5e\u6027\u540e\u5e76\u8bbe\u7f6e\u6709\u5173\u8282\u70b9\u51e0\u4f55\u4f4d\u7f6e\u7684\u6837\u5f0f"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'btn.onclick = () => {\n  const top = div.scrollTop;\n  div.style.color = "red";\n  div.style.height = "100px";\n};\n'})}),"\n",(0,s.jsx)(n.h5,{id:"performance\u8bb0\u5f55-4",children:"performance\u8bb0\u5f55"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"record7",src:l(21495).Z+"",width:"1872",height:"845"})}),"\n",(0,s.jsx)(n.h4,{id:"\u8bfb\u53d6\u654f\u611f\u5c5e\u6027\u540e\u5e76\u8bbe\u7f6e\u65e0\u5173\u8282\u70b9\u51e0\u4f55\u4f4d\u7f6e\u7684\u6837\u5f0f\u4e4b\u540e\u518d\u6b21\u8bfb\u53d6\u654f\u611f\u5c5e\u6027",children:"\u8bfb\u53d6\u201c\u654f\u611f\u201d\u5c5e\u6027\u540e\u5e76\u8bbe\u7f6e\u65e0\u5173\u8282\u70b9\u51e0\u4f55\u4f4d\u7f6e\u7684\u6837\u5f0f\uff0c\u4e4b\u540e\u518d\u6b21\u8bfb\u53d6\u201c\u654f\u611f\u201d\u5c5e\u6027"}),"\n",(0,s.jsx)(n.p,{children:"\u6d4f\u89c8\u5668\u4f1a\u6267\u884c\u4e24\u6b21\u6837\u5f0f\u8ba1\u7b97"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'btn.onclick = () => {\n  const clientHeight = div.clientHeight;\n  div.style.color = "red";\n  const clientWidth = div.clientWidth;\n};\n'})}),"\n",(0,s.jsx)(n.h5,{id:"performane\u8bb0\u5f55",children:"performane\u8bb0\u5f55"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"record8",src:l(70522).Z+"",width:"2026",height:"872"})}),"\n",(0,s.jsx)(n.h4,{id:"\u8bfb\u53d6\u654f\u611f\u5c5e\u6027\u540e\u5e76\u8bbe\u7f6e\u6709\u5173\u8282\u70b9\u51e0\u4f55\u4f4d\u7f6e\u7684\u6837\u5f0f\u4e4b\u540e\u518d\u6b21\u8bfb\u53d6\u654f\u611f\u5c5e\u6027",children:"\u8bfb\u53d6\u201c\u654f\u611f\u201d\u5c5e\u6027\u540e\u5e76\u8bbe\u7f6e\u6709\u5173\u8282\u70b9\u51e0\u4f55\u4f4d\u7f6e\u7684\u6837\u5f0f\uff0c\u4e4b\u540e\u518d\u6b21\u8bfb\u53d6\u201c\u654f\u611f\u201d\u5c5e\u6027"}),"\n",(0,s.jsx)(n.p,{children:"\u6d4f\u89c8\u5668\u4f1a\u5728js\u6267\u884c\u671f\u95f4\u8fdb\u884c\u4e24\u6b21\u6837\u5f0f\u8ba1\u7b97\u5e76\u5f3a\u5236\u540c\u6b65\u5e03\u5c40\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'btn.onclick = () => {\n  const clientHeight = div.clientHeight;\n  div.style.height = "100px";\n  const clientWidth = div.clientWidth;\n};\n'})}),"\n",(0,s.jsx)(n.h5,{id:"performane\u8bb0\u5f55-1",children:"performane\u8bb0\u5f55"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"record9",src:l(50226).Z+"",width:"1993",height:"969"})}),"\n",(0,s.jsx)(n.h2,{id:"\u4e0e\u8282\u70b9\u7684class\u76f8\u5173\u7684\u6d4f\u89c8\u5668\u5904\u7406\u64cd\u4f5c",children:"\u4e0e\u8282\u70b9\u7684class\u76f8\u5173\u7684\u6d4f\u89c8\u5668\u5904\u7406\u64cd\u4f5c"}),"\n",(0,s.jsxs)(n.p,{children:["\u6d4f\u89c8\u5668\u5728js\u6267\u884c\u671f\u95f4\u4ec0\u4e48\u4e5f\u4e0d\u505a\u3002\u6240\u4ee5\u8fd9\u5c31\u662f\u7f51\u4e0a\u8bf4\u7684\u4f7f\u7528",(0,s.jsx)(n.code,{children:"class"}),"\u6837\u5f0f\u51cf\u5c11\u5bf9\u8282\u70b9",(0,s.jsx)(n.code,{children:"style"}),"\u7684\u64cd\u4f5c\uff1f"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-CSS",children:".style {\n    color: red;\n    height: 100px;\n}\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"btn.onclick = () => {\n  const className = div.className;\n  div.className = `style`;\n  // \u6216\u8005\u4e0b\u9762\u7684\u4ee3\u7801\n  /*\n    div.classList.add('style');\n    const className = div.classList.toString();\n    */\n};\n"})}),"\n",(0,s.jsx)(n.h3,{id:"performance\u8bb0\u5f55-5",children:"performance\u8bb0\u5f55"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"record10",src:l(91213).Z+"",width:"1444",height:"844"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5173\u4e8ewindowgetcomputedstyle",children:"\u5173\u4e8ewindow.getComputedStyle()"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"computed-style",src:l(74861).Z+"",width:"1656",height:"1189"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4f18\u5316\u56de\u6d41\u91cd\u7ed8",children:"\u4f18\u5316\u56de\u6d41\u3001\u91cd\u7ed8"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f51\u4e0a\u8bf4\u7684\u63a8\u8350\u4f7f\u7528class\u7c7b\u540d/cssText\u8bbe\u7f6e\u6837\u5f0f\u5c11\u7528style\u64cd\u4f5cdom\u53ef\u4ee5\u51cf\u5c11\u6d4f\u89c8\u5668\u7684\u4e00\u4e9b\u64cd\u4f5c\uff08\u6837\u5f0f\u8ba1\u7b97\u3001\u5f3a\u5236\u540c\u6b65\u5e03\u5c40\u7b49\uff09\uff0c\u51cf\u5c11\u6027\u80fd\u6d88\u8017"}),"\n",(0,s.jsx)(n.li,{children:"\u7f51\u4e0a\u8bf4\u7684\u64cd\u4f5cstyle\u65f6\uff0c\u8bfb\u5199\u5206\u79bb\uff0c\u5148\u8bfb\u540e\u5199\uff0c\u4e5f\u53ef\u4ee5\u51cf\u5c11\u4e00\u4e9b\u6837\u5f0f\u8ba1\u7b97\u7684\u6027\u80fd\u6d88\u8017"}),"\n",(0,s.jsxs)(n.li,{children:['"\u79bb\u7ebf"\u4fee\u6539dom',"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u4f7f\u7528",(0,s.jsx)(n.code,{children:"documentFragment"})]}),"\n",(0,s.jsx)(n.li,{children:"\u514b\u9686\u9700\u8981\u64cd\u4f5c\u7684\u8282\u70b9\uff0c\u64cd\u4f5cdom\u5b8c\u6210\u540e\uff0c\u518d\u66ff\u6362\u88ab\u514b\u9686\u7684\u8282\u70b9"}),"\n",(0,s.jsxs)(n.li,{children:["\u4f7f\u7528",(0,s.jsx)(n.code,{children:"display: none"}),"\u9690\u85cf\u8282\u70b9\uff0c\u64cd\u4f5cdom\u5b8c\u6210\u540e\uff0c\u518d\u663e\u793a\u8282\u70b9\u3002\u6700\u591a\u6709\u4e24\u6b21\u56de\u6d41\uff0c\u907f\u514d\u4e86\u53ef\u80fd\u7684\u66f4\u591a\u7684\u56de\u6d41\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u4f7f\u7528\u53d8\u91cf\u7f13\u5b58\u201c\u654f\u611f\u201d\u5c5e\u6027\uff08\u9664\u4e86getComputedStyle\uff0ccurrentStyle\uff09,",(0,s.jsx)(n.code,{children:"offsetWidth"}),"\u7b49\u7684\u503c\u662f\u6570\u5b57\uff0c\u6ca1\u6709\u5f15\u7528\u5173\u7cfb\uff0c\u53ef\u4ee5\u88ab\u5f53\u4f5c\u4e00\u4e2a\u65b0\u503c\u4f7f\u7528"]}),"\n",(0,s.jsx)(n.li,{children:"\u4f7f\u7528\u7edd\u5bf9\u5b9a\u4f4d\uff0c\u51cf\u5c11\u5176\u5bf9\u5176\u4ed6\u8282\u70b9\u7684\u5f71\u54cd"}),"\n",(0,s.jsx)(n.li,{children:"\u6ca1\u4e8b\u513f\u4e0d\u8981\u7528window.getComputedStyle()\u83b7\u53d6\u6837\u5f0f"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6765\u6e90",children:"\u6765\u6e90"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://www.phpied.com/rendering-repaint-reflowrelayout-restyle/",children:"https://www.phpied.com/rendering-repaint-reflowrelayout-restyle/"})," > ",(0,s.jsx)(n.a,{href:"https://dl.acm.org/doi/10.1145/1772690.1772741",children:"https://dl.acm.org/doi/10.1145/1772690.1772741"})," > ",(0,s.jsx)(n.a,{href:"https://yonatankra.com/layout-reflow/",children:"https://yonatankra.com/layout-reflow/"})," > ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/getComputedStyle",children:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/getComputedStyle"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},74861:(e,n,l)=>{l.d(n,{Z:()=>s});const s=l.p+"assets/images/computed-style-a5c7630060ce8644e60652123e5c9a47.png"},41975:(e,n,l)=>{l.d(n,{Z:()=>s});const s=l.p+"assets/images/date-cache-20cf7849b0b271ff1849305a9db49567.png"},59026:(e,n,l)=>{l.d(n,{Z:()=>s});const s=l.p+"assets/images/no-cache-498cf6ce251566be12ea410ff9ec8947.png"},84086:(e,n,l)=>{l.d(n,{Z:()=>s});const s=l.p+"assets/images/opti-queue-1ce3835b44e267c975e159ee73888f5d.png"},4117:(e,n,l)=>{l.d(n,{Z:()=>s});const s=l.p+"assets/images/record1-c8288bc3818ea4b39341c0dbee06eb51.png"},91213:(e,n,l)=>{l.d(n,{Z:()=>s});const s=l.p+"assets/images/record10-3eab3c16c7c4ef7ba6d2ee4f326fa3e6.png"},96240:(e,n,l)=>{l.d(n,{Z:()=>s});const s=l.p+"assets/images/record2-1dff97eb1e5c9a89e8ff055adcc0709c.png"},46769:(e,n,l)=>{l.d(n,{Z:()=>s});const s=l.p+"assets/images/record3-adaa62a66a3eb0a8ca7ea14928911f0c.png"},40321:(e,n,l)=>{l.d(n,{Z:()=>s});const s=l.p+"assets/images/record4-25a706cf2f31d9d26419ad3958a91338.png"},93887:(e,n,l)=>{l.d(n,{Z:()=>s});const s=l.p+"assets/images/record5-53270f4f1e0ef7b88c7e76c4ccd069d4.png"},40375:(e,n,l)=>{l.d(n,{Z:()=>s});const s=l.p+"assets/images/record6-7451b0d0b1c76dce7604bf4d3225c274.png"},21495:(e,n,l)=>{l.d(n,{Z:()=>s});const s=l.p+"assets/images/record7-787c670d0429d80d9d8b822f9887bddd.png"},70522:(e,n,l)=>{l.d(n,{Z:()=>s});const s=l.p+"assets/images/record8-b23282fda91cde556962a5f1974041ac.png"},50226:(e,n,l)=>{l.d(n,{Z:()=>s});const s=l.p+"assets/images/record9-be8afa40068ba8f2b92a8d9f7640aa94.png"},56213:(e,n,l)=>{l.d(n,{Z:()=>r,a:()=>c});var s=l(50959);const d={},i=s.createContext(d);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);