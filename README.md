# 网站性能优化项目

在线网址：[https://wendykin.github.io/website-optimization/](https://wendykin.github.io/website-optimization/)

本项目为优达学城前端进阶项目，对项目提供的网站进行了性能优化。本项目部分思路参考了[优达学城论坛](https://discussions.youdaxue.com)。

本项目使用了gulp自动化构建工具，源代码在src目录下，生产代码在dist目录下。项目根目录下gulpfile.js中代码来自[论坛](https://discussions.youdaxue.com/t/gulp-for-mac/43138)。通过在工程目录中执行gulp build构建生产代码。


## Part 1: 优化 index.html 

* css/font处理

    * 内联style.css内容至index.html的head中，减少请求次数。
    * 设置print.css的媒体查询为media = 'print',避免加载不必要的css资源。
    * 加载字体使用webfontload方式，将字体加载请求转成js放在body末尾，使用wf-loading和wf-active定义未加载完时使用的字体，避免渲染阻塞。
    * 使用gulp减小css文件体积。

* js处理

  * 外联js尽量使用异步加载(async)。
  * 将js文件放在body末尾以避免阻塞。
  * 使用gulp减小js文件体积。

* 图片压缩

    * 使用ps和gulp二次压缩图片。
    * 缩减pizzaria.jpg的长宽，进一步减小图片体积。
    


## Part 2: 优化 pizza.html 的 FPS（每秒帧数）

* 使用gulp进行css/js/图片压缩。

* 内联style.css内容至pizza.html.

* 使用 getElementById 代替 querySelector , 用 getElementsByClassName 代替 querySelectorAll 。

* 修改 addEventListener 中 pizza 个数至40, updatePositions 中phase，减少计算量。

* updatePositions 中 left 使用 transform 代替，避免引起频繁的页面重绘。  
