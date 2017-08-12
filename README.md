## 网站性能优化项目

### 说明
该性能优化项目直接下载到本地即可加载运行，并未使用构建工具。

#### Part 1: 优化 index.html 的 PageSpeed Insights 得分
1. 为 print.css 添加了 media="print", 按需加载。
2. 为 analytics.js 添加了 async 属性, 异步加载。
3. 将 style.css 内嵌, 缩短了关键渲染路径长度。 
4. 对网页中引用的图片进行了压缩和裁剪。
5. Google Fonts变为异步加载，通过添加 [ Web Font Loader ](https://www.lockedowndesign.com/load-google-fonts-asynchronously-for-page-speed/)来实现。

#### Part 2: 优化 pizza.html 的 FPS（每秒帧数）

1. 优化了项目中一些for循环，避免重复再DOM查找操作，已在 main.js 中注释
2. 541行： 为 elem 添加了 will-change CSS 属性，避免图层重绘制。
3. 545行： 使用了 requestAnimationFrame 优化绘制动画操作。


