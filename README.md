## 网站性能优化项目

####Part 1: 优化 index.html 的 PageSpeed Insights 得分

1. 使用gulp和imagemin压缩图片大小，其中可能适量减少图片质量以满足PageSpeed Insights要求。
2. 将style.css压缩并内嵌到页面内，为print.css引用添加media="print"属性以防止阻塞。
3. 将脚本应用放到body底部，可防止阻塞。
4. 去除网页字体应用，极大提升页面加载速度。

####Part 2: 优化 pizza.html 的 FPS（每秒帧数）

1. 将循环中用到的document.querySelectorAll("randomPizzaContainer");保存到变量中，以防止浏览器反复获取元素样式。
2. 往页面中插入大量元素时，使用document.createDocumentFragment()可极大提高性能。
3. determineDx()重复获取元素样式明显是无意义的，把它干掉。