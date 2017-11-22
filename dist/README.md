## 网站性能优化项目

该项目是为了尽可能优化Cameron在线网页的速度。
你可以在[此处](https://github.com/udacity/frontend-nanodegree-mobile-portfolio)找到Cameron网页的GitHub版本。
你可以在[此处](https://github.com/wanyanxx/Website-Optimization_zh)找到修改后网页的GitHub版本。


### 指南

####Part 1: 优化 index.html 的 PageSpeed Insights 得分

以下是几个帮助你顺利开始本项目的提示：

1.将这个项目托管到GitHub上；

2.科利用网页版或客户端PageSpeed Insights进行网页测试；

3.并根据PageSpeed Insights给出的提示进行一遍又一遍的修改，优化，检测。（压缩文件，优化图片，利用内联css，js，使用使用延迟脚本、异步脚本取消js对html解析的阻塞；使用媒体查询取消css对渲染的阻塞）

----

####Part 2: 优化 pizza.html 的 FPS（每秒帧数）

你需要编辑 views/js/main.js 来优化 views/pizza.html，直到这个网页的 FPS 达到或超过 60fps。你会在 main.js 中找到一些对此有帮助的注释。

1. 优化图片

2. 利用开发者工具。你可以在 Chrome 开发者工具帮助中找到关于 FPS 计数器和 HUD 显示的有用信息。

3. 对pizza放大、缩小动画进行优化（停止FLS）


4. 对pizza对pizza移动滑窗进行优化，是网页滚动时能够达到60fps（pizza图片的数量，处理强制性同步问题，压缩图片,querySelectorAll更改成getElementByClass）

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
