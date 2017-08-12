## 网站性能优化项目

### 如何运行本应用
直接将库下载到本地然后用浏览器打开index.html即可运行，或者，你也可以访问本项目的 [GitHub Pages](https://yuliangji.github.io/WebsiteOptimization/index.html) 来运行。

### 对 index.html 进行的优化概述
* 将 print.css和Google Fonts css变为异步加载，通过添加 media:print 属性 和[ Web Font Loader ](https://www.lockedowndesign.com/load-google-fonts-asynchronously-for-page-speed/)来实现。
* 将 style.css 嵌入 index.html 以缩短关键渲染路径长度。
* 对 index.html 中引用的图片进行了压缩。

最终[Google PageSpeed Insights 评分] 94 移动设备/96 桌面设备。

### 对 pizza.html 的 FPS （每秒帧数）进行的优化概述
* 参考[避免强制同步布局](https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing#_2)对 changePizzaSizes
  函数进行了重构，先读取样式而后执行更改以避免强制同步布局问题。
* 使用 requestAnimationFrame 优化 updatePositions 中的绘制动画操作。
* 为披萨滑窗增加了 will-change CSS 属性，这样每一个 pizza 都会有自己的图层，可以避免图层重绘制。
* 最终在 Chrome 开发工具的 Rendering-FPS Meter 中滚动页面可以看到fps稳定在60。
