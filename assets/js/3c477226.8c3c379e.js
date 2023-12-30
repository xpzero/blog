"use strict";(self.webpackChunkblog_2=self.webpackChunkblog_2||[]).push([[5114],{2973:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>r,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>d});var s=l(11527),i=l(56213);const o={title:"LuaSnip\u4f7f\u7528",tags:["nvim","neovim"]},a=void 0,t={permalink:"/blog/blog/2023/09/16/how-to-use-LuaSnip",source:"@site/blog/2023/09/16/how-to-use-LuaSnip.md",title:"LuaSnip\u4f7f\u7528",description:"\u4e4b\u524d\u4e00\u76f4\u5728\u7f51\u4e0a\u641c\u6765\u641c\u53bb\uff0c\u627e\u4e0d\u5230\u5982\u4f55\u5728neovim\u4e0a\u914d\u7f6e\u81ea\u5df1\u7684\u4ee3\u7801\u7247\u6bb5\uff0c\u7ec8\u4e8e\u7687\u5929\u4e0d\u8d1f\u6709\u5fc3\u4eba\uff0c\u627e\u5230\u4e86\u6b63\u786e\u7684\u914d\u7f6e\u65b9\u5f0f\u3002\u5176\u5b9egithub\u4e0a\u7684\u5b98\u65b9\u6587\u6863\u5df2\u7ecf\u5f88\u6e05\u695a\u4e86\uff0c\u53ef\u80fd\u662f\u56e0\u4e3a\u82f1\u6587\u4e0d\u597d\uff0c\u6240\u4ee5\u4e00\u76f4\u6ca1\u6709\u770b\u51fa\u6765\u3002\u7279\u6b64\u8bb0\u5f55\u4e0b\u6765\uff0c\u4fbf\u4e8e\u540e\u7528\u3002",date:"2023-09-16T00:00:00.000Z",formattedDate:"2023\u5e749\u670816\u65e5",tags:[{label:"nvim",permalink:"/blog/blog/tags/nvim"},{label:"neovim",permalink:"/blog/blog/tags/neovim"}],readingTime:3.205,hasTruncateMarker:!0,authors:[],frontMatter:{title:"LuaSnip\u4f7f\u7528",tags:["nvim","neovim"]},unlisted:!1,prevItem:{title:"\u4f7f\u7528Docusaurus\u6784\u5efa\u535a\u5ba2",permalink:"/blog/blog/2023/09/23/using-docusaurus-build-blog"},nextItem:{title:"\u914d\u7f6edotfiles\u8bb0\u5f55",permalink:"/blog/blog/2023/09/09/configure-dotfiles-os"}},r={authorsImageUrls:[]},d=[{value:"\u6587\u4ef6\u76ee\u5f55",id:"\u6587\u4ef6\u76ee\u5f55",level:2},{value:"VS Code-like \u4ee3\u7801\u7247\u6bb5\u914d\u7f6e",id:"vs-code-like-\u4ee3\u7801\u7247\u6bb5\u914d\u7f6e",level:2},{value:"Lua\u5199\u7684\u4ee3\u7801\u7247\u6bb5\u914d\u7f6e",id:"lua\u5199\u7684\u4ee3\u7801\u7247\u6bb5\u914d\u7f6e",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}];function c(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...n.components},{TabItem:l,Tabs:o}=e;return l||u("TabItem",!0),o||u("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"\u4e4b\u524d\u4e00\u76f4\u5728\u7f51\u4e0a\u641c\u6765\u641c\u53bb\uff0c\u627e\u4e0d\u5230\u5982\u4f55\u5728neovim\u4e0a\u914d\u7f6e\u81ea\u5df1\u7684\u4ee3\u7801\u7247\u6bb5\uff0c\u7ec8\u4e8e\u7687\u5929\u4e0d\u8d1f\u6709\u5fc3\u4eba\uff0c\u627e\u5230\u4e86\u6b63\u786e\u7684\u914d\u7f6e\u65b9\u5f0f\u3002\u5176\u5b9egithub\u4e0a\u7684\u5b98\u65b9\u6587\u6863\u5df2\u7ecf\u5f88\u6e05\u695a\u4e86\uff0c\u53ef\u80fd\u662f\u56e0\u4e3a\u82f1\u6587\u4e0d\u597d\uff0c\u6240\u4ee5\u4e00\u76f4\u6ca1\u6709\u770b\u51fa\u6765\u3002\u7279\u6b64\u8bb0\u5f55\u4e0b\u6765\uff0c\u4fbf\u4e8e\u540e\u7528\u3002"}),"\n",(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsxs)(e.p,{children:["\u8fd9\u91cc\u7528\u7684",(0,s.jsx)(e.code,{children:"lazy.nvim"}),"\u63d2\u4ef6\u7ba1\u7406\u5668\u3002\u8be6\u7ec6\u4fe1\u606f\u53ef\u67e5\u770b",(0,s.jsx)(e.a,{href:"https://github.com/folke/lazy.nvim",children:"lazy.nvim \u7684GitHub"})]})}),"\n",(0,s.jsx)(e.h2,{id:"\u6587\u4ef6\u76ee\u5f55",children:"\u6587\u4ef6\u76ee\u5f55"}),"\n",(0,s.jsx)(e.p,{children:"\u5148\u8d34\u4e00\u4e0b\u6587\u4ef6\u76ee\u5f55\uff0c\u65b9\u4fbf\u540e\u7eed\u67e5\u770b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-txt",children:"~/.config/nvim/\n\u251c\u2500\u2500 lua\n\u2502\xa0\xa0 \u2514\u2500\u2500 snippets\n\u2502\xa0\xa0     \u251c\u2500\u2500 lua\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 markdown.lua\n\u2502\xa0\xa0     \u2514\u2500\u2500 vscode\n\u2502\xa0\xa0         \u251c\u2500\u2500 console.json\n\u2502\xa0\xa0         \u2514\u2500\u2500 package.json\n"})}),"\n",(0,s.jsx)(e.h2,{id:"vs-code-like-\u4ee3\u7801\u7247\u6bb5\u914d\u7f6e",children:"VS Code-like \u4ee3\u7801\u7247\u6bb5\u914d\u7f6e"}),"\n",(0,s.jsxs)(e.admonition,{type:"tip",children:[(0,s.jsx)(e.p,{children:"\u6b65\u9aa4\u5982\u4e0b\uff1a"}),(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u5199VS Code-like \u7684\u4ee3\u7801\u7247\u6bb5"}),"\n",(0,s.jsx)(e.li,{children:"\u914d\u7f6e\u4ee3\u7801\u7247\u6bb5\u6240\u652f\u6301\u7684\u8bed\u8a00"}),"\n",(0,s.jsx)(e.li,{children:"\u52a0\u8f7d\u4ee3\u7801\u7247\u6bb5"}),"\n"]}),(0,s.jsxs)(e.p,{children:["\u6ce8\u610f\uff1a\u4ee3\u7801\u7247\u6bb5\u6240\u5728\u7684\u76ee\u5f55\u4e00\u5b9a\u8981\u6709",(0,s.jsx)(e.code,{children:"package.json"}),"\u6587\u4ef6\uff0c\u7528\u6765\u6307\u5b9a\u4ee3\u7801\u7247\u6bb5\u6587\u4ef6\u7684\u8def\u5f84\u53ca\u652f\u6301\u7684\u8bed\u8a00"]})]}),"\n",(0,s.jsxs)(o,{defaultValue:"load snippets",children:[(0,s.jsx)(l,{value:"load snippets",children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lua",metastring:"showLineNumbers",children:'return {\n    "L3MON4D3/LuaSnip",\n    dependencies = {\n      "rafamadriz/friendly-snippets",\n    },\n    config = function()\n      -- load friendly-snippets\n      require("luasnip.loaders.from_vscode").lazy_load()\n      -- load VS Code-like snippets.\n      // add-highlight-line\n      require("luasnip.loaders.from_vscode").lazy_load({ paths = { "./lua/snippets/vscode" } })\n    end,\n  }\n'})})}),(0,s.jsxs)(l,{value:"snippets/package.json",children:[(0,s.jsxs)(e.p,{children:["\u8fd9\u91cc\u6307\u5b9a\u4e86",(0,s.jsx)(e.code,{children:"console.json"}),"\u6587\u4ef6\u4e2d\u5199\u7684\u4ee3\u7801\u7247\u6bb5\u652f\u6301\u6240\u6709\u8bed\u8a00\u3002"]}),(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n  "contributes": {\n    "snippets": [\n      {\n        "language": ["all"],\n        "path": "./console.json"\n      }\n    ]\n  }\n}\n'})})]}),(0,s.jsxs)(l,{value:"snippets/console.json",children:[(0,s.jsxs)(e.p,{children:["\u8fd9\u91cc\u6bd4\u8f83\u7b80\u5355\uff0c\u56e0\u4e3a\u5e73\u65f6\u4f1a\u5199\u4e00\u4e9b",(0,s.jsx)(e.code,{children:"console.log"}),"\uff0c\u6240\u4ee5\u8fd9\u91cc\u914d\u7f6e\u4e86\u6bd4\u8f83\u5bb9\u6613\u8bc6\u522b\u662f\u81ea\u5df1\u5199\u7684log\u7684\u6807\u5fd7"]}),(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n  "print log": {\n    "prefix": "cld",\n    "body": ["console.log(\'dev: $1\', $2);"],\n    "description": "console with dev keyword"\n  }\n}\n'})}),(0,s.jsxs)(e.p,{children:["\u8fd9\u6837\uff0c\u6bcf\u6b21\u8f93\u5165",(0,s.jsx)(e.code,{children:"cld"}),"\u5e76\u9009\u4e2d\u540e\uff0c\u5c31\u81ea\u52a8\u628a",(0,s.jsx)(e.code,{children:"console.log('dev: $1', $2)"}),"\u63d2\u5165\u5149\u6807\u6240\u5728\u7684\u4f4d\u7f6e\u3002"]}),(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"$1"}),"\u8868\u793a\u63d2\u5165\u4ee3\u7801\u7247\u6bb5\u540e\uff0c\u5149\u6807\u6240\u5728\u7684\u4f4d\u7f6e\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"$2"}),"\u8868\u793a\u5728",(0,s.jsx)(e.code,{children:"$1"}),"\u4f4d\u7f6e\u8f93\u5165\u81ea\u5df1\u60f3\u8981\u7684\u5185\u5bb9\u540e\uff0c\u518d\u6309",(0,s.jsx)(e.code,{children:"Tab"}),"\u952e\u4e4b\u540e\u5149\u6807\u4f1a\u5728\u7684\u4f4d\u7f6e"]}),"\n"]}),(0,s.jsxs)(e.p,{children:["\u7b80\u5355\u7406\u89e3\u5c31\u662f",(0,s.jsx)(e.code,{children:"$1"}),"\u662f\u5149\u6807\u7684\u7b2c\u4e00\u4e2a\u4f4d\u7f6e\uff0c",(0,s.jsx)(e.code,{children:"$2"}),"\u662f\u5149\u6807\u7684\u7b2c\u4e8c\u4e2a\u4f4d\u7f6e\u3002"]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"lua\u5199\u7684\u4ee3\u7801\u7247\u6bb5\u914d\u7f6e",children:"Lua\u5199\u7684\u4ee3\u7801\u7247\u6bb5\u914d\u7f6e"}),"\n",(0,s.jsxs)(e.p,{children:["\u8fd9\u4e2a\u53ea\u9700\u8981\u5c06\u4ee3\u7801\u7247\u6bb5\u5bf9\u5e94\u7684",(0,s.jsx)(e.code,{children:"lua"}),"\u6587\u4ef6\u5728",(0,s.jsx)(e.code,{children:"LuaSnip"}),"\u52a0\u8f7d\u7684\u65f6\u5019\u5f15\u5165\u5373\u53ef\u3002"]}),"\n",(0,s.jsxs)(o,{defaultValue:"load",children:[(0,s.jsx)(l,{value:"load",children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lua",children:'return {\n    "L3MON4D3/LuaSnip",\n    dependencies = {\n      "rafamadriz/friendly-snippets",\n    },\n    config = function()\n      -- load friendly-snippets\n      require("luasnip.loaders.from_vscode").lazy_load()\n      -- load VS Code-like snippets.\n      require("luasnip.loaders.from_vscode").lazy_load({ paths = { "./lua/snippets/vscode" } })\n      -- load lua snippets\n      // add-highlight-line\n      require("luasnip.loaders.from_lua").lazy_load({ paths = "./lua/snippets/lua" })\n    end,\n  },\n'})})}),(0,s.jsx)(l,{value:"lua snippets",children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lua",children:'local ls = require("luasnip")\n-- format\nlocal fmt = require("luasnip.extras.fmt").fmt\nls.add_snippets("markdown", {\n  ls.snippet(\n    -- trigger with "tt"\n    "tt",\n    fmt(\n      [[\n    ---\n    title: {xxx}\n    ---\n    ]],\n      {\n        xxx = ls.function_node(function()\n          -- :t get trailing string with extension.\n          -- :r get the string without extension.\n          -- return vim.fn.fnamemodify(vim.fn.bufname(), ":t:r")\n          -- or below. source: https://neovim.io/doc/user/builtin.html#expand()\n          return vim.fn.expand("%:t:r")\n        end),\n      }\n    )\n  ),\n})\n'})})})]}),"\n",(0,s.jsx)(e.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://discord.com/channels/1107070766681444433/1107164897982300192/1136693073334784133",children:"LuaSnip\u914d\u7f6e\u539f\u7406"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://github.com/L3MON4D3/LuaSnip/blob/master/Examples/snippets.lua#L190",children:"Lua snippets's demo"})})]})}function p(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(c,{...n})}):c(n)}function u(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},56213:(n,e,l)=>{l.d(e,{Z:()=>t,a:()=>a});var s=l(50959);const i={},o=s.createContext(i);function a(n){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),s.createElement(o.Provider,{value:e},n.children)}}}]);