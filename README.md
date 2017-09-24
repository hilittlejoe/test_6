## 网站性能优化项目

### 优化说明

####Part 1: 优化 index.html 的 PageSpeed Insights 得分
#####结果：mobile（92分），PC（94分）
####实现步骤
1. 解决页面中的css和js阻塞渲染问题；
```html 
	<link href="css/print.css" rel="stylesheet" media="print">        
```
	设置media，只在打印时候加载
```html
	<script async src="http://www.google-analytics.com/analytics.js"></script>
```
	设置javascript异步执行

2. 使用内嵌CSS样式，替代外部CSS样式表（去掉引用web字体）；
```html
	<head>
		<style>......</style>
	</head>
```
	内嵌的时候css样式做了一些没有使用或不是该页面样式的删除操作。

3. 移除img标签中的样式设定，width="100px"；
	首先在标签中直接设定样式，在加载页面时会有阻塞，其次更改几何模型会导致重新计算页面的样式，重新建立Dom树影响渲染时间；

4. 图片处理；
	* 通过jpegtran工具进行了图片的压缩；
	* pizzerea.jpg图片先用图片编辑工具调整了大小（宽度设为100px，这样解决了上面在标签中需要调整宽度的问题，可以直接使用）,再进行的压缩。
	* 通过网络加载的图片，下载下来保存到本地目录，尽量减少访问多个网站；
	* **测试的时候总是提醒还可以再压缩，我试过大小不会变，还有其他办法可以压缩吗？**

5. 浏览器缓存
	* 通过在**head**标签中添加```http-equiv="Expires" content="Wed, 16 May 2018 12:00:00 GMT"```来实现浏览器index页面的缓存；
	* **但是为什么在pagespeed上跑分的时候一直提醒没有做浏览器缓存**
6. GZIP压缩
	* 因为是通过github page 来运行网页，自动做了压缩处理；
	* **之前通过python搭建简单本地服务器（python -m http.server --cgi 8080），使用ngrok使页面可以被远程访问（ngrok.exe http 8080），一直提醒没有做GZIP的压缩处理，也找了好多办法，都没能实现，希望导师能指点一二，感谢！**
7. html代码压缩
	* 把页面中的空格和换行都去掉，使传输的数据量尽量减少。
	* **发现在github page 上部署网页以后这一步优化，自动实现了。**

----

###优化说明
####Part 2: 优化 pizza.html 的 FPS（每秒帧数）

1. 优化网页加载时的性能问题；
```javascript
	// 当页面加载时生成披萨滑窗
	document.addEventListener('DOMContentLoaded', function() {
	  var cols = 8;
	  var s = 256;
	  //pizza图片是跟着屏幕一起移动的，只需要填满当前屏幕就可以，没必要创建那么多
	  for (var i = 0; i < 20; i++) {
	    var elem = document.createElement('img');
	    elem.className = 'mover';
	    elem.src = "images/pizza.png";
	    elem.style.height = "100px";
	    elem.style.width = "73.3px";
	    //设置图片初始位置
	    elem.basicLeft = (i % cols) * s;
	    elem.style.left = elem.basicLeft + Math.sin(i % 5) * 100 + 'px';
	    elem.style.top = (Math.floor(i / cols) * s) + 'px';
	    document.querySelector("#movingPizzas1").appendChild(elem);
	  }
	  //页面加载时不需要读取滚动条位置，位置默认为0
	  //updatePositions();
	}
```
	* 优化了加载pizza图片的数量，只要填充当前屏幕即可；
	* 加载时使用随机生成一次固定位置，代替了通过计算滚动条位置生成相应的位置
2. 优化了滚动条滑动时的性能问题；
```javascript
	// 基于滚动条位置移动背景中的披萨滑窗
	function updatePositions() {
	  frame++;
	  window.performance.mark("mark_start_frame");
	
	  var items = document.querySelectorAll('.mover');
	  //使滚动条位置只计算一次
	  var docScrollTop = document.body.scrollTop / 1250;
	  //先计算，然后统一更新样式
	  var phases = [];
	  for (var i = 0; i < items.length; i++) {
	    phases[i] = Math.sin(docScrollTop + (i % 5));
	  }
	  //更新样式
	  for (var i = 0; i < items.length; i++) {
	    items[i].style.left = items[i].basicLeft + 100 * phases[i] + 'px';
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
	* 优化滚动条滑动时的位置计算，每次滑动只计算一次
	* 优化网页渲染路径，使先计算再统一更新样式；
3. 优化了pizza尺寸调整时的性能问题
```javascript
	var resizePizzas = function(size) {
	  window.performance.mark("mark_start_resize");   // User Timing API 函数
	
	  // 改变滑窗前披萨的尺寸值
	  function changeSliderLabel(size) {
	    switch(size) {
	      case "1":
	        document.querySelector("#pizzaSize").innerHTML = "Small";
	        return;
	      case "2":
	        document.querySelector("#pizzaSize").innerHTML = "Medium";
	        return;
	      case "3":
	        document.querySelector("#pizzaSize").innerHTML = "Large";
	        return;
	      default:
	        console.log("bug in changeSliderLabel");
	    }
	  }
	
	  changeSliderLabel(size);
	
	  // 遍历披萨的元素并改变它们的宽度
	  function changePizzaSizes(size) {
	    //只做一次查询筛选
	    var randomPizzaContainer = document.querySelectorAll(".randomPizzaContainer");
	    //直接通过html中的input值赋予固定宽度比例
	    var newwidth;
	    switch(size){
	      case "1":
	        newwidth = 25;
	        break;
	      case "2":
	        newwidth = 33.3;
	        break;
	      case "3":
	        newwidth = 50;
	        break;
	      default:
	        console.log("bug in sizeSwitcher");
	    }
	    for (var i = 0; i < randomPizzaContainer.length; i++) {
	      randomPizzaContainer[i].style.width = newwidth + "%";
	    }
	  }
	
	  changePizzaSizes(size);
	
	  // User Timing API 太棒了
	  window.performance.mark("mark_end_resize");
	  window.performance.measure("measure_pizza_resize", "mark_start_resize", "mark_end_resize");
	  var timeToResize = window.performance.getEntriesByName("measure_pizza_resize");
	  console.log("Time to resize pizzas: " + timeToResize[timeToResize.length-1].duration + "ms");
	};
```
	* 直接通过html中的input值来赋予PIZZA的尺寸大小
	* DOM元素筛选放到for循环外，使其只检索一次
	
4. 压缩了pizzeria.jpg和pizza.png图片
