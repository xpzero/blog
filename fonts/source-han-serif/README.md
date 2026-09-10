# 思源宋体网页字体

站点使用 Adobe 官方 **Source Han Serif SC VF 2.003（思源宋体，简体中文默认字形）**。
这是官方字体的 WOFF2 网页子集，不是以 Noto 名称替代的其他字体文件。

- 上游：[adobe-fonts/source-han-serif，2.003R](https://github.com/adobe-fonts/source-han-serif/releases/tag/2.003R)
- 固定提交：`7889f11bf31170b5d092a083b357c8c8130f89e0`
- [官方 TTF 源文件](https://raw.githubusercontent.com/adobe-fonts/source-han-serif/7889f11bf31170b5d092a083b357c8c8130f89e0/Variable/TTF/SourceHanSerifSC-VF.ttf)
- 源文件 SHA-256：`04f163fb935acd9c0caa79e535a43d510a724d25e584d36212e494a9f9db64f4`
- [原始许可证](./OFL.txt)：SIL Open Font License 1.1。字体内部保留上游版权和许可证信息。

## 修改与名称

网页版本进行了 Unicode 字符分片和 WOFF2 压缩，保留原始字形设计、250–900 的可变字重及源字体全部 44,779 个基础 cmap 字符。
网页分片未包含源字体的 25 条变体选择符序列；普通简体中文阅读不依赖这些序列。
由于上游许可证保留了 `Source` 名称，修改后的子集内部名称及 CSS 字体名称使用 **Kehan Serif**。
这些字体仍依据 SIL OFL 1.1 分发；`Kehan Serif` 是本网站的子集名称，不代表独立设计的字体。

## 加载方式

字体源文件位于 `src/assets/fonts/source-han-serif/`，通过
`src/css/fonts/source-han-serif.css` 的 `@font-face` 引用，由 Docusaurus 生成带内容哈希的同源资源地址，并自动带上 `/blog/` 基础路径。

浏览器根据 `unicode-range` 下载当前页面实际需要的字符分片；正文与标题共享同一份可变字体，400、500、600、700 字重不需要各下载一份字体。
`font-display: swap` 允许在字体下载前先显示系统后备字体。成功加载后无需访客安装字体，也不依赖 Google Fonts 或其他第三方字体 CDN。
浏览器关闭网页字体、字体请求失败或源字体本身不包含某个字符时，使用后备字体。

全部源字体字符都保留在分片中，后续新增文章不需要重新生成字体。代码块和行内代码继续使用等宽字体。
`manifest.json` 记录完整来源、字符范围、字重、每个字体文件的字节数和 SHA-256。

## 重新生成

普通 `pnpm build` 只打包已生成的字体，不需要 Python 或字体处理依赖。
只有升级字体或重新分组时才需要准备源 TTF、上游 LICENSE 和 `fonttools[woff]==4.59.2`：

```sh
uv run --no-project --with 'fonttools[woff]==4.59.2' \
  python scripts/prepare-source-han-serif.py /path/to/SourceHanSerifSC-VF.ttf /path/to/LICENSE.txt
```

命令须在仓库根目录运行。生成器会检查固定源文件校验和、每个 WOFF2 的字符覆盖、内部名称和可变字重。
重新生成后运行 `pnpm build`，并核实生成字体在 `/blog/assets/` 下正常提供。
