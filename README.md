## 网站性能优化项目

### 如何开始此应用

以下是几个能帮助你顺利开始本项目的提示:

1. 给谷歌浏览器装上pagespeed insights插件

2. 把项目代码clone到本地

3. 用node搭一个本地服务器

  ```bash
  $> 在终端或命令行中输入 node --version。如果没有内容显示或显示错误，(则需安装 Node）
  $> 输入 npm install -g http-server
  $> 通过输入 http-server ~/Documents/mysite -p 8000 提供文件（将 ~/Documents/mysite 替换为你的项目目录的路径）
  $> 在谷歌浏览器中访问 http://localhost:8000/index，进行测试
  ```

4. 打开后，可以点击Build Your Own 2048!、Website Performance Optimization、Mobile Web Development、Cam's Pizzeria这四个网页的详细介绍。并且，在Cam's Pizzeria这个中，可以使用拖动条，来改变pizza的大小。

# 项目优化

### Index.html优化步骤
* 根据pagespeed的提示，用tinypng把项目里的图片进行压缩；把大图片pizzeria.jpg的尺寸直接改成100x75，使该图片的体积从M级下降到KB级

* 由于没有别的页面共享style.css文件，所以把style.css从外部引用改成内联，可以减少一次请求的时间

* 通过媒体查询的方式把print.css修改为只在打印的时候才加载

* analytics.js添加async属性，改成异步加载该文件

  ​

  ​

### pizza.html的优化

* 把动画函数updatePositions（）放到requestAnimationFrame（）里面，使动画能够并行运行，并且保证优先运行js
* 根据课程内容，determineDx（）函数在网页中不仅没有起作用，还在循环中频繁修改pizza的尺寸改造成强制同步布局，需删除；另外把大pizza的尺寸大小的样式从px改成用百分比来呈现
* document.querySelectorAll(".randomPizzaContainer")函数在文中重复出现达三次，用变量randomPizzas取代，可以节省2次查询节点的时间
* 通过读取浏览器的高度和小pizza的尺寸，来判断页面中最多可以显示多少个小pizza，从而减少生成不必要的小pizza
* 给小pizza的.move样式添加change:transform属性，避免页面在上下滑动时候引起小pizza的重新绘制
