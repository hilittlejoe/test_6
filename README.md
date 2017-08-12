## 网站性能优化项目

尽可能优化这个在线项目的速度。应用之前在[网站性能优化课程](https://cn.udacity.com/course/website-performance-optimization--ud884/)中学习的技术来优化关键渲染路径并使这个页面尽可能快的渲染。


### 步骤

#### Part 1: 优化 index.html 的 PageSpeed Insights 得分

1. 强制使用 `https` 协议请求字体数据。
2. 针对 print.css，通过媒体查询取消阻止，优化 CRP。
3. 把开头不必要的 `<script>` 转移至文档末尾，并使用 `async` 取消阻止。
4. 最终生成页面的时候消除换行及注释，以压缩空间。
5. 压缩图片大小，并在文档中的 `img` 标签中强制设定图片大小。

----

#### Part 2: 优化 pizza.html 的 FPS（每秒帧数）

编辑 views/js/main.js 来优化 views/pizza.html，直到这个网页的 FPS 达到或超过 60fps。
1. 停止 FSL，删除代码中不必要的布局反复。
2. 使用 `requestAnimationFrame` 刷新页面。


### 附录
* [web 性能优化](https://developers.google.com/web/fundamentals/performance/ "web 性能")
* [分析关键渲染路径](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "分析关键渲染路径")
* [优化关键渲染路径](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "优化关键渲染路径！")
* [避免 CSS 渲染阻塞](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "css渲染阻塞")
* [优化 JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [通过 Navigation Timing 进行检测](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api")。在前两个课程中我们没有学习 Navigation Timing API，但它对于自动分析页面性能是一个非常有用的工具。我强烈推荐你阅读它。
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">下载量越少，性能越好</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">减少文本的大小</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">优化图片</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP缓存</a>
