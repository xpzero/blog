"use strict";(self.webpackChunkblog_2=self.webpackChunkblog_2||[]).push([[89],{787:(e,t,a)=>{a.r(t),a.d(t,{default:()=>k});var n=a(9496),l=a(5924),r=a(4943),i=a(8870),o=a(1671),s=a(1574),m=a(933),c=a(2173);function g(e){const{metadata:t}=e,{previousPage:a,nextPage:l}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,m.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(c.Z,{permalink:a,title:n.createElement(m.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),l&&n.createElement(c.Z,{permalink:l,title:n.createElement(m.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}var p=a(1145),u=a(2511),b=a(6038);function d(e){let{items:t,component:a=b.Z}=e;return n.createElement(n.Fragment,null,t.map((e=>{let{content:t}=e;return n.createElement(u.n,{key:t.metadata.permalink,content:t},n.createElement(a,null,n.createElement(t,null)))})))}function E(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,r.Z)(),{blogDescription:l,blogTitle:o,permalink:s}=t,m="/"===s?a:o;return n.createElement(n.Fragment,null,n.createElement(i.d,{title:m,description:l}),n.createElement(p.Z,{tag:"blog_posts_list"}))}function h(e){const{metadata:t,items:a,sidebar:l}=e;return n.createElement(s.Z,{sidebar:l},n.createElement(d,{items:a}),n.createElement(g,{metadata:t}))}function k(e){return n.createElement(i.FG,{className:(0,l.Z)(o.k.wrapper.blogPages,o.k.page.blogListPage)},n.createElement(E,e),n.createElement(h,e))}}}]);