"use strict";(self.webpackChunkblog_2=self.webpackChunkblog_2||[]).push([[1099],{54335:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var s=t(11527),i=t(56213);const a={title:"canvas\u5b9e\u73b0\u9f20\u6807\u8ffd\u8e2a\u52a8\u753b\u601d\u8def\u603b\u7ed3",toc_max_heading_level:6,tags:["canvas"],last_update:{date:new Date("2022-01-04T00:00:00.000Z")}},l=void 0,c={id:"Canvas/canvas-mouse-trace/canvas-mouse-trace",title:"canvas\u5b9e\u73b0\u9f20\u6807\u8ffd\u8e2a\u52a8\u753b\u601d\u8def\u603b\u7ed3",description:"\u6548\u679c",source:"@site/docs/Canvas/canvas-mouse-trace/canvas-mouse-trace.md",sourceDirName:"Canvas/canvas-mouse-trace",slug:"/Canvas/canvas-mouse-trace/",permalink:"/blog/docs/Canvas/canvas-mouse-trace/",draft:!1,unlisted:!1,tags:[{label:"canvas",permalink:"/blog/docs/tags/canvas"}],version:"current",lastUpdatedAt:1641254400,formattedLastUpdatedAt:"2022\u5e741\u67084\u65e5",frontMatter:{title:"canvas\u5b9e\u73b0\u9f20\u6807\u8ffd\u8e2a\u52a8\u753b\u601d\u8def\u603b\u7ed3",toc_max_heading_level:6,tags:["canvas"],last_update:{date:"2022-01-04T00:00:00.000Z"}},sidebar:"tutorialSidebar",previous:{title:"canvas\u70b8\u70df\u82b1\u601d\u8def\u603b\u7ed3",permalink:"/blog/docs/Canvas/canvas-bomb-fireworks/"},next:{title:"canvas\u5b9e\u73b0\u7c92\u5b50\u80cc\u666f\u7279\u6548\u601d\u8def\u603b\u7ed3",permalink:"/blog/docs/Canvas/canvas-particle-background/"}},r={},o=[{value:"\u6548\u679c",id:"\u6548\u679c",level:3},{value:"\u6e90\u7801",id:"\u6e90\u7801",level:3},{value:"html",id:"html",level:4},{value:"js",id:"js",level:4},{value:"\u601d\u8def\u68b3\u7406",id:"\u601d\u8def\u68b3\u7406",level:3},{value:"\u4e3b\u8981\u6d41\u7a0b",id:"\u4e3b\u8981\u6d41\u7a0b",level:4},{value:"\u957f\u5c3e\u6548\u679c",id:"\u957f\u5c3e\u6548\u679c",level:4},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}];function h(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...n.components},{Details:a}=e;return a||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h3,{id:"\u6548\u679c",children:"\u6548\u679c"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"final",src:t(26423).Z+"",width:"1819",height:"1150"})}),"\n",(0,s.jsx)(e.h3,{id:"\u6e90\u7801",children:"\u6e90\u7801"}),"\n",(0,s.jsx)(e.h4,{id:"html",children:"html"}),"\n",(0,s.jsxs)(a,{children:[(0,s.jsx)("summary",{children:"\u70b9\u51fb\u67e5\u770b\u4ee3\u7801"}),(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>\u9f20\u6807\u8ffd\u8e2a\u52a8\u753b</title>\n    <style>\n      canvas {\n        margin: 50px auto;\n        display: block;\n        box-shadow: 0 0 10px rgb(0 0 0 / 50%);\n      }\n    </style>\n  </head>\n  <body onload="draw()">\n    <canvas width="800" height="500"></canvas>\n\n    <script src="./js/\u9f20\u6807\u8ffd\u8e2a\u52a8\u753b.js"><\/script>\n    <script>\n      let offsetX = 0\n      let offsetY = 0\n      let targetArr = []\n      function draw() {\n        const canvas = document.querySelector(\'canvas\')\n        const ctx = canvas.getContext(\'2d\')\n        canvas.onmousemove = function (e) {\n          offsetX = e.offsetX\n          offsetY = e.offsetY\n        }\n        targetArr = prepareLine(canvas.width / 2, canvas.height / 2)\n        startAnimation(ctx, canvas.width, canvas.height)\n      }\n      function prepareLine(startX, startY) {\n        const res = []\n        offsetX = startX\n        offsetY = startY\n        for (let i = 0; i < 100; i++) {\n          res.push(new Line(startX, startY))\n        }\n        return res\n      }\n\n      function startAnimation(ctx, width, height) {\n        requestAnimationFrame(() => startAnimation(ctx, width, height))\n        // \u900f\u660e\u5ea6\u63a7\u5236\u957f\u5c3e\u6548\u679c\u7684\u957f\u5ea6\n        ctx.fillStyle = \'rgba(0,0,0,0.05)\'\n        ctx.fillRect(0, 0, width, height)\n        targetArr.forEach((obj) => {\n          obj.draw(ctx, offsetX, offsetY)\n        })\n      }\n    <\/script>\n  </body>\n</html>\n'})})]}),"\n",(0,s.jsx)(e.h4,{id:"js",children:"js"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"\u9f20\u6807\u8ffd\u8e2a\u52a8\u753b.js"})}),"\n",(0,s.jsxs)(a,{children:[(0,s.jsx)("summary",{children:"\u70b9\u51fb\u67e5\u770b\u4ee3\u7801"}),(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'class Line {\n  constructor(startX, startY) {\n    this.startX = startX;\n\n    this.startY = startY;\n    // \u7ebf\u7684\u968f\u673a\u89d2\u5ea6\n    this.randomAngle = this._getRandomAngle();\n    // \u63a7\u5236\u8303\u56f4\n    this.maxLineLength = 150;\n    // \u63a7\u5236\u7c97\u7ec6\n    this.lineWidth = 4;\n    // \u89d2\u5ea6\u6539\u53d8\u7684\u9891\u7387\uff08\u8f6c\u901f\uff09\n    this.angleRate = 0.02;\n    // \u7531maxLineLength\u800c\u6765\uff0c\u63a7\u5236\u8303\u56f4\n    this.lineLength = this._getRandomLength();\n    this.lineColor = this._getRandomColor();\n  }\n\n  setMaxLineLength(length) {\n    this.maxLineLength = length;\n  }\n\n  setLineWidth(width) {\n    this.lineWidth = width;\n  }\n\n  draw(ctx, offsetX, offsetY) {\n    ctx.save();\n    const { lineW, lineH } = this._computeLocationData();\n    ctx.lineWidth = this.lineWidth;\n    ctx.strokeStyle = this.lineColor;\n    ctx.beginPath();\n    // \u4e0a\u4e00\u4e2a\u70b9\u7684\u4f4d\u7f6e\n    ctx.moveTo(this.startX, this.startY);\n    // \u8ddd\u79bb\u9f20\u6807\u4f4d\u7f6e\u7684x\u5750\u6807\n    this.startX = offsetX + lineW;\n    // \u8ddd\u79bb\u9f20\u6807\u4f4d\u7f6e\u7684y\u5750\u6807\n    this.startY = offsetY + lineH;\n    // \u4ece\u4e0a\u4e00\u4e2a\u70b9\u7684\u4f4d\u7f6e\u753b\u5230\u4e0b\u4e00\u4e2a\u70b9\u7684\u4f4d\u7f6e(\u89d2\u5ea6\u65b9\u9762\u4e2d\u95f4\u76f8\u5deethis.angleRate\u5ea6)\n    ctx.lineTo(this.startX, this.startY);\n    ctx.stroke();\n    ctx.closePath();\n    ctx.restore();\n  }\n\n  _computeLocationData() {\n    this.randomAngle += this.angleRate;\n    return {\n      lineW: Math.cos(this.randomAngle) * this.lineLength, // \u7ebf\u7684\u968f\u673a\u957f\u5ea6\uff08x\u5750\u6807\uff09\n      lineH: Math.sin(this.randomAngle) * this.lineLength, // \u7ebf\u7684\u968f\u673a\u9ad8\u5ea6\uff08y\u5750\u6807\uff09\n    };\n  }\n\n  _getRandomAngle() {\n    return Math.random() * Math.PI * 2;\n  }\n\n  _getRandomLength() {\n    return Math.random() * this.maxLineLength;\n  }\n\n  _getRandomColor() {\n    const s = "0123456789ABCDEF";\n    let c = "#";\n    for (let i = 0; i < 6; i++) {\n      c += s[Math.ceil(Math.random() * 15)];\n    }\n    return c;\n  }\n}\n'})})]}),"\n",(0,s.jsx)(e.h3,{id:"\u601d\u8def\u68b3\u7406",children:"\u601d\u8def\u68b3\u7406"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\u6240\u6709\u7684\u7ebf\u90fd\u6709\u76f8\u540c\u7684\u8868\u73b0\u5f62\u5f0f\uff0c\u53ef\u4ee5\u62bd\u8c61\u4e3a\u4e00\u4e2a",(0,s.jsx)(e.code,{children:"Line"}),"\u7c7b","\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"\u6bcf\u6761\u7ebf\u7684\u957f\u5ea6\u3001\u989c\u8272\u90fd\u662f\u6052\u5b9a\u7684\uff0c\u79fb\u52a8\u8fc7\u7a0b\u4e2d\u6bcf\u6761\u7ebf\u90fd\u6709\u957f\u5c3e\u6548\u679c"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u7ebf\u7684\u79fb\u52a8\u4f9d\u8d56\u4e8e\u9f20\u6807\u7684\u4f4d\u7f6e","\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"\u9f20\u6807\u79fb\u52a8\uff0c\u6bcf\u6761\u7ebf\u90fd\u4f1a\u8ddf\u7740\u52a8"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h4,{id:"\u4e3b\u8981\u6d41\u7a0b",children:"\u4e3b\u8981\u6d41\u7a0b"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"\u521d\u59cb\u6240\u6709\u7ebf\u7684\u8d77\u70b9\u662f\u753b\u5e03\u4e2d\u95f4\uff0c\u6bcf\u6761\u7ebf\u957f\u3001\u989c\u8272\u90fd\u662f\u968f\u673a\u8ba1\u7b97\u7684"}),"\n",(0,s.jsx)(e.li,{children:"\u51c6\u5907\u7ebf\u65f6\uff0c\u662f\u4ece\u753b\u5e03\u4e2d\u5fc3\u5411\u5916\u6839\u636e\u968f\u673a\u8ba1\u7b97\u7684\u89d2\u5ea6\u3001\u7ebf\u957f\u5f00\u59cb\u753b\u7ebf\uff08\u8ba1\u7b97\u65b9\u5f0f\u53c2\u8003\u6b65\u9aa44\uff09"}),"\n",(0,s.jsx)(e.li,{children:"\u52a8\u753b\u5f00\u59cb\u540e\uff0c\u7ebf\u4ee5\u4e0a\u4e00\u6b21\u7684\u7ec8\u70b9\u4e3a\u8d77\u70b9\u5f00\u59cb\u7ed8\u5236\u65b0\u7ebf"}),"\n",(0,s.jsxs)(e.li,{children:["\u65b0\u7ebf\u7684\u4f4d\u7f6e","\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"\u4f9d\u8d56\u4e8e\u9f20\u6807\u4f4d\u7f6e"}),"\n",(0,s.jsx)(e.li,{children:"\u8ddd\u79bb\u9f20\u6807\u4f4d\u7f6e\u7684\u957f\u5ea6\u4f9d\u8d56\u4e8e\u4e4b\u524d\u968f\u673a\u8ba1\u7b97\u7684\u7ebf\u957f\u3002\u5e94\u8be5\u662f\uff1a\u9f20\u6807\u4f4d\u7f6e + \u7ebf\u957f"}),"\n",(0,s.jsxs)(e.li,{children:["\u56e0\u4e3a\u6bcf\u6761\u7ebf\u4f1a\u6709\u65cb\u8f6c\u7684\u6548\u679c\uff0c\u6240\u6709\u8be5\u4f4d\u7f6e\u5e94\u8be5\u6709\u4e00\u5b9a\u7684\u89d2\u5ea6\u53d8\u5316\uff0c\u5426\u5219\u5b9e\u73b0\u4e0d\u4e86\u7ebf\u65cb\u8f6c\u7684\u6548\u679c","\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\u60f3\u8c61\u4e00\u4e0b\u5750\u6807\u7cfb\u4e0a\u534a\u5f84\u4e3a",(0,s.jsx)(e.code,{children:"r"}),"\u7684\u5706"]}),"\n",(0,s.jsxs)(e.li,{children:["\u4ece\u5706\u5fc3\u5411\u5916\u62c9\u4e00\u6761\u7ebf\uff0c\u4e0e\u5706\u4ea4\u4e8eA\u70b9(x, y)\uff0c\u89d2\u5ea6\u4e3a\u03b8","\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\u7531\u4e09\u89d2\u51fd\u6570\uff0c\u53ef\u4ee5\u77e5\u9053\uff0c",(0,s.jsx)(e.code,{children:"x = r * cos\u03b8"}),"\uff0c",(0,s.jsx)(e.code,{children:"y = r * sin\u03b8"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u89d2\u5ea6\u03b8\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u5bf9\u5e94\u7684",(0,s.jsx)(e.code,{children:"x"}),"\u3001",(0,s.jsx)(e.code,{children:"y"}),"\u4e5f\u4f1a\u53d1\u751f\u76f8\u5e94\u7684\u53d8\u5316"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u5f53\u89d2\u5ea6\u53d8\u5316\u65f6\uff0c\u65b0\u7ebf\u7684\u4f4d\u7f6e\u5e94\u8be5\u662f","\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"x = \u9f20\u6807\u4f4d\u7f6eX + \u7ebf\u957f * cos\u03b8"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"y = \u9f20\u6807\u4f4d\u7f6eY + \u7ebf\u957f * sin\u03b8"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"\u52a8\u753b\u8fc7\u7a0b\u4e2d\u5faa\u73af\u6b65\u9aa43\u3001\u6b65\u9aa44"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"axis",src:t(39496).Z+"",width:"622",height:"432"})}),"\n",(0,s.jsx)(e.h4,{id:"\u957f\u5c3e\u6548\u679c",children:"\u957f\u5c3e\u6548\u679c"}),"\n",(0,s.jsxs)(e.p,{children:["\u5c06\u6e05\u9664\u753b\u5e03\u7684\u4ee3\u7801",(0,s.jsx)(e.code,{children:" ctx.clearRect(0, 0, canvas.width, canvas.heigth)"})]}),"\n",(0,s.jsx)(e.p,{children:"\u6362\u4e3a\u4e0b\u9762\u7684\u4ee3\u7801\uff0c\u8ba9\u5176\u91cd\u590d\u8986\u76d6\u4e4b\u524d\u7684\u6837\u5f0f\uff0c\u8fbe\u5230\u957f\u5c3e\u6548\u679c"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'ctx.fillStyle = "rgba(0,0,0,0.05)";\nctx.fillRect(0, 0, canvas.width, canvas.heigth);\n'})}),"\n",(0,s.jsx)(e.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Basic_animations",children:"https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Basic_animations"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Advanced_animations",children:"https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Advanced_animations"})})]})}function d(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},39496:(n,e,t)=>{t.d(e,{Z:()=>s});const s=t.p+"assets/images/axis-5cdedfd03e8d8595262282894ca91742.png"},26423:(n,e,t)=>{t.d(e,{Z:()=>s});const s=t.p+"assets/images/final-ece594252e17b5f192f69a9a3fdb26e1.gif"},56213:(n,e,t)=>{t.d(e,{Z:()=>c,a:()=>l});var s=t(50959);const i={},a=s.createContext(i);function l(n){const e=s.useContext(a);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),s.createElement(a.Provider,{value:e},n.children)}}}]);