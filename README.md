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

----

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
## 总结
### 成功运行index.html：
1. 打开cmd窗口输入npm -v 检测node.js是否安装成功
2. 接着在命令行输入 npm install http-server -g 代表全局安装本地服务器
3. 找到你项目所在文件的路径，复制路径到cmd  完整命令如下：cd C:\Users\Administrator\Desktop\Website Optimization_zh
4. 在命令行输入http-server 即可在此文件下打开服务器，可以看到域名和端口号 127.0.0.0:8080
5. 打开浏览器，输入域名和端口号，即可借用本地服务器打开index.html
6. 借用chrome开发者工具pagespeed对web端和移动端进行测试，不断优化调整
### 利用pagespeed优化
* 压缩
* 优化图片
* 调整图片大小
* 减少资源加载
* 使得外联型CSS改成内嵌式
### 去除卡顿
#### part1 对 views/js/main.js 进行的优化可使 views/pizza.html 在滚动时保持 60fps 的帧速
* 针对changeSliderLabel函数进行“var pizzaSize_qs = document.querySelector("#pizzaSize")”函数变量的提取
* 重写changePizzaSizes函数：
```bash
function changePizzaSizes(size) {
      var randomPizzaContainer_qs = document.querySelectorAll(".randomPizzaContainer");
    for (var i = 0; i < randomPizzaContainer_qs.length; i++) {
     function sizeSwitcher (size) {
      switch(size) {
        case "1":
          return 23;
        case "2":
          return 33.33;
        case "3":
          return 50;
        default:
          console.log("bug in sizeSwitcher");
      }
  }
      randomPizzaContainer_qs[i].style.width = sizeSwitcher (size) + '%';
    }
  }
```
#### part2 利用 views/pizza.html 页面上的 pizza 尺寸滑块调整 pizza 大小的时间小于5毫秒，大小的调整时间在浏览器开发工具中显示。
* 改变updatePositions函数
```bash
window.addEventListener('scroll', updatePositions);//函数变量提前
function updatePositions() {
  frame++;
  window.performance.mark("mark_start_frame");
  var items = document.querySelectorAll('.mover');
  var scroll_i = document.body.scrollTop;
  for (var i = 0; i < items.length; i++) {
    var phase = Math.sin(( scroll_i/ 1250) + (i % 5));
    items[i].style.left = items[i].basicLeft + 100 * phase + 'px';
  }
```
* 对插入的所有披萨变量提前至for循环外
```bash
//这个for循环在页面加载时创建并插入了所有的披萨
var pizzasDiv = document.getElementById("randomPizzas");
for (var i = 2; i < 100; i++) {
  pizzasDiv.appendChild(pizzaElementGenerator(i));
}
```
* 当页面加载时生成披萨滑窗--对加载的披萨数量进行控制，根据浏览器窗口进行数量的控制
```bash
document.addEventListener('DOMContentLoaded', function() {
  var cols = 8;
  var s = 256;
  //获取浏览器窗口大小
  var winWidth_win = window.innerWidth;
  var winHeight_win = window.innerHeight;
  var num_pizza =null;
    if(winWidth_win<=1024){
        num_pizza = 24;
    }
    else if(winWidth_win>1024){
        num_pizza = 50;
    }
    
  for (var i = 0; i < num_pizza; i++) {
    var elem = document.createElement('img');
    elem.className = 'mover';
    elem.src = "images/pizza.png";
    elem.style.height = "100px";
    elem.style.width = "73.333px";
    elem.basicLeft = (i % cols) * s;
    elem.style.top = (Math.floor(i / cols) * s) + 'px';
    document.getElementById("movingPizzas1").appendChild(elem);
  }
  updatePositions();
}
```
* 对main.js中的id及class用getElementById、getElementsByClassName进行获取







