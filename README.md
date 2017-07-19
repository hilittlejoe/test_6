### 搭建环境

```bash
  $> cd /你的工程目录
  $> python -m SimpleHTTPServer 8080
```
打开浏览器，访问 localhost:8080

### 所做的修改
1. 压缩图片和css
2. 修改index.html中<script async src="js/perfmatters.js" async></script>添加了async
3. 修改main.js中

将其中一些dom选择提取出来作为一个变量，同时减少计算导致的重新渲染。

```window.addEventListener('scroll', function() {
    window.requestAnimationFrame(updatePositions);
});
```

```
function changePizzaSizes(size) {
    var dx = determineDx(document.querySelectorAll(".randomPizzaContainer"), size);
    for (var i = 0; i < document.querySelectorAll(".randomPizzaContainer").length; i++) {
      var newwidth = (document.querySelectorAll(".randomPizzaContainer")[i].offsetWidth + dx) + 'px';
      document.querySelectorAll(".randomPizzaContainer")[i].style.width = newwidth;
    }
  }
```


