## 网站性能优化项目

你要做的是尽可能优化这个在线项目的速度。注意，请应用你之前在[网站性能优化课程](https://cn.udacity.com/course/website-performance-optimization--ud884/)中学习的技术来优化关键渲染路径并使这个页面尽可能快的渲染。

开始前，请导出这个代码库并检查代码。

### 指南

####Part 1: 优化 index.html 的 PageSpeed Insights 得分

1. inline css: 复制CSS内容到HTML <style> 标签；
2.下载图片到本地，并压缩图片；
3. 部署网页到github.io, 查看pagespeed insight 得分； 网页链接：
  https://maybeatles.github.io/Web_Optimization/

----

####Part 2: 优化 pizza.html 的 FPS（每秒帧数）
                                                                     
1. Chrome developer tools 绘制 time line， 主要瓶颈是强制同步布局：  dx,newwidth,scrollTop 的计算移动到循环的外部。
2. 使用requestAnimationFrame 使动画匹配屏幕刷新率。
3. 使用transform = translateX(100px)方式代替  left 设置。
4. 使用getElementById 代替querySelector 来提高性能。
5. 减少 背景pizza .mover的数量

### 一些关于优化的提示与诀窍
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

### 使用 Bootstrap 并定制样式
这个项目基于 Twitter 旗下的 <a href="http://getbootstrap.com/">Bootstrap框架</a> 制作。所有的定制样式都在项目代码库的 `dist/css/portfolio.css` 中。

* <a href="http://getbootstrap.com/css/">Bootstrap CSS</a>
* <a href="http://getbootstrap.com/components/">Bootstrap组件</a>
