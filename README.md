## 网站性能优化项目

### 1. 如何运行本项目
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

### 2. 提升index.html的PageSpeed分数
##### 采取措施:
1. script异步加载,加入async
2. 增加缓存处理,增加expires配置
3. 图片做了压缩处理
4. style.css嵌入index.html以缩短关键渲染路径长度
5. print.css变为异步加载
6. Google Fonts css做了异步加载

### 3. 去除pizza.html页面卡顿
##### 采取措施:
1. 取消没有用的背景移动,window.addEventListener('scroll', updatePositions); 取消了updatePositions函数
2. 重构changePizzaSizes函数,先读取样式而后执行更改以避免强制同步布局问题。
3. 使用 requestAnimationFrame 优化 updatePositions 中的绘制动画操作。
4. 为披萨增加了 will-change CSS 属性,可以避免图层重绘制。


### 第二次提交
#### 优化点
1. querySelector* 替换为效率更高的getElementByClassName
2. 之前取document.body.scrollTop值,改为取window.pageYOffset值
3. 修复找不到frame的bug
4. 取消注释背景交互效果
5. index.html和pizza.html共用的图片pizzaria.jpg分别采取了resize和压缩处理,提高加载效率
