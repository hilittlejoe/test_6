## 网站性能优化项目

### 介绍

应用之前在[网站性能优化课程](https://cn.udacity.com/course/website-performance-optimization--ud884/)中学习的技术来优化关键渲染路径并使页面尽可能快的渲染。

### 运行

#### 方法一

1. 将这个代码库导出
2. 你可以运行一个本地服务器，以便在你的手机上检查这个站点

```bash
  $> cd /你的工程目录
  $> python -m SimpleHTTPServer 8080
```
#### 方法二

1. 打开浏览器，访问 localhost:8080
2. 下载 [ngrok](https://ngrok.com/) 并将其安装在你的工程根目录下，让你的本地服务器能够被远程访问。

``` bash
  $> cd /你的工程目录
  $> ./ngrok http 8080
```
#### 方法三

右击index.html文件 => 打开方式 => 选择一款本地安装的浏览器

### 优化

#### Part 1: 优化 index.html 的 PageSpeed Insights 得分

* 用 `<link>` 载入外部的资源，需要网络请求，每一次网络请求都会花费不少的时间，会延缓了网页的首次渲染，载入 `style.css` 也会阻止首次渲染,所以把篇幅较短的外部样式修改为内部样式
* `print.css` 资源是用于打印的（而不是屏幕设备），因此可以通过添加媒体查询的方式来避免其阻塞首次渲染
* 由于脚本的同步载入和执行会阻止 DOM 的构建，所以也会延缓网页的首次渲染。可以添加一个 async 属性来避免这个问题
* 图片的文件过大，会需要不少时间来载入，所以通过在线工具：[compressjpeg](http://compressjpeg.com/)来压缩图片，根据图片样式设定的宽高，使用在线应用[reduce images](https://www.reduceimages.com)将图片的宽度缩放,也可使用专业的图形处理软件例如 [Photoshop](https://www.adobe.com/cn/downloads.html?promoid=RL89NGY7&mv=other) 等

#### Part 2: 优化 pizza.html 的 FPS（每秒帧数）

* `querySelector*` 类的方法效率较低，尤其当需要获取大量的网页元素时， 使用 getElementsByClassName、getElementById来获取元素 
* 获取背景网页元素`document.getElementsByClassName("randomPizzaContainer")`以及 `.scrollTop` 移到循环外部，避免布局抖动(强制同步布局)
* 减少背景披萨数量提高滚动网页时候的效率

### 关于优化的提示与诀窍

* [web 性能优化](https://developers.google.com/web/fundamentals/performance/ "web 性能")

* [分析关键渲染路径](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "分析关键渲染路径")

* [优化关键渲染路径](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "优化关键渲染路径！")

* [避免 CSS 渲染阻塞](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "css渲染阻塞")

* [优化 JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")

* [通过 Navigation Timing 进行检测](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api")。 Navigation Timing API：对于自动分析页面性能是一个非常有用的工具。

* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">下载量越少，性能越好</a>

* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">减少文本的大小</a>

* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">优化图片</a>

* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP缓存</a>

### 使用 Bootstrap 并定制样式

这个项目基于 Twitter 旗下的 <a href="http://getbootstrap.com/">Bootstrap框架</a> 制作。所有的定制样式都在项目代码库的 `dist/css/portfolio.css` 中。

* <a href="http://getbootstrap.com/css/">Bootstrap CSS</a>

* <a href="http://getbootstrap.com/components/">Bootstrap组件</a>
