## Udacity前端项目 -- 网站性能优化项目

这是[Udacity](https://cn.udacity.com)前端开发（进阶）课程的第二个项目，尽可能优化这个原项目的速度。应用之前在[网站性能优化课程](https://cn.udacity.com/course/website-performance-optimization--ud884/)中学习的技术来优化关键渲染路径并使这个页面尽可能快的渲染。[原项目地址在此](https://github.com/udacity/cn-frontend-development-advanced/tree/master/Website%20Optimization_zh)。

Quick Links:

- **[Getting started](#getting-started)**
- **[Optimization overview](#optimization-overview)**
- **[Reference](#reference)**

### Getting started

#### Install

```
 $ npm install
```

#### Usage

1. 直接运行本地版本（未压缩版本）

   ```
    $ gulp
   ```

2. 运行的是distribution版本（经过脚本压缩html, js, css, image的版本）

   ```
    $ gulp serve-dist
   ```

3. 运行的是distribution版本并在命令行中打印pagespeed分数

   ```
    $ gulp serve-psi
   ```

   注意：以上方法均不能实时刷新。另外使用psi测速大概率会由于国内网络原因timeout。

### Optimization overview

这里会简单介绍本项目是如何优化的：

- **index相关**
  1. 移除了web字体的获取，web字体受网络环境制约太大(国内网络环境无法获取google的web字体)。
  2. views/images/pizzeria.jpg图片太大，压缩并缩小了尺寸。
  3. index有几张图片依赖于网络获取，这受网络环境限制，所以我将图片下载到本地，并且进行了压缩。
  4. google-analytics对于页面呈现并不是必须的，可以加上async或者defer的标签。但在国内网络环境下无法连接到google，所以直接移除了相关代码。
  5. style.css较小，为优化首页性能，直接内联。


- **pizza页面相关**
  1. 优化调整 pizza 大小的时间小于5毫秒
  2. 优化 `views/pizza.html` 在滚动时的帧速。

### Reference

- [Setting up PageSpeed Insights to test Performance Locally via Gulp](https://una.im/gulp-local-psi/)
