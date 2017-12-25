# Website Optimization
### Wang yanting

## Installation
1. 解开此压缩包并获取其中的html文件，在任意浏览器中打开index.html文件即可

## Optimization ideas

###index.html的优化 
1. 压缩图片尺寸：为了保证下载速度，利用TinyPng（ https://tinypng.com/） 将JPEG或PNG的图片都压缩成尺寸小的
2. 把一些使用外部链接的图片改成本地链接。并且可以压缩文件来减少网站传送的数据量
3. 注释了字体的API
4. 在html中内联了CSS。同时利用媒体查询来消除CSS渲染阻塞
5. 异步加载JS

###Pizza的滚动优化
1. 页面滚动时：将获取网页元素移到循环外部，避免重复获取。将Pizzas的元素选择（.mover）放在循环外部，将 scrollTop 移到循环体外部用一个变量保存起来
2. 遍历披萨的元素并改变它们的宽度。将获取网页元素的document.querySelectorAll(".randomPizzaContainer") 移到 for 循环外部用一个变量保存起来，然后附近的其它地方都通过这个变量来访问，避免不必要的重复获取。newwidth 的计算也移到循环外部
3. 200 个背景披萨.mover实在是太多,为了减少背景披萨的数量，方法是动态的计算需要的披萨的个数。披萨数量 = (浏览器高度 / 背景披萨高度) * cols

## Reference material
* https://discussions.youdaxue.com/t/topic/38793
