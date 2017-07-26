前端纳米学位网页优化项目
===============================

# 成功运行应用所需的所有步骤
* 解压文件
* 安装NodeJS
* 在cmd中输入命令node -v 查看nodeJS是否成功安装
* 输入npm install anywhere -g安装anywhere
* 使用cd命令进入项目文件根目录
* 输入anywhere 8080启动本地服务，打开网页(8080为端口号，用户可自行设定)
* 访问http://ngrok.2bdata.com下载ngrok并安装
* 使用cd命令进入ngrok根目录
* 输入 ngrok -config=ngrok.cfg -subdomain xxx 8080将本地的项目映射到外网（为了使用chrome的pagespeed insights插件），
注意xxx为用户自定义名字，端口号需与项目端口号对应
* 在chrome中安装pagespeed insights插件，进行评分。

# 项目1提升pagespeed insights评分的方法
```
<script src="http://www.google-analytics.com/analytics.js"></script>
```
* 将需要异步加载的JS文件设置async属性
```
<link href="css/print.css" rel="stylesheet">
```
* 将需要打印时调用的CSS文件设置media=“print”
* 将本页面需要请求的图片进行压缩
* 将本页面的JS代码进行压缩
* 将外联的CSS文件合并压缩并改为内联，解决阻止呈现的问题

# 项目2调整披萨大小方法卡顿的解决办法
```
function changePizzaSizes(size) {
  	var randomPizza = document.querySelectorAll(".randomPizzaContainer");
  	var newwidth = [];
  	
  	for(var i = 0; i < randomPizza.length; i++){
		var dx = determineDx(randomPizza[i], size);
  		 newwidth[i] = (randomPizza[i].offsetWidth + dx) + 'px';
  	}
  	
    for (var i = 0; i < randomPizza.length; i++){
      randomPizza[i].style.width = newwidth[i];
    }
  }
```
将该函数改为以上的方式，避免了强制同步布局

# 项目2滚动动画帧数过低的解决办法
```
function updatePositions() {
  frame++;
  window.performance.mark("mark_start_frame");
  var items = document.querySelectorAll('.mover');

  //使用一个for循环来提前获取页面滚动高度来避免同步布局
  for(var i = 0; i < items.length; i++){
  	 phase[i] = Math.sin((document.body.scrollTop / 1250) + (i % 5));
  }
  
  for (var i = 0; i < items.length; i++) {
    items[i].style.left = items[i].basicLeft + 100 * phase[i] + 'px';
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
将该函数改为以上的方式，避免了强制同步布局
```
document.addEventListener('DOMContentLoaded', function() {
  var cols = 8;
  var s = 256;
  for (var i = 0; i < 30; i++) {
    var elem = document.createElement('img');
    elem.className = 'mover';
    elem.src = "images/pizza.png";
    elem.style.height = "100px";
    elem.style.width = "73.333px";
    elem.basicLeft = (i % cols) * s;
    elem.style.top = (Math.floor(i / cols) * s) + 'px';
    document.querySelector("#movingPizzas1").appendChild(elem);
  }
updatePositions();
});
```
减少了生成'.mover'的数量
将queryselector改成getElementBy..等方法
