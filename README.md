## 网站性能优化项目


####Part 1: 优化 index.html 的 PageSpeed Insights 得分

1.首先对图片进行了压缩处理；
2.对style.css压缩后并进行内联处理；
3.print.css用媒体查询处理，只在打印页面加载；
4.对javascript异步加载；


####Part 2: 优化 pizza.html 的 FPS（每秒帧数）

1.通过Performance中找到有性能问题的部分，将获取页面高度var scrollTop =  window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;  的部分放在循环外；
2.背景pizza绘制过多，进行优化；
3.滑块改变pizza尺寸中，简化函数逻辑；