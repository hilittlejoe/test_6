# 页面优化
优化项目中使用了常见的优化方式，比如页面的脚本加载顺序，以及影响FSL等的因素做了一些处理，具体优化部分段进行描述。
## Index.html页面的优化
1.index.html的访问路径为：[index.html](https://chensdog.github.io/chenchao/p2/index.html)
2.优化内容说明：
   - 将字体文件`//fonts.googleapis.com/css?family=Open+Sans:400,700`移动到页面`body`底部，由于字体文件的加载对于页面显示内容影响并不是非常大，因此将字体会将放到页面底部，先加载页面内容进行解析
   - 将`js`文件的加载变为`async`
       ```
       <script src="js/perfmatters.js"></script>  
       <script src="http://www.google-analytics.com/analytics.js"></script>
       更改为：
       <script async src="js/perfmatters.js"></script>
       <script async src="http://www.google-analytics.com/analytics.js"></script>
       ```
       并且将`analytics.js`移动到body体底部
   - 资源文件压缩处理
   将页面中静态资源文件进行压缩，例如其中`views/images/pizzeria.jpg`的压缩可以由大于`2MB`变为`4kb`左右的文件
   - 将`css`文件内容迁移到`html`中，由于`css`一部分文件并不是很多，所以可以嵌入到页面`<style>`标签中
## pizza.html页面的优化
1.执行路径为:[pizza.html](https://chensdog.github.io/chenchao/p2/views/pizza.html)
2.优化的方法
   - 滑块的移动调整图片大小尺寸完成小于`5ms`
将main.js中进行计算的逻辑变为样式的`%`，从而取代影响FSL的`px`，并且尽量减少循环中`document.getXX`或者`document.queryXX`的使用，将通过`document`获取到的内容缓存到`局部变量`，在循环中操作局部变量，优化代码如下：
        ```
            var rpc = document.querySelectorAll(".randomPizzaContainer");
        	var length = rpc.length || 0;
        	//判断size是否满足，large，small，middle的内容项
        	//将百分比移动到内部来进行判断，
        	function sizeSwitcher (size) {
              switch(size) {
                case "1":
                  return 25;
                case "2":
                  return 33.33;
                case "3":
                  return 50;
                default:
                  console.log("bug in sizeSwitcher");
              }
            }
        	//获取每次移动滑块后图片最终的width的百分比
        	var newSize = sizeSwitcher(size);
        	//最终在设置width的时候，设置百分比，相对于父元素的宽度来进行设置
            for (var i = 0; i < length; i++) {
              rpc[i].style.width = newSize + "%";
            }
     ```

   - 滚动条滚动达到`60fps`
   1.由于页面中 `.mover`的移动不应该和其他地方有关联，因此将这部分样式添加了`will-change:transform,left`,当然该属性对于浏览器存在兼容性问题
2.去掉`px`换成`%`，可以观察到`.mover`元素集合，所有的`left`都是相对于`body`的来进行的，因此获取当前浏览器视窗`clientWidth`来当做基数
     ```
    
      var scroll_top = document.body.scrollTop || document.documentElement.scrollTop;
      var client_width = document.body.clientWidth || document.documentElement.clientWidth; 
      for (var i = 0; i < items.length; i++) {
        var phase = Math.sin((scroll_top / 1250) + (i % 5));
        items[i].style.left  = ((items[i].basicLeft + 100 * phase) * 100)/client_width + "%";
      }
     ```

## 关于pizza.html中个人认为的bug
   - 页面中对于`<head>`未添加`<meta charset="UTF-8">`因此可能产生`中文乱码`
   - 在`main.js`中使用了`documnt.body`来获取滚动条的高度，但是页面中并未使用`DTD`，因此获取到的结果：`document.body.scrollTop`一直为`0`
    以上观点仅仅是代表个人认为，也许存在错误
