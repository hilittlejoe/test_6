# index.html 在移动设备和桌面上的 PageSpeed 分数至少为90分
将任务分成三部分

- [] 压缩图片
- [] 处理css加载
- [] 异步加载js

## 压缩图片
 
主要压缩 'views/images/pizzeria.jpg' 这张图片

## 处理css加载

看到 'index.html' 一共有三处CSS link

- 用JS代码工具异步加载google fonts

- 对于晓得css文件，我们选择**压缩之后**内联进 'index.html' 文件中

- <link href="css/print.css" rel="stylesheet">只有在打印的时候才会用到，对其添加 'media=print' 属性

## 异步加载js

- 第一个js是可选项，将其注释
- 第二个js用于分析页面，在页面呈现时不必加载，添加 'async' 属性，进行异步处理
- 第三个本身即异步加载，不用处理



# 对 views/js/main.js 进行的优化可使 views/pizza.html 在滚动时保持 60fps 的帧速

在 'views/js/main.js' 第497行，for循环中，由于这一行不断的在取一固定值，导致了性能问题，将 'for' 移除；
另外，代码中实际有**200**个背景披萨，但实际呈现的并没有那么多，故将其减少到**50**个。



# 利用 views/pizza.html 页面上的 pizza 尺寸滑块调整 pizza 大小的时间小于5毫秒，大小的调整时间在浏览器开发工具中显示。

滑块调用的函数是 'resizePizzas'，将此函数的逻辑优化为：
```javascript
newWidth=50;
对所有pizza赋值新宽度50；
```


