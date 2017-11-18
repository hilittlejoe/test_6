## 网站性能优化项目

### 如何运行
本项目未使用构建工具，在本地打开index.html即可运行。

### 优化内容
#### index页面

1. 将 print.css添加 media:print 属性
2. 将 fonts.googleapis.com 引用注释掉
3. 将 http://www.google-analytics.com/analytics.js 变为异步加载
4. 将 style.css 内联以缩短关键渲染路径长度
5. 对 index.html 中引用的图片改为本地链接进行了压缩
6. 将 css,js,html 全部压缩

#### 对pizza页面的 FPS 优化

1. 405行，调整函数 changeSliderLabel 减少 querySelector 执行
2. 对 changePizzaSizes 函数进行了重构
3. 458行，将变量 pizzasDiv 移出for循环
4. 492行，用 requestAnimationFrame 优化 updatePositions 中的绘制动画
5. 为披萨滑窗增加了 will-change CSS 属性