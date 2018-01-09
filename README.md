# 优达学城前端（进阶）纳米学位项目三

## 网站性能优化项目

你要做的是尽可能优化这个在线项目的速度。注意，请应用你之前在[网站性能优化课程](https://cn.udacity.com/course/website-performance-optimization--ud884/)中学习的技术来优化关键渲染路径并使这个页面尽可能快的渲染。

开始前，请导出这个代码库并检查代码。

### 优化项

####Part 1: 关键渲染路径：index.html 在移动设备和桌面上的 PageSpeed 分数至少为90分。

为了达到以上目的，我对index.html做出了以下修改：

1. 将Google Fonts字体css文件进行异步加载，以优化页面访问速度。
2. 将style.css内嵌并使用CSS压缩工具进行压缩，以优化页面访问速度。
3. 将print.css加上media标签，使浏览器在打印时调用print.css，以优化页面访问速度。
4. 将不必要的GoogleAnalytics代码去除，并做异步加载处理，以优化页面访问速度。


####Part 2: 优化 pizza.html 的 FPS（每秒帧数）- 对 views/js/main.js 进行的优化可使 views/pizza.html 在滚动时保持 60fps 的帧速。

为了达到以上目的，我对main.js做出了以下修改：

1. 将503行循环代码中获取页面高度代码移出循环，以优化页面运行帧速。
2. 将526行代码中过多的pizza数量减少，以优化页面运行帧速。


####Part 3: 优化计算效率 - 利用 views/pizza.html 页面上的 pizza 尺寸滑块调整 pizza 大小的时间小于5毫秒，大小的调整时间在浏览器开发工具中显示。

为了达到以上目的，我对main.js做出了以下修改：

1. 更新determineDx函数逻辑，使newSize直接等于sizeSwicher数值。
2. 更新changePizzaSize函数逻辑，遍历披萨的元素并改变宽度。



