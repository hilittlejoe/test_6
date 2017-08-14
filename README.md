## 网站性能优化项目

你要做的是尽可能优化这个在线项目的速度。注意，请应用你之前在[网站性能优化课程](https://cn.udacity.com/course/website-performance-optimization--ud884/)中学习的技术来优化关键渲染路径并使这个页面尽可能快的渲染。

开始前，请导出这个代码库并检查代码。

### 指南

####Part 1: 优化 index.html 的 PageSpeed Insights 得分

以下是几个帮助你顺利开始本项目的提示：

1. 将这个代码库导出
2. 你可以运行一个本地服务器，以便在你的手机上检查这个站点

```bash
  $> cd /你的工程目录
  $> python -m SimpleHTTPServer 8080
```

1. 打开浏览器，访问 localhost:8080
2. 下载 [ngrok](https://ngrok.com/) 并将其安装在你的工程根目录下，让你的本地服务器能够被远程访问。

``` bash
  $> cd /你的工程目录
  $> ./ngrok http 8080
```

1. 复制ngrok提供给你的公共URL，然后尝试通过PageSpeed Insights访问它吧！可选阅读：[更多关于整合ngrok、Grunt和PageSpeed的信息](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)。

接下来，你可以一遍又一遍的进行配置、优化、检测了！祝你好运！
#### 优化步骤
#####1、清除首屏内容中阻止呈现的 JavaScript 和 CSS
#####2、阻止呈现的js（analytics）调整为异步
<script async src="http://www.google-analytics.com/analytics.js"></script>
#####3、通过media query创造 非阻塞式 的CSS（print）读取
<link href="css/print.css" rel="stylesheet" media="print">
#####4、style样式改为内联样式
<link href="css/style.css" rel="stylesheet">
#####5、删除非关键的但阻止呈现的css
<link href="//fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet">
#####6、调整pizzeria和pizza、profilepic图片的大小，profilepic.jpg以及pizzeria.jpg重新命名为png
#####7、图片下载到本地并进行压缩
https://lh4.ggpht.com/kJEnfqhPvtm4m3EneSZ4fWYGS8lW4YNhEjk6zPkyrQaBUHc-2Y_ElDic99NHI0h-UBLXVbRCjFybFvrWxdk=s100
https://lh6.ggpht.com/f_0W8h__3G99CWTjnMjD8BUKm7yp2-wJyApLtTwFoFtlal2ULf_JgHIsOQq2NiYfKOdMlXlMHDKNo5XVZLs=s100
https://lh5.ggpht.com/IKdCmTWn8a2nMhlwMYzryvzRN5CUZAOBr4tDrEAbszV7TIFe9pRAInA4kkYcgTXwrifJsBEsq1agTueuu-g=s100
#####优化perfmatters.js和style.css，减少不必要的空格
 
####Part 2: 优化 pizza.html 的 FPS（每秒帧数）

你需要编辑 views/js/main.js 来优化 views/pizza.html，直到这个网页的 FPS 达到或超过 60fps。你会在 main.js 中找到一些对此有帮助的注释。

你可以在 Chrome 开发者工具帮助中找到关于 FPS 计数器和 HUD 显示的有用信息。[Chrome 开发者工具帮助](https://developer.chrome.com/devtools/docs/tips-and-tricks).

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
#### 优化步骤
####1、changePizzaSizes
#####减少不必要的强制布局，document.querySelectorAll(".randomPizzaContainer")访问一次即可无需在循环中访问
#####determineDx函数反复调用直接去掉
####2、在页面加载时创建并插入了所有的披萨，无需在循环中获取样式
####3、updatePositions
#####减少document.body.scrollTop的反复调用，仅读取一次布局属性
####4、每一帧开始前加载js 采用requestAnimationFrame