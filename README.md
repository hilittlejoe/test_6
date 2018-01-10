### 压缩图片

最主要是压缩 `views/images/pizzeria.jpg` 这张图片（压缩完后 *33KB*）

### 处理CSS加载

可以看到 `index.html` 一共有三处 CSS link

- 用JS代码工具一步加载 google fonts，看出参数位置即可洞悉用法

  ```javascript
  <script type="text/javascript">
          //异步加载Google fonts的css文件以优化页面访问速度
          WebFontConfig = {
              google: { families: [ 'Open+Sans:400,700' ] }
          };
          (function() {
              var wf = document.createElement('script');
              wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
              '://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js';
              wf.type = 'text/javascript';
              wf.async = 'true';
              var s = document.getElementsByTagName('script')[0];
              s.parentNode.insertBefore(wf, s);
          })();
      </script>
  ```

  ​

- 对于小的css文件，我们选择**压缩之后**内联进 `index.html` 文件中

- `<link href="css/print.css" rel="stylesheet">`

  此CSS只有在打印（print）的时候才会用到，所以我们对其添加一`media="print"`属性，这样在网页呈现的时候浏览器不会请求这一CSS文件，只有页面将被打印时才会请求该文件

### 异步加载JavaScript

- 第一个JS为可选项，我们注释掉即可
- 第二个JS用于分析页面，在页面呈现时不必加载，我们添加 `async` 属性，将其异步处理
- 第三个JS本身即是异步加载，不阻碍页面呈现，可不必理会



这样操作完后，`index.html `即可在PageSpeed上跑足90分



# `views/pizza.html` 在滚动时保持 `60fps` 的帧速

首先我们录制页面滚动，查看当前帧速，可以发现大部分时候帧速都在60FPS以下（图中有红色顶条的帧）

接着我们找出问题所在（图中有红色右上三角即有性能问题）

可以发现问题在 `views/js/main.js` 的第 **497** 行

在`for`循环中，由于这一行不断的在获取一固定值（页面高度），而引起了性能问题，我们将其移除 `for` 循环即可解决。



另外，代码中实际有**200**个背景披萨，但实际上呈现在页面中的并没有那么多，我们将其减少到**50**

可以发现更改后，对页面中可见背景pizza数几乎无影响



这样我们就完成了这个任务



# pizza 尺寸滑块调整 pizza 大小的时间小于5毫秒

我们先看当前调整所需时间

我们右键 **检查** 页面滑块，查看滑块调用的函数

是`resizePizzas`函数

下面我们将改变此函数的逻辑，来进行优化，此函数原来的逻辑为：

（已知原来的宽度`oldWidth` 和 将要调整成的宽度`newWidth`）

```javascript
oldWidth = 33;
newWidth = 50;
dx = newWidth - oldWidth = 17;
newWidth = oldWidth + dx = 50;
对所有pizza赋值新宽度 50;
```

我们现在将其逻辑改为：

```javascript
newWidth = 50;
对所有pizza赋值新宽度 50;
```



刷新页面，测试新的调整时间













