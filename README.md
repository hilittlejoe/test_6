# 网站优化
### 优化要求
- index.html页面在移动和桌面的pagespeed分数至少为90分
- 保持pizza.html在滚动时60fps的帧数
- 页面上的 pizza 尺寸滑块调整 pizza 大小的时间小于5毫秒
### 运行项目
1. 下载项目
  
```
git clone https://github.com/ZhouXingXingOrJames/websiteOptimize-p2.git
```
2.启动服务
```bash
  $> cd /工程目录
  $> python -m SimpleHTTPServer 8080
``` 
打开浏览器，访问 localhost:8080


``` bash
  $> cd /工程目录
  $> ./ngrok http 8080
```
复制ngrok提供给你的公共URL
# 优化
### index.html页面
- **css**
将

```
    <link href="css/print.css" rel="stylesheet">

```
更改为

```
    <link href="css/print.css" rel="stylesheet" media="print">

```
只在页面需要打印时加载

- **js** 
```
<script src="js/GoogleAnalytics.js" async></script>
<script src="http://www.google-analytics.com/analytics.js" async></script>
```

 在JavaScript引用中添加async属性，异步加载。
- **image**
将图片使用工具进行压缩，已达到图片容积最优化。这里使用的是[kraken.io](https://kraken.io/web-interface)进行压缩优化

### 优化pizza滑动卡顿
- 降低滑动时随机生成的pizza数量，从200降到31

```
document.addEventListener('DOMContentLoaded', function() {
  var cols = 8;
  var s = 256;
  for (var i = 0; i < 31; i--) {
    var elem = document.createElement('img');
    elem.className = 'mover';
    elem.src = "images/pizza.png";
    elem.style.height = "100px";
    elem.style.width = "73.333px";
    elem.basicLeft = (i % cols) * s;
    elem.style.top = (Math.floor(i / cols) * s) + 'px';
    //初始化位置
    elem.style.right = (Math.ceil(i / cols) * s)  + 'px';
    document.querySelector("#movingPizzas1").appendChild(elem);
  }
  updatePositions();
});
```
- 优化css动画渲染
使用translateX() 和 translateZ(0)函数渲染

```
function updatePositions() {
  frame++;
  window.performance.mark("mark_start_frame");

  var items = document.querySelectorAll('.mover');
  for (var i = 0; i < items.length; i++) {
    var phase = Math.sin((document.body.scrollTop / 1250) + (i % 5));
      var left = -items[i].basicLeft + 100 * phase + 'px';
      items[i].style.transform = "translateX("+left+") translateZ(0)";
  }

  // 再次使用User Timing API。这很值得学习
  // 能够很容易地自定义测量维度
  window.performance.mark("mark_end_frame");
  window.performance.measure("measure_frame_duration", "mark_start_frame", "mark_end_frame");
  if (frame % 10 === 0) {
    var timesToUpdatePosition = window.performance.getEntriesByName("measure_frame_duration");
    logAverageFrame(timesToUpdatePosition);
  }
}
```
### 使用requestAnimationFrame函数优化页面滑动时调用updatePositions函数

```
window.addEventListener('scroll', function() {
    window.requestAnimationFrame(updatePositions);
});
```
### 优化循环遍历披萨并改变宽度的方法

```
      function changePizzaSizes(size) {

          var random = document.getElementsByClassName("randomPizzaContainer");
          var elements = random;
          var dx = determineDx(elements[0], size);
          //计算出最新需要变化的宽度
          var newwidth = (elements[0].offsetWidth + dx) + 'px';
          for (var i = elements.length; i--;) {
              elements[i].style.width = newwidth;
          }
      }

```
创建一个新的变量，保存所有的.randomPizzaContainer元素，在循环外，避免每次循环都去获取所有的元素。
### 减少for循环中的运算
```
 var items = document.getElementsByClassName('mover');
  var top = document.body.scrollTop / 1250;
  var phase;
  for (var i = 0; i < items.length; i++) {
      phase = Math.sin(top + i % 5);
      var left = -items[i].basicLeft + 100 * phase + 'px';
      items[i].style.transform = "translateX("+left+") translateZ(0)";
  }
```
# 联系我
如果你有更好的优化方式，可以一起讨论一个更好的优化方案
###### QQ邮箱:1098769275@qq.com
###### 微信 :1098769275









