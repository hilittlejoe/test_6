## 网站性能优化项目

###Run Project
  open index.html
  
####Part 1: 优化 index.html 的 PageSpeed Insights 得分

  PageSpeed Insights 测试地址: http://zenkrul.com

  * 内联 CSS 样式
  * 异步加载 js
  * 使用媒体查询标记打印样式
  * 压缩图片大小

####Part 2: 优化 pizza.html 的 FPS（每秒帧数）

  1. 滑动时会调用函数 updatePositions, 函数用造成多重渲染,优化此函数  
  2. 滑动 slider 会调用函数 changePizzaSizes 此函数有无用的js计算以及会造成多重渲染, 优化此函数