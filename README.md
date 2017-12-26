# index 页面优化

通过使用PageSpeed工具和Chrome的开发者工具，影响页面加载速度的主要有以下内容：

+ javascript的加载
+ css文件的加载
+ 图片优化
+ web 字体的加载

优化方式如下：

+ 使用异步方式加载不影响页面显示的js文件
+ 使用压缩工具压缩css文件；通过给link标签设置media属性，设置不同显示设备加载的css文件
+ 压缩本地大容量图片文件（profilepic.jpg, pizzeria.jpg） 
+ 使用异步方式加载 web 字体文件

# 去除卡顿

## 帧速

通过使用Chrome的开发者工具，在页面滚动的时候消耗比较长时间的是在main.js文件中地497行的函数调用。
通过阅读代码发现，在第502行的循环中，每执行一次就重新定义一次scrollTop变量。这里消耗了大量的时间。

优化方式：

将scrollTop变量定义移动到for循环之外

按照反馈 使用 getElementById 和 getElementsByClassName 代替 querySelector 和 querySelectorAll。

## 计算效率

通过使用Chrome的开发者工具，在使用滑块调整 pizza 大小时消耗比较长时间的是在main.js文件中地422行的determineDx函数。

通过阅读代码，determineDx函数的主要功能是计算新的pizza 大小。但是计算方式略复杂，可以使用更简单的方式取得计算结果。通过修改changePizzaSizes函数，使用新的determineDx函数返回值。而且，newwidth的值对于每一个randomPizzaContainer都是一致的，不需要针对每一个randomPizzaContainer都去计算。

按照反馈，更新添加pizza部分。并修改scroll 监听部分，在滚动后更新pizza图片