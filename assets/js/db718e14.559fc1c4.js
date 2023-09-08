"use strict";(self.webpackChunkblog_2=self.webpackChunkblog_2||[]).push([[743],{5803:n=>{n.exports=JSON.parse('{"blogPosts":[{"id":"/2023/09/09/\u914d\u7f6edotfiles\u8bb0\u5f55","metadata":{"permalink":"/blog/index/2023/09/09/\u914d\u7f6edotfiles\u8bb0\u5f55","source":"@site/blog/2023/09/09/\u914d\u7f6edotfiles\u8bb0\u5f55.md","title":"\u914d\u7f6edotfiles\u8bb0\u5f55","description":"\u56e0\u4e3a\u5de5\u4f5c\u548c\u4e2a\u4eba\u7535\u8111\u90fd\u662fMac\uff0c\u5e73\u65f6\u4e5f\u4f1a\u5728\u5bb6\u7528\u81ea\u5df1\u7684\u7535\u8111coding\uff0c\u6240\u4ee5\u60f3\u7edf\u4e00\u4e00\u4e0b\u7f16\u7801\u73af\u5883\uff0c\u65b9\u4fbf\u4f7f\u7528\u3002","date":"2023-09-09T00:00:00.000Z","formattedDate":"2023\u5e749\u67089\u65e5","tags":[],"readingTime":3.19,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"\u914d\u7f6edotfiles\u8bb0\u5f55"},"nextItem":{"title":"\u4f7f\u7528Hugo\u6784\u5efa\u4e2a\u4eba\u535a\u5ba2\u5e76\u6258\u7ba1\u81f3Github Pages","permalink":"/blog/index/2023/09/04/\u4f7f\u7528Hugo\u6784\u5efa\u4e2a\u4eba\u535a\u5ba2\u5e76\u6258\u7ba1\u81f3Github Pages"}},"content":"\u56e0\u4e3a\u5de5\u4f5c\u548c\u4e2a\u4eba\u7535\u8111\u90fd\u662fMac\uff0c\u5e73\u65f6\u4e5f\u4f1a\u5728\u5bb6\u7528\u81ea\u5df1\u7684\u7535\u8111coding\uff0c\u6240\u4ee5\u60f3\u7edf\u4e00\u4e00\u4e0b\u7f16\u7801\u73af\u5883\uff0c\u65b9\u4fbf\u4f7f\u7528\u3002\\n\\n\x3c!-- truncate --\x3e\\n\\n:::tip\\n`dotfiles`\u6307\u7684\u662f\uff0c\u7cfb\u7edf\u4e2d\u6bd4\u8f83\u91cd\u8981\u7684\u9690\u85cf\u6587\u4ef6(\u5939)\u3002\u6bd4\u5982`.config/`\u3001`.zshrc`\u7b49\u3002\\n:::\\n\\n## \u601d\u8def\u6574\u7406\\n\\n1. \u521b\u5efagithub\u4ed3\u5e93\\n2. \u5c06\u6574\u7406\u597d\u7684`dotfiles`\u4e0a\u4f20\u5230repo\\n3. \u521b\u5efa`dotfiles`\u5b89\u88c5\u811a\u672c\\n4. \u5907\u4efd`~/`\u4e0b\u53ef\u80fd\u4f1a\u6d89\u53ca\u5230\u7684\u6587\u4ef6(\u5939)\\n4. \u6267\u884c`dotfiles`\u5b89\u88c5\u811a\u672c\uff0c\u4e3a\u6587\u4ef6(\u5939)\u521b\u5efa\u8f6f\u94fe\u63a5(symlink)\u5230`~/`\u4e0b\\n5. \u91cd\u542f\u7ec8\u7aef\uff0c\u7b49\u5f85\u9b54\u6cd5\\n\\n\u4e0b\u9762\u7740\u91cd\u8bb0\u5f55`dotfiles`\u7684\u6574\u7406\u53ca\u5b89\u88c5\u811a\u672c\u7684\u521b\u5efa\\n\\n## `dotfiles/`\u6574\u7406\\n\\n\u8fd9\u91cc\u6574\u7406\u4e86`~/`\u4e0b\u7684\u5982\u4e0b\u5185\u5bb9\\n\\n- `.config/`\\n  - `alacritty/`\\n  - `nvim/`\\n  - `tmux/`\\n- `.oh-my-zsh/`\\n- `.p10k.zsh`\\n- `.zshrc`\\n\\n\u53ef\u4ee5\u4f7f\u7528`cp`\u547d\u4ee4\u4ece`~/`\u4e0b\u76f4\u63a5\u62f7\u8d1d\u5230`dotfiles/`\u4e2d\u3002\u8fd9\u91cc\u62f7\u8d1d\u540e\u6240\u6709\u4e00\u7ea7\u6587\u4ef6(\u5939)\u5747\u53bb\u6389\u4e86`.`\uff0c\u5b89\u88c5\u811a\u672c\u4f1a\u6709\u5904\u7406\u3002\\n\\n```sh\\ncp .zshrc {\u4f60\u7684\u8def\u5f84}/dotfiles/dot/\\ncp -r .config/ {\u4f60\u7684\u8def\u5f84}/dotfiles/dot/\\ncp -r .oh-my-zsh/ {\u4f60\u7684\u8def\u5f84}/dotfiles/dot/\\ncp .p10k.zsh {\u4f60\u7684\u8def\u5f84}/dotfiles/dot/\\n```\\n\\n`dotfiles/`\u7684\u76ee\u5f55\u6811\u5982\u4e0b\\n\\n```txt\\n.\\n\u251c\u2500\u2500 bootstrap.sh\\n\u2514\u2500\u2500 dot\\n    \u251c\u2500\u2500 config\\n    \u251c\u2500\u2500 oh-my-zsh\\n    \u251c\u2500\u2500 p10k.zsh\\n    \u2514\u2500\u2500 zshrc\\n```\\n\\n\u8fd9\u91cc\u5206\u51fa`dot/`\u662f\u4e3a\u4e86\u65b9\u4fbf\u5b89\u88c5\u811a\u672c\u4e2d\u7684\u76ee\u5f55\u67e5\u627e\uff0c\u4e5f\u4fbf\u4e8e\u6587\u4ef6\u7ba1\u7406\u3002\\n\\n## `dotfiles/`\u5b89\u88c5\u811a\u672c\\n\u8fd9\u91cc\u5199\u7684\u6bd4\u8f83\u7b80\u5355\uff0c\u5728`dotfiles/`\u76ee\u5f55\u4e0b\u542f\u52a8`bootstrap.sh`\u811a\u672c\uff0c\u5c31\u4f1a\u4e3a`dotfiles/dot/`\u4e0b\u7684\u6240\u6709\u4e00\u7ea7\u6587\u4ef6(\u5939)\u6dfb\u52a0\u5e26\u6709`.`\u524d\u7f00\u7684`symlink`\u5230`~/`\u4e0b\\n\\n\u811a\u672c\u5185\u5bb9\u5982\u4e0b\\n```sh\\n#!/bin/bash\\n# The difference in sh & bash is whether to continue execute script or not when program had errors.\\n\\nshPath=\\"$(pwd)/$(basename $0)\\"\\nif [[ -e $shPath && -x $shPath ]]; then\\n\\tchmod +x \\"$shPath\\"\\nelse\\n\\t# if want to catch exception and output yours info, using echo command in else.\\n\\techo \\"$shPath is not exists or no permission.\\"\\n\\texit 1\\nfi\\n\\n# read filename in dot/.\\ndotPath=\\"$(pwd)/dot\\"\\ndotFiles=$(ls $dotPath)\\n\\necho \\"------------------------------------Install dotfiles-----------------------------------\\"\\nfor filename in $dotFiles; do\\n\\tsourceFile=\\"$dotPath/$filename\\"\\n\\ttargetFile=\\"$HOME/.$filename\\"\\n\\tln -sf $sourceFile $targetFile\\n\\techo \\"$HOME/.$filename symlink is installed.\\"\\ndone\\n\\necho \\"---------------------------------dotfiles is installed!--------------------------------\\"\\n```\\n\\n## `dotfiles/`\u4f7f\u7528\\n\\n\u4ecegithub\u7684repo\u91cc***\u9012\u5f52***\u514b\u9686\u5373\u53ef\u3002\\n\\n```sh\\ngit clone https://github.com/xpzero/dotfiles.git --recurse-submodules\\n```\\n\\n:::tip\\n\\n`oh-my-zsh`\u7684`p10k`\u4e3b\u9898\u3001\u547d\u4ee4\u81ea\u52a8\u63d0\u793a\u63d2\u4ef6\u90fd\u662f\u4f5c\u4e3a`git`\u5b50\u6a21\u5757\u5b58\u5728\u4e8erepo\u76ee\u5f55\u4e2d\u7684\u3002\u666e\u901a`clone`\u65e0\u6cd5\u5c06\u5b50\u6a21\u5757\u7684\u5185\u5bb9\u4e0b\u8f7d\u4e0b\u6765\uff0c\u9700\u8981\u4f7f\u7528`--recurse-submodules`\u53c2\u6570\u8fdb\u884c\u9012\u5f52\u514b\u9686\\n\\n\u53e6\u5916\uff0c\u8fd9\u91ccrepo\u4e0b\u7684\u5b50\u6a21\u5757repo\u5730\u5740\u90fd\u662fgithub\u57df\u540d\uff0c\u7f51\u7edc\u95ee\u9898\u9700\u8981\u8003\u8651\u4e00\u4e0b\u3002\\n:::\\n\\n\u5728\u7ec8\u7aef\u91cc`cd`\u5230`dotfiles/`\u4e0b\uff0c\u6267\u884c`./bootstrap.sh`\u5373\u53ef\u8fdb\u884c`symlink`\u7684\u5b89\u88c5\u3002\\n\\n\u8bb0\u5f97\u5b89\u88c5\u4e4b\u540e\u8981\u91cd\u542f\u7ec8\u7aef\u3002\\n\\n## \u53c2\u8003\\n\\n[Linux Shell\u83b7\u53d6\u6587\u4ef6\u5939\u4e0b\u7684\u6587\u4ef6\u540d](https://blog.csdn.net/Quincuntial/article/details/54348471) \\n\\n[Shell bash\u548csh\u533a\u522b](https://www.cnblogs.com/conefirst/articles/15232323.html) \\n\\n[Linux ln \u547d\u4ee4\u521b\u5efa\u7b26\u53f7\u94fe\u63a5](https://www.myfreax.com/how-to-create-symbolic-links-in-linux-using-the-ln-command/) \\n\\n[\u3010Linux\u3011021-\u8f6f\u786c\u94fe\u63a5](https://www.bilibili.com/video/BV14X4y1P7bh/?share_source=copy_web&vd_source=60cb976cb0acb8dc9492ec18c792ff15) \\n[alrra/dotfiles](https://github.com/alrra/dotfiles/blob/main/src/os/create_symbolic_links.sh) \\n\\n[Git\u4e2dsubmodule\u7684\u4f7f\u7528](https://zhuanlan.zhihu.com/p/87053283)"},{"id":"/2023/09/04/\u4f7f\u7528Hugo\u6784\u5efa\u4e2a\u4eba\u535a\u5ba2\u5e76\u6258\u7ba1\u81f3Github Pages","metadata":{"permalink":"/blog/index/2023/09/04/\u4f7f\u7528Hugo\u6784\u5efa\u4e2a\u4eba\u535a\u5ba2\u5e76\u6258\u7ba1\u81f3Github Pages","source":"@site/blog/2023/09/04/\u4f7f\u7528Hugo\u6784\u5efa\u4e2a\u4eba\u535a\u5ba2\u5e76\u6258\u7ba1\u81f3Github Pages.md","title":"\u4f7f\u7528Hugo\u6784\u5efa\u4e2a\u4eba\u535a\u5ba2\u5e76\u6258\u7ba1\u81f3Github Pages","description":"\u7f51\u4e0a\u51b2\u6d6a\u770b\u5230\u522b\u4eba\u7684\u535a\u5ba2\u597d\u7b80\u6d01\u597d\u597d\u770b\uff0c\u6211\u4e5f\u8981\u6574\u4e00\u5957\ud83e\udd13\u3002But\uff01\u6765\u6765\u56de\u56de\u5728\u7f51\u4e0a\u67e5\u8be2\uff0c\u53c8\u6709\u65f6\u5019\u5fd8\u8bb0\u8981\u5e72\u5565\u6574\u4e86\u4e00\u5929\u624d\u641e\u5b9a\ud83d\ude48\u3002\u8fd9\u91cc\u8bb0\u5f55\u4e0b\u6211\u300c\u8d2a\u300d\u7684\u8f9b\u82e6\ud83e\udd79","date":"2023-09-04T00:00:00.000Z","formattedDate":"2023\u5e749\u67084\u65e5","tags":[],"readingTime":9.685,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"\u4f7f\u7528Hugo\u6784\u5efa\u4e2a\u4eba\u535a\u5ba2\u5e76\u6258\u7ba1\u81f3Github Pages"},"prevItem":{"title":"\u914d\u7f6edotfiles\u8bb0\u5f55","permalink":"/blog/index/2023/09/09/\u914d\u7f6edotfiles\u8bb0\u5f55"},"nextItem":{"title":"React\u5b66\u4e60\u8bb0\u5f55-\u524d\u7f6e\u77e5\u8bc6","permalink":"/blog/index/2023/09/04/React\u5b66\u4e60\u8bb0\u5f55-\u524d\u7f6e\u77e5\u8bc6"}},"content":"\u7f51\u4e0a\u51b2\u6d6a\u770b\u5230\u522b\u4eba\u7684\u535a\u5ba2\u597d\u7b80\u6d01\u597d\u597d\u770b\uff0c\u6211\u4e5f\u8981\u6574\u4e00\u5957\ud83e\udd13\u3002But\uff01\u6765\u6765\u56de\u56de\u5728\u7f51\u4e0a\u67e5\u8be2\uff0c\u53c8\u6709\u65f6\u5019\u5fd8\u8bb0\u8981\u5e72\u5565\u6574\u4e86\u4e00\u5929\u624d\u641e\u5b9a\ud83d\ude48\u3002\u8fd9\u91cc\u8bb0\u5f55\u4e0b\u6211\u300c\u8d2a\u300d\u7684\u8f9b\u82e6\ud83e\udd79\\n\\n\x3c!-- truncate --\x3e\\n\\n## \u660e\u786e\u76ee\u6807\\n\\n\u9996\u5148\uff0c\u6211\u4eec\u8981\u660e\u786e\u4e00\u4e0b\u81ea\u5df1\u8981\u5e72\u4ec0\u4e48\uff1f\u94ed\u8bb0\u521d\u5fc3\uff0c\u65b9\u5f97\u59cb\u7ec8\uff0c\u6df1\u6709\u4f53\u4f1a\ud83d\ude15\\n\\n1. \u642d\u5efa\u535a\u5ba2\uff0c\u62e5\u62b1\u6279\u8bc4\\n2. \u5c06\u535a\u5ba2\u5185\u5bb9\u6258\u7ba1\u81f3Github Pages\uff0c\u8fdb\u884c\u7f51\u7ad9\u767d\u5ad6\u3002\\n\\n\u90a3\u4e48\u5982\u4f55\u642d\u5efa\u535a\u5ba2\u5462\uff1f\u6211\u8fd9\u6b21\u4f7f\u7528\u7684\u662fHugo\u3002\u5176\u5b9e\u4e2d\u95f4\u6709\u5012\u817e\u8fc7Hexo\u3001Netlify\u5168\u90fd\u592d\u6298\u3002\\n\u5176\u5b9e\u4f7f\u7528\u9759\u6001\u7f51\u7ad9\u6784\u5efa\u6846\u67b6\u751f\u6210\u672c\u5730\u535a\u5ba2\u633a\u5feb\u6377\u3001\u7b80\u5355\u7684\uff0c\u65f6\u95f4\u4e3b\u8981\u6d6a\u8d39\u5728\u4e86\u4ee3\u7801\u6258\u7ba1\u90a3\u4e00\u5757\u513f\u3002\\n\\n## Hugo\\n\u4e00\u5f00\u59cb\u662f\u4f7f\u7528\u7684Hexo\u8fdb\u884c\u535a\u5ba2\u7684\u751f\u6210\uff0c\u4f46\u662f\u5728\u641c\u7d22\u4ee3\u7801\u6258\u7ba1\u7684\u8fc7\u7a0b\u4e2d\u53d1\u73b0\u6709\u4eba\u8bf4\uff0cHugo\u66f4\u52a0\u65b9\u4fbf\u3001\u6613\u7528\u3002\\n\\n![Why Hugo](img/useHugo_why-hugo.png)\\n\\n\u54c7\uff01\u770b\u5230\u8fd9\u91cc\u5c82\u80fd\u5750\u89c6\u4e0d\u7ba1\uff1f\u54b1\u4e5f\u7528\uff01\u5f53\u65f6\u5df2\u7ecf\u662f4 AM\u4e86\ud83e\udd7a\uff0c\u8fd9\u79cd\u72b6\u6001\u6709\u65f6\u5019\u771f\u662f\u8ba9\u4eba\u53c8\u7231\u53c8\u6068\u2639\ufe0f\\n\\n\u8bf4\u5e72\u5c31\u5e72\u3002\u8fdb\u5165[Hugo](https://gohugo.io/)\u5b98\u7f51\uff0c\u5c31\u770b\u89c1\u4e0a\u9762\u5199\u7740\u300cThe world\'s fastest framework for buiding websites\u300d\ud83e\uddd0 \\n\\n![The world\'s fastest framework for buiding websites\u300d](img/useHugo_fastest.png) \\n\\n### \u5b89\u88c5Hugo\\n\u8fd9\u91cc\u8ddf\u7740\u5b98\u7f51\u6765\u5c31\u597d\u4e86\u3002\u6211\u662f\u4eca\u5e74\u521a\u4e70\u7684Mac\uff0c\u6240\u4ee5\u8fd9\u91cc\u5c31\u8bb0\u5f55\u4e0bMac\u4e0b\u7684\u5b89\u88c5\u8fc7\u7a0b\u3002\\n\\n\u4e00\u5b9a\u8981\u6709`git`\u73af\u5883\uff0c\u56e0\u4e3a`Hugo`\u7684\u4e3b\u9898\u8981\u4ece`github`\u4e0a\u83b7\u53d6\uff0c\u6ca1\u6709`git`\u62ff\u4e0d\u5230\u3002\\n\\n```sh\\n# \u8fd9\u91ccbrew\u662f\u5b89\u88c5\u4e86Homebrew\uff0c\u7528\u6765\u7ba1\u7406\u5404\u79cd\u5305\u7684\u5b89\u88c5\uff0c\u53ef\u4ee5\u7406\u89e3\u4e3a\u8f6f\u4ef6\u7ba1\u7406\\nbrew install hugo\\n```\\n\\n```sh\\n# \u521b\u5efa\u4e00\u4e2awebsite\uff0c\u56e0\u4e3a\u6211\u662f\u8981\u642d\u5efa\u535a\u5ba2\uff0c\u6240\u4ee5\u8fd9\u91cc\u8d77\u540d\u53ebblog\\n# \u8fd9\u4e2a\u547d\u4ee4\u4f1a\u521b\u5efablog\u76ee\u5f55\u5176\u4e2d\u4f1a\u6709\u4e00\u4e9b\u7a7a\u7684\u7ed3\u6784\u76ee\u5f55\u4ee5\u5907\u540e\u7528\\nhugo new site blog\\n```\\n\\n```sh\\ncd blog\\n# \u5f00\u59cb\u83b7\u53d6\u535a\u5ba2\u4e3b\u9898\\ngit init\\ngit submodule add https://github.com/nanxiaobei/hugo-paper\\n# \u5c06\u4e3b\u9898\u914d\u7f6e\u5199\u5165hugo.toml\u914d\u7f6e\u6587\u4ef6\\necho \\"theme = \'paper\'\\" >> hugo.toml\\n```\\n\\n```sh\\n# \u542f\u52a8\u672c\u5730\u670d\u52a1\\nhugo server\\n```\\n\\n```sh\\n# \u8be5\u547d\u4ee4\u53ef\u4ee5\u751f\u6210\u9759\u6001\u8d44\u6e90\uff0c\u4e3b\u8981\u4e3a\u8d44\u6e90\u6258\u7ba1\u505a\u51c6\u5907\\n# \u5b83\u4f1a\u751f\u6210\u4e00\u4e2apublic/\uff0c\u91cc\u9762\u7684\u6587\u4ef6\u5c31\u662f\u535a\u5ba2\u7684\u9759\u6001\u8d44\u6e90\\nhugo\\n```\\n\\n### \u914d\u7f6eHugo\\n\u8fd9\u91cc\u6700\u91cd\u8981\u7684\u5c31\u662f`baseURL`\uff0c\u5982\u679c\u914d\u7f6e\u7684\u4e0d\u5bf9\uff0c\u90a3\u4e48\u8d44\u6e90\u90e8\u7f72\u5230GitHub\u4e4b\u540e\u5c31\u4f1a\u5bfc\u81f4`css`\u7b49\u8d44\u6e90\u8def\u5f84\u627e\u4e0d\u5230\u800c\u9020\u6210\u9875\u9762\u6837\u5f0f\u4e22\u5931\u3002\\n```toml\\n# \u53ef\u4ee5\u7406\u89e3\u4e3a\u662f\u90e8\u7f72\u5230Github\u4e4b\u540e\uff0c\u535a\u5ba2\u7f51\u7ad9\u7684\u57fa\u7840\u8def\u5f84\\n# \u4e00\u5b9a\u8981\u5e26\u4e0aGitHub\u4e0a\u7684\u4ed3\u5e93\u540d\u54e6\uff01\u8fd9\u4e2a\u5730\u5740\u53ef\u4ee5\u5728\u914d\u7f6e\u516c\u5f00\u4ed3\u5e93\u7684Github Pages\u7684\u8bbe\u7f6e\u90a3\u91cc\u62ff\u5230\u3002\u6709\u4e00\u4e2a`Visit site`\u6309\u94ae\uff0c\u70b9\u51fb\u5373\u53ef\u8fdb\u5165\u535a\u5ba2\\nbaseURL = \'https://xpzero.github.io/blog\'\\n```\\n\\n\u5230\u6b64\uff0c\u4e00\u4e2a\u535a\u5ba2\u7f51\u7ad9\u5c31\u7b97\u662f\u5df2\u7ecf\u57fa\u672c\u5b8c\u6210\u4e86\uff0c\u535a\u5ba2\u4e2d\u5206\u4eab\u7684\u6587\u7ae0\u5c31\u9700\u8981\u6211\u81ea\u5df1\u540e\u7eed\u518d\u8865\u5145\u8c03\u6574\u4e86\u3002\u73b0\u5728\u53ef\u4ee5\u5f00\u59cb\u8fd9\u7bc7\u6587\u7ae0\u7684\u91cd\u8981\u90e8\u5206\u4e86\uff01\\n\\n## \u6258\u7ba1\u535a\u5ba2\u8d44\u6e90\u5230GitHub\\n\\n**\u6709\u4e00\u4e2a\u60c5\u51b5\u8981\u5148\u8bf4\u660e\u4e00\u4e0b\uff0cGitHub\u7684GitHub Pages\u4f7f\u7528\u7684\u524d\u63d0\u662f\u4ed3\u5e93\u662f\u516c\u5f00\u7684\uff0c\u4e0d\u80fd\u662f\u79c1\u6709\u7684\u3002**\\n\\n![Github Pages configure](img/useHugo_enable-pages.png) \\n\\n\u8fd9\u91cc\u8981\u5148\u601d\u8003\u4e00\u4e0b\uff0c\u6211\u4eec\u6258\u7ba1\u535a\u5ba2\u8d44\u6e90\u662f\u628a\u5305\u62ec\u4e3b\u9898\u7b49\u5728\u5185\u7684\u6240\u6709\u6587\u4ef6\u90fd\u653e\u5728\u516c\u5f00\u4ed3\u5e93\u5417\uff1f\u6709\u70b9\u300c\u88f8\u5954\u300d\u7684\u611f\u89c9\ud83e\udd28\u3002\u4f46\u662f\u4e0d\u628a\u6240\u6709\u7684\u535a\u5ba2\u8d44\u6e90\u505a\u4e00\u4e2a\u7248\u672c\u63a7\u5236\uff0c\u4f3c\u4e4e\u4e5f\u4e0d\u4e60\u60ef\uff0c\u8be5\u600e\u4e48\u529e\u5462\uff1f\\n\\n\u7ecf\u8fc7\u4e0d\u61c8\u7684\u52aa\u529b\uff0c\u4e00\u76f4\u641c\u554a\u641c\uff0c\u4e86\u89e3\u5230\u4e86\u53ef\u4ee5\u901a\u8fc7\u521b\u5efa\u4e24\u4e2a\u4ed3\u5e93\uff0c\u5e76\u5efa\u7acb\u4e24\u4e2a\u4ed3\u5e93\u4e4b\u95f4\u7684\u8fde\u63a5\u6765\u6258\u7ba1\u535a\u5ba2\u8d44\u6e90\u5230GitHub\u3002\u4e24\u4e2a\u4ed3\u5e93\u7684\u4f5c\u7528\u5982\u4e0b\uff1a\\n\\n- \u79c1\u6709\u4ed3\u5e93\uff0c\u5b58\u653e\u6240\u6709\u5305\u62ec\u4e3b\u9898\u7b49\u8d44\u6e90\u5728\u5185\u7684\u6e90\u6587\u4ef6\\n- \u516c\u5f00\u4ed3\u5e93\uff0c\u4ec5\u5b58\u653e\u901a\u8fc7`hugo`\u547d\u4ee4\u751f\u6210\u7684`public/`\u4e0b\u7684\u6587\u4ef6\\n- \u4e8c\u8005\u5efa\u7acb\u8054\u7cfb\uff0c\u5f53\u79c1\u6709\u4ed3\u5e93\u6709\u53d8\u52a8\u65f6\uff0c\u516c\u5f00\u4ed3\u5e93\u4e5f\u8ddf\u7740\u53d8\u52a8\\n  \\n  - \u901a\u8fc7`shell`\u811a\u672c\uff0c\u5f53\u79c1\u6709\u4ed3\u5e93\u7684\u5185\u5bb9\u88ab\u66f4\u65b0\u540e\uff0c\u6267\u884c\u811a\u672c\u5c06\u79c1\u6709\u4ed3\u5e93\u4e2d\u7684`public/`\u5185\u7684\u6240\u6709\u6587\u4ef6\u4e0a\u4f20\u81f3\u516c\u5f00\u4ed3\u5e93\u7684\u6307\u5b9a\u5206\u652f\uff0c\u5b8c\u6210\u90e8\u7f72\\n  - \u901a\u8fc7\u5728\u79c1\u6709\u4ed3\u5e93\u521b\u5efa`Github Actions`\u7684`workflows`\u7684\u65b9\u5f0f\u81ea\u52a8\u5b8c\u6210\u4e0a\u9762\u7684\u52a8\u4f5c\ud83d\udc4f\u3002\\n\\n\u672c\u7740\u80fd\u81ea\u52a8\u5c31\u4e0d\u624b\u52a8\u7684\u539f\u5219\uff0c\u5f53\u7136\u8981\u91c7\u7528`Github Actions`\u7684\u65b9\u5f0f\u8ba9\u5b83\u81ea\u52a8\u5b8c\u6210\uff0c\u522b\u6765\u70e6\u6211\u54af\ud83d\ude0e\u3002\\n\\n### \u6388\u6743\u95ee\u9898\\n\\n\u5c31\u662f\u56e0\u4e3a\u8fd9\u4e2a\u95ee\u9898\uff0c\u65f6\u95f4\u5982\u6d41\u6c34\u822c\u4e00\u53bb\u4e0d\u8fd4\u3002\ud83d\ude11\\n\\n![pre-auth](img/useHugo_auth_pre.png) \\n\\n\u56e0\u4e3a\u516c\u5f00\u4ed3\u5e93\u548c\u79c1\u6709\u4ed3\u5e93\u662f\u4e24\u4e2a\u5355\u72ec\u7684\u4ed3\u5e93\uff0c\u6240\u4ee5\u9700\u8981\u4f7f\u7528`Personal access token`.\u5176\u76ee\u7684\u662f\u4e3a\u4e86\u8ba9`worksflows`\u53ef\u4ee5\u4f7f\u7528`git`\u7684api\\n\\n#### \u521b\u5efa`Personal access token`\\n\\n\u8fd9\u91cc\u6709\u4e24\u79cd\u65b9\u5f0f\uff0c\u5b98\u65b9\u63a8\u8350\u7684\u7b2c\u4e00\u79cd\uff0c\u6211\u5b9e\u8df5\u7684\u65f6\u5019\u4f7f\u7528\u7684\u7b2c\u4e8c\u79cd\ud83d\ude1b\\n\\n- [Creating a fine-grained personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token) \\n- [Creating a personal access token (classic)](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic)\\n\\n\u5f00\u59cb\u521b\u5efa\\n\\n![pat-pre](img/useHugo_pat-pre.png)![pat-pre](img/useHugo_pat-pre2.png) \\n\\n\u8fd9\u91cc\u56e0\u4e3a\u6211\u521b\u5efa\u8fc7`Personal access token`\uff0c\u6240\u4ee5\u8ddf\u6ca1\u6709\u521b\u5efa\u8fc7\u7684\u4e0d\u4e00\u6837\u3002\u70b9\u51fb`Generate new token`\u53ef\u4ee5\u518d\u5efa\u3002\u70b9\u51fb\u4e4b\u524d\u521b\u5efa\u8fc7\u7684`token`, \u53ef\u4ee5\u8fdb\u53bb\u9009\u62e9\u91cd\u65b0\u751f\u6210\u3002\\n![pat-pre](img/useHugo_pat.png) \\n\\n\u5728\u914d\u7f6e\u9875\u9762\u52fe\u9009\u5b8c\u6743\u9650\uff0c\u8bbe\u7f6e\u540d\u5b57\u540e\u4fdd\u5b58\uff0c\u4f1a\u751f\u6210\u4e00\u4e32`key`\uff0c\u7a0d\u5fae\u5b58\u4e00\u4e0b\uff0c\u8981\u7ed9\u79c1\u6709\u5e93\u521b\u5efa`Secrets`\u7528\uff0c\u4e5f\u53ef\u4ee5\u91cd\u65b0\u751f\u6210\u3002\\n\\n#### \u79c1\u6709\u5e93\u6dfb\u52a0`Secrets`\\n\\n\u5176\u76ee\u7684\u662f\u4e3a\u4e86\u52a0\u5bc6`Personal access token`.\u5982\u679c\u6709\u4e00\u5929\uff0c\u6211\u4eec\u66f4\u6362\u4e86`Personal access token`\uff0c\u5c31\u8981\u540c\u6b65\u4fee\u6539`workflows`\u3002\u4f7f\u7528\u88ab\u52a0\u5bc6\u7684`token`\uff0c\u4e0d\u4ec5\u53ef\u4ee5\u5728`workflows`\u4e2d\u52a8\u6001\u8bfb\u53d6`token`\u8fd8\u53ef\u4ee5\u8ba9\u4fe1\u606f\u66f4\u52a0\u5b89\u5168\u3002\\n\\n![create secrets](img/useHugo_secrets.png)![secrets2](img/useHugo_secrets2.png)\\n\\n\u5982\u679c\u6743\u9650\u6ca1\u914d\u597d\u5728`workflows`\u8fd0\u884c\u7684\u65f6\u5019\u5c31\u4f1a\u51fa\u73b0`fatal: could not read Username for \'https://github.com\': No such device or address`\u7684\u62a5\u9519\\n\\n\\n### \u521b\u5efa\u516c\u5f00\u4ed3\u5e93\\n\\n![public repo](img/useHugo_public-repo.png) \\n\\n\u8bb0\u5f97\u914d\u7f6e`Github Pages`\u3002\u5982\u679c\u516c\u5f00\u4ed3\u5e93\u6709`gh-pages`\u5206\u652f\uff0c\u8be5\u4ed3\u5e93\u4f1a\u88ab\u9ed8\u8ba4\u8bbe\u7f6e`Github Pages`\uff0c\u4e14\u5176\u89e6\u53d1\u90e8\u7f72\u7684\u5206\u652f\u5373\u4e3a`gh-pages`.\u8be5\u5206\u652f\u88ab`push`\u540e\u4f1a\u89e6\u53d1\u8d44\u6e90\u90e8\u7f72\u673a\u5236\u81ea\u52a8\u5c06\u8d44\u6e90\u90e8\u7f72\u53d1\u5e03\u3002\u4e0b\u9762\u7684\u4f8b\u5b50\u662f\u4f7f\u7528\u7684`main`\u5206\u652f\uff0c\u9700\u8981\u624b\u52a8\u8bbe\u7f6e`Github Pages`\uff0c\u4ecd\u7136\u4f7f\u7528**\u5206\u652f\u89e6\u53d1**\u7684\u65b9\u5f0f\u8fdb\u884c\u8d44\u6e90\u90e8\u7f72.\\n\\n![public pages](img/useHugo_public-pages.png) \\n\\n### \u521b\u5efa\u79c1\u6709\u4ed3\u5e93\\n\\n![\u521b\u5efa\u79c1\u6709\u4ed3\u5e93](img/useHugo_create-repo.png)\\n\\n### \u521b\u5efaworkflows\\n\\n\u8981\u5728**\u79c1\u6709\u4ed3\u5e93**\u521b\u5efa`workflows`.\\n\\n![\u521b\u5efaworkflows](img/useHugo_create-workflows.png)\\n\\n\u8fd9\u91cc\u6211\u4eec\u9009\u5b89\u88c5\u81ea\u5df1\u7684`workflows`\u5c31\u53ef\u4ee5\u4e86\uff0c\u4e3a\u907f\u514d\u51fa\u9519\u5176\u914d\u7f6e\u5185\u5bb9\u5c3d\u91cf\u548c\u6211\u4e0b\u9762\u7ed9\u51fa\u7684\u914d\u7f6e\u5185\u5bb9\u4e00\u81f4\u3002\\n\\n```toml\\n# Sample workflow for building and deploying a Hugo site to GitHub Pages\\nname: Deploy Hugo site to Pages\\n\\non:\\n  # push \u89e6\u53d1actions\u3002Runs on pushes targeting the default branch\\n  push:\\n    # main\u5206\u652f\u4e0a\u7684push\u89e6\u53d1actions\\n    branches: [\\"main\\"]\\n\\n  # Allows you to run this workflow manually from the Actions tab\\n  # workflow_dispatch:\\n\\njobs:\\n  # Build job\\n  build:\\n    runs-on: ubuntu-latest\\n    env:\\n      HUGO_VERSION: 0.117.0\\n    steps:\\n      - name: Checkout\\n        uses: actions/checkout@v3\\n      - name: push to Github Pages repository\\n        working-directory: ./public\\n        # echo \\"<domain>\\" > CNAME \u4f7f\u7528\u81ea\u5b9a\u4e49\u57df\u540d\u7684\u8bdd\uff0c\u53ef\u4ee5\u628a\u8fd9\u4e2a\u52a0\u5728git init\u4e0a\u9762.\\n        # \u8fd9\u4e9b\u5730\u65b9\u9700\u8981\u4fee\u6539\uff1aYOUR_NAME\uff08\u53ef\u4ee5\u968f\u610f\uff09\u3001YOUR_EMAIL\u3001YOUR_COMMIT_MESSAGE\u3001YOUR_PERSONAL_ACCESS_TOKEN\u3001\\n        # YOUR_USERNAME\uff08\u4f60\u7684github\u8d26\u6237\u540d\uff09\u3001YOUR_PUBLIC_REPO_NAME\uff08\u516c\u5f00\u4ed3\u5e93\u540d\uff09\\n        run: |\\n          git init\\n          git checkout -b main\\n          git add -A\\n          git -c user.name=\\"YOUR_NAME\\" -c user.email=\\"YOUR_EMAIL\\" commit -m \\"YOUR_COMMIT_MESSAGE\\"\\n          git remote add origin https://${{secrets.YOUR_PERSONAL_ACCESS_TOKEN}}@github.com/YOUR_USERNAME/YOUR_PUBLIC_REPO_NAME.git\\n          git push origin main -f -q\\n```\\n\\n![edit workflows](img/useHugo_edit-workflows.png) \\n\\n### \u6492\u82b1\ud83c\udf89\\n\\n`workflows`\u7684\u53d8\u66f4\u88ab`commit`\u4e4b\u540e\uff0c\u5c31\u53ef\u4ee5\u5728`Actions`\u9762\u677f\u4e2d\u770b\u5230`workflows`\u7684\u8fd0\u884c\u8bb0\u5f55\u4e86\u3002\\n\\n![workflows log](img/useHugo_workflows.png)\\n\\n\u53e6\u5916\uff0c\u516c\u5f00\u4ed3\u5e93\u4e5f\u56e0\u4e3a\u6709\u4e4b\u524d\u914d\u7f6e`Github Pages`\u65f6\u8bbe\u7f6e\u7684\u56e0\u5206\u652f\u4ee3\u7801\u6539\u52a8\u800c\u89e6\u53d1\u90e8\u7f72\u7684\u914d\u7f6e\uff0c\u5728`Actions`\u9762\u677f\u4e5f\u80fd\u770b\u5230\u5bf9\u5e94\u7684\u90e8\u7f72\u8bb0\u5f55\\n\\n![finish](img/useHugo_finish.png) \\n\\n# \u611f\u6069\\n\\n[SSH vs. HTTPS for Git: Which One Should You Use?](https://phoenixnap.com/kb/git-ssh-vs-https)\\n\\n[SSH\u516c\u94a5\u767b\u5f55\u539f\u7406]( https://www.cnblogs.com/scofi/p/6617394.html )\\n\\n[About authentication to GitHub](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github)\\n\\n[Managing your personal access tokens\\n](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) \\n[GitHub \u79c1\u6709\u4ed3\u5e93\u514d\u8d39\u5f00\u542f GitHub Pages \u7684\u53ef\u884c\u6027\u65b9\u6848](https://juejin.cn/post/7120474763910676488)\\n\\n[\u901a\u8fc7 GitHub Actions \u5b9e\u73b0\u79c1\u6709\u4ed3\u5e93\u7684\u514d\u8d39 Github Pages \u90e8\u7f72](https://juejin.cn/post/7008847699919241229)\\n\\n[\u5982\u4f55\u4f7f\u7528Hugo\u5728GitHub Pages\u4e0a\u642d\u5efa\u514d\u8d39\u4e2a\u4eba\u7f51\u7ad9](https://zhuanlan.zhihu.com/p/37752930)\\n\\n[\u5c06hugo\u535a\u5ba2\u90e8\u7f72\u5230github](https://www.wenhui.space/docs/04-build-blog-site/hugo_deploy_to_github/)\\n\\n[HUGO](https://kuang.netlify.app/blog/hugo.html)"},{"id":"/2023/09/04/React\u5b66\u4e60\u8bb0\u5f55-\u524d\u7f6e\u77e5\u8bc6","metadata":{"permalink":"/blog/index/2023/09/04/React\u5b66\u4e60\u8bb0\u5f55-\u524d\u7f6e\u77e5\u8bc6","source":"@site/blog/2023/09/04/React\u5b66\u4e60\u8bb0\u5f55-\u524d\u7f6e\u77e5\u8bc6.md","title":"React\u5b66\u4e60\u8bb0\u5f55-\u524d\u7f6e\u77e5\u8bc6","description":"React \u662f\u4f7f\u7528JavaScript\u6784\u5efa\u5feb\u901f\u54cd\u5e94\u7684\u5927\u578bweb\u5e94\u7528\u7a0b\u5e8f\u7684\u9996\u9009\u65b9\u5f0f","date":"2023-08-19T12:01:20.000Z","formattedDate":"2023\u5e748\u670819\u65e5","tags":[],"readingTime":3.5,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"React\u5b66\u4e60\u8bb0\u5f55-\u524d\u7f6e\u77e5\u8bc6","date":"2023-08-19T12:01:20.000Z"},"prevItem":{"title":"\u4f7f\u7528Hugo\u6784\u5efa\u4e2a\u4eba\u535a\u5ba2\u5e76\u6258\u7ba1\u81f3Github Pages","permalink":"/blog/index/2023/09/04/\u4f7f\u7528Hugo\u6784\u5efa\u4e2a\u4eba\u535a\u5ba2\u5e76\u6258\u7ba1\u81f3Github Pages"}},"content":"> React \u662f\u4f7f\u7528`JavaScript`\u6784\u5efa**\u5feb\u901f\u54cd\u5e94**\u7684\u5927\u578b`web`\u5e94\u7528\u7a0b\u5e8f\u7684\u9996\u9009\u65b9\u5f0f\\n\\n\x3c!-- truncate --\x3e\\n\\n\u5f71\u54cd\u6d4f\u89c8\u5668\u5feb\u901f\u76f8\u5e94\u7684\u573a\u666f\uff1a\\n1. \u300cCPU\u300d\u74f6\u9888\uff1a\u5927\u8ba1\u7b97\u91cf\u6216\u8bbe\u5907\u6027\u80fd\u4e0d\u8db3\u5bfc\u81f4\u7684\u9875\u9762\u5361\u5e27\u3001\u5361\u987f\\n2. \u300cIO\u74f6\u9888\u300d\uff1a\u7f51\u7edc\u8bf7\u6c42\u7684\u65f6\u5ef6\u957f\u5bfc\u81f4\u9875\u9762\u4e0d\u80fd\u5feb\u901f\u6839\u636e\u6570\u636e\u8fdb\u884c\u9875\u9762\u6e32\u67d3\u5bfc\u81f4\u9875\u9762\u767d\u5c4f\u65f6\u95f4\u957f\uff0c\u5361\u987f\u3002\\n\\n# \u6d4f\u89c8\u5668\u57fa\u672c\u77e5\u8bc6\\n\\n## \u6d4f\u89c8\u5668\u8fdb\u7a0b\\n\\n- \u4e3b\u8fdb\u7a0b\\n- GPU\u8fdb\u7a0b\\n- \u63d2\u4ef6\u8fdb\u7a0b\\n- \u6e32\u67d3\u8fdb\u7a0b\\n  - js\u5f15\u64ce\u7ebf\u7a0b\\n  - \u4e8b\u4ef6\u89e6\u53d1\u7ebf\u7a0b\\n  - \u5b9a\u65f6\u5668\u89e6\u53d1\u7ebf\u7a0b\\n  - \u5f02\u6b65http\u8bf7\u6c42\u7ebf\u7a0b\\n  - GUI\u6e32\u67d3\u7ebf\u7a0b\\n- \u7f51\u7edc\u8fdb\u7a0b\\n\\n\u66f4\u591a\u53ef\u4ee5\u770b\u4e0b\u8fd9\u91cc\uff1a[\u809d\u4e86\u4e00\u665a\u7684\u6d4f\u89c8\u5668\u6e32\u67d3\u8fdb\u7a0b](https://juejin.cn/post/7018532992410714142) \\n\\n## \u6e32\u67d3\u5e27\\n> **\u6e32\u67d3\u5e27\u662f\u6307\u6d4f\u89c8\u5668\u4e00\u6b21\u5b8c\u6210\u7684\u7ed8\u5236\u8fc7\u7a0b**\uff0c\u5e27\u4e4b\u95f4\u7684\u65f6\u95f4\u95f4\u9694\u662f`DOM`\u8bd5\u56fe\u66f4\u65b0\u7684\u6700\u5c0f\u95f4\u9694\u3002\u7531\u4e8e\u4e3b\u6d41\u7684\u5c4f\u5e55\u5237\u65b0\u7387\u90fd\u572860Hz\uff081000ms/60Hz ~= 16.6ms\uff09\uff0c\u90a3\u4e48\u6e32\u67d3\u4e00\u5e27\u7684\u65f6\u95f4\u5fc5\u987b\u572816.6ms\u5185\u624d\u80fd\u4e0d\u6389\u5e27\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u6bcf\u6b21\u6e32\u67d3\u90fd\u8981\u572816.6ms\u5185\u5b8c\u6210\u9875\u9762\u624d\u591f\u6d41\u7545\u4e0d\u4f1a\u6709\u5361\u987f\u611f\u3002\u8fd9\u6bb5\u65f6\u95f4\u5185\u6d4f\u89c8\u5668\u9700\u8981\u5b8c\u6210\u5982\u4e0b\u4e8b\u60c5\\n> \\n> 1. \u811a\u672c\u6267\u884c\uff08JavaScript\uff09\uff1a\u811a\u672c\u9020\u6210\u4e86\u9700\u8981\u91cd\u7ed8\u9875\u9762\u7684\u6539\u52a8\uff0c\u6bd4\u5982\u589e\u5220DOM\u3001\u8bf7\u6c42\u52a8\u753b\u7b49\\n> 2. \u6837\u5f0f\u8ba1\u7b97\uff08CSS Object Modal\uff09\uff1a\u7ea7\u8054\u5730\u751f\u6210\u6bcf\u4e2a\u8282\u70b9\u7684\u751f\u6548\u6837\u5f0f\\n> 3. \u5e03\u5c40\uff08Layout\uff09\uff1a\u8ba1\u7b97\u5e03\u5c40\uff0c\u6267\u884c\u6e32\u67d3\u7b97\u6cd5\\n> 4. \u91cd\u7ed8\uff08Paint\uff09\uff1a\u5404\u5c42\u5206\u522b\u8fdb\u884c\u7ed8\u5236\uff08\u6bd4\u59823D\u52a8\u753b\uff09\\n> 5. \u5408\u6210\uff08Composite\uff09\uff1a\u5408\u6210\u5404\u5c42\u7684\u6e32\u67d3\u7ed3\u679c\\n\\n\u53c8`GUI\u6e32\u67d3\u7ebf\u7a0b`\u4e0e`JS\u7ebf\u7a0b`\u662f\u4e92\u65a5\u7684\uff0c\u6240\u4ee5**JS\u811a\u672c\u6267\u884c** \u548c **GUI\u6e32\u67d3** \u4e0d\u80fd\u540c\u65f6\u6267\u884c\u3002\u5373\u6bcf\u4e2a\u6e32\u67d3\u5e27\u4e2d\u6d4f\u89c8\u5668\u4e3b\u8981\u505a\u7684\u5de5\u4f5c\u5982\u4e0b\\n```txt\\n\u6267\u884cJS => \u7a7a\u95f2 => GUI\u6e32\u67d3(\u7ed8\u5236)\\n```\\n\\n\u5982\u679c\u4e00\u5e27\u7684`JS`\u6267\u884c\u7684\u65f6\u95f4\u8fc7\u957f\uff0c\u5c31\u4f1a\u4e22\u6389\u4e00\u6b21\u5e27\u7684\u7ed8\u5236\u3002\\n\\n# React\u5982\u4f55\u51cf\u5c11\u5361\u987f\\n\\n> \u6d4f\u89c8\u5668\u5728\u6bcf\u4e00\u5e27\u7684\u7ed8\u5236\u8fc7\u7a0b\u4e2d\uff0c\u4f1a\u9884\u7559\u4e00\u4e9b\u65f6\u95f4\u7ed9`JS`\u7ebf\u7a0b\u3002`React`\u5229\u7528\u8fd9\u90e8\u5206\u65f6\u95f4\u66f4\u65b0\u7ec4\u4ef6\u3002\u5982\u679c\u5728\u4e00\u5e27\u4e2d\u6d4f\u89c8\u5668\u7ed9`JS`\u7ebf\u7a0b\u9884\u7559\u7684\u65f6\u95f4\u4e0d\u591f\u7528\u65f6\uff0c`React`\u4f1a\u5c06\u7ebf\u7a0b\u63a7\u5236\u6743\u4ea4\u6362\u7ed9\u6d4f\u89c8\u5668\uff0c\u4f7f\u5176\u53ef\u4ee5\u6709\u65f6\u95f4\u6e32\u67d3UI\uff0c`React`\u5219\u7b49\u5f85\u4e0b\u4e00\u5e27\u65f6\u95f4\u5230\u6765\u65f6\u7ee7\u7eed\u88ab\u4e2d\u65ad\u7684\u5de5\u4f5c\u3002\u51cf\u5c11\u6389\u5e27\u7684\u53ef\u80fd\u6027\u3002\\n>\\n> \u8fd9\u79cd\u5c06\u957f\u4efb\u52a1\u62c6\u5206\u5230\u6bcf\u4e00\u5e27\u4e2d\uff0c\u50cf\u8682\u8681\u642c\u5bb6\u4e00\u6837\u4e00\u6b21\u6267\u884c\u4e00\u5c0f\u6bb5\u4efb\u52a1\u7684\u64cd\u4f5c\u88ab\u79f0\u4e3a`\u65f6\u95f4\u5207\u7247`\\n\\n\u53e6\u6709\u9488\u5bf9\u7f51\u7edc\u5ef6\u8fdf\u9020\u6210\u7684\u9875\u9762\u5361\u987f\uff0c`React`\u5185\u90e8\u4e5f\u6709`Suspense`\u529f\u80fd\u5bf9\u5176\u8fdb\u884c\u4f18\u5316\u5904\u7406\u3002\\n\\n# \u5f15\u7528\\n\\n[\u6d4f\u89c8\u5668\u7684 16ms \u6e32\u67d3\u5e27](https://harttle.land/2017/08/15/browser-render-frame.html) \\n\\n[CPU\u7684\u74f6\u9888](https://react.iamkasong.com/preparation/idea.html#cpu\u7684\u74f6\u9888) \\n\\n[\u809d\u4e86\u4e00\u665a\u7684\u6d4f\u89c8\u5668\u6e32\u67d3\u8fdb\u7a0b](https://juejin.cn/post/7018532992410714142)"}]}')}}]);