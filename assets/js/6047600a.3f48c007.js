"use strict";(self.webpackChunkblog_2=self.webpackChunkblog_2||[]).push([[1054],{58173:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var a=n(11527),d=n(56213);const s={title:"\u57fa\u4e8ed3\u7684\u5e26\u8f74\u7684\u67f1\u7ebf\u56fe",toc_max_heading_level:6,tags:["d3"],last_update:{date:new Date("2021-12-01T00:00:00.000Z")}},i=void 0,r={id:"D3/bar-graph-of-d3/bar-graph-of-d3",title:"\u57fa\u4e8ed3\u7684\u5e26\u8f74\u7684\u67f1\u7ebf\u56fe",description:"\u6765\u6e90",source:"@site/docs/D3/bar-graph-of-d3/bar-graph-of-d3.md",sourceDirName:"D3/bar-graph-of-d3",slug:"/D3/bar-graph-of-d3/",permalink:"/blog/docs/D3/bar-graph-of-d3/",draft:!1,unlisted:!1,tags:[{label:"d3",permalink:"/blog/docs/tags/d-3"}],version:"current",lastUpdatedAt:1638316800,formattedLastUpdatedAt:"2021\u5e7412\u67081\u65e5",frontMatter:{title:"\u57fa\u4e8ed3\u7684\u5e26\u8f74\u7684\u67f1\u7ebf\u56fe",toc_max_heading_level:6,tags:["d3"],last_update:{date:"2021-12-01T00:00:00.000Z"}},sidebar:"tutorialSidebar",previous:{title:"\u900f\u8fc7performance\u63a2\u7a76js\u64cd\u4f5cdom\u6837\u5f0f\u65f6\u6d4f\u89c8\u5668\u4f1a\u505a\u4ec0\u4e48\uff1f",permalink:"/blog/docs/ChromeDevTool/what-will-do-when-js-handle-dom-in-performance/"},next:{title:"\u57fa\u4e8ed3\u7684\u5192\u6ce1\u6392\u5e8f\u53ef\u89c6\u5316",permalink:"/blog/docs/D3/bubble-visual-base-d3"}},l={},c=[{value:"\u6765\u6e90",id:"\u6765\u6e90",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2},{value:"\u8f74\u5728\u5de6\u4e0b\u89d2\u7684\u5bf9\u9f50",id:"\u8f74\u5728\u5de6\u4e0b\u89d2\u7684\u5bf9\u9f50",level:3},{value:"\u6a2a\u8f74\u4e0a\u523b\u5ea6\u7684\u95f4\u9694",id:"\u6a2a\u8f74\u4e0a\u523b\u5ea6\u7684\u95f4\u9694",level:3},{value:"csv\u6570\u636e",id:"csv\u6570\u636e",level:2},{value:"\u6e90\u7801",id:"\u6e90\u7801",level:2}];function o(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"\u6765\u6e90",children:"\u6765\u6e90"}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://iowiki.com/d3js/",children:"https://iowiki.com/d3js/"})," > ",(0,a.jsx)(t.a,{href:"https://www.d3js.org.cn/document/",children:"https://www.d3js.org.cn/document/"})]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,a.jsx)(t.h3,{id:"\u8f74\u5728\u5de6\u4e0b\u89d2\u7684\u5bf9\u9f50",children:"\u8f74\u5728\u5de6\u4e0b\u89d2\u7684\u5bf9\u9f50"}),"\n",(0,a.jsx)(t.p,{children:"\u7eb5\u8f74\u6bd4\u4f8b\u5c3a\u6e32\u67d3\u7684\u6700\u5927\u9ad8\u5ea6 = \u6a2a\u8f74\u5728y\u65b9\u5411\u7684\u504f\u79fb\u91cf"}),"\n",(0,a.jsx)(t.h3,{id:"\u6a2a\u8f74\u4e0a\u523b\u5ea6\u7684\u95f4\u9694",children:"\u6a2a\u8f74\u4e0a\u523b\u5ea6\u7684\u95f4\u9694"}),"\n",(0,a.jsxs)(t.p,{children:["\u672c\u4f8b\u4e2d\u6a2a\u8f74\u4f7f\u7528\u7684\u662f\u79bb\u6563\u6bd4\u4f8b\u5c3a\uff0c\u6709",(0,a.jsx)(t.code,{children:"padding()"}),"\u65b9\u6cd5\u53ef\u4ee5\u7528\u6765\u8c03\u6574\u523b\u5ea6\u95f4\u7684\u95f4\u9694\u3002"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"gap",src:n(28044).Z+"",width:"1502",height:"641"})}),"\n",(0,a.jsx)(t.p,{children:"\u672c\u4f8b\u4e2d\u4f7f\u523b\u5ea6\u7684\u5185\u5916\u95f4\u9694\u4fdd\u6301\u4e00\u81f4\u3002"}),"\n",(0,a.jsx)(t.h2,{id:"csv\u6570\u636e",children:"csv\u6570\u636e"}),"\n",(0,a.jsxs)(t.p,{children:["\u957f\u8fd9\u4e2a\u6837\u5b50\n",(0,a.jsx)(t.img,{alt:"csv",src:n(21269).Z+"",width:"376",height:"432"})]}),"\n",(0,a.jsx)(t.h2,{id:"\u6e90\u7801",children:"\u6e90\u7801"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Document</title>\n  </head>\n  <body>\n    <script src="https://d3js.org/d3.v5.min.js"><\/script>\n    <script>\n      const svgWidth = 600,\n        svgHeight = 400,\n        margin = 120,\n        axisWidth = svgWidth - margin,\n        axisHeight = svgHeight - margin;\n      const svg = d3\n        .select("body")\n        .append("svg")\n        .attr("height", svgHeight)\n        .attr("width", svgWidth);\n\n      // \u7eb5\u8f74\u6bd4\u4f8b\u5c3a\n      const yScale = d3.scaleLinear().range([axisHeight, 0]);\n      // \u6a2a\u8f74\u6bd4\u4f8b\u5c3a\n      const xScale = d3.scaleBand().range([0, axisWidth]).padding(0.4);\n\n      // \u521b\u5efa\u7ec4\u5143\u7d20\uff0c\u8c03\u6574\u56fe\u8868\u5728svg\u4e2d\u7684\u4f4d\u7f6e\n      const g = svg.append("g").attr("transform", "translate(50, 50)");\n\n      d3.csv("../bar_data.csv").then((data) => {\n        xScale.domain(data.map((d) => d.year));\n        yScale.domain([0, d3.max(data, (d) => d.value)]);\n\n        // \u6dfb\u52a0\u6a2a\u8f74\n        g.append("g")\n          .attr("transform", `translate(0, ${axisHeight})`)\n          .call(d3.axisBottom(xScale));\n        // \u6dfb\u52a0\u7eb5\u8f74\n        g.append("g").call(d3.axisLeft(yScale));\n\n        // \u6dfb\u52a0\u67f1\u5f62\n        g.selectAll(".bar")\n          .data(data)\n          .enter()\n          .append("rect")\n          .attr("class", "bar")\n          .attr("x", (d) => xScale(d.year))\n          .attr("y", (d) => yScale(d.value))\n          .attr("width", xScale.bandwidth())\n          .attr("height", (d) => axisHeight - yScale(d.value))\n          .attr("fill", "green");\n      });\n    <\/script>\n  </body>\n</html>\n'})})]})}function h(e={}){const{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},21269:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/csv-4d9481cb6aa78c3028b10a4d108e0fd5.png"},28044:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/gap-7e5463b007fc6a9e29679e211b84b2bb.png"},56213:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>i});var a=n(50959);const d={},s=a.createContext(d);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);