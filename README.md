### Part 1: 优化 index.html 的 PageSpeed Insights 得分

- 用了gulp~ 命令行里依次输入以下指令：（每次编辑jss或css,将会自动压缩保存它们到dist文件里）
```
cd [项目的根目录]
npm install gulp --save-dev
npm install
gulp
```
- 利用media query创造非阻塞式的css,如print.css添加media="print";字体下载添加media="none" onload="if(media!='all')media='all'"
- 用inline css代替外部css,减少浏览器的请求次数；
- 压缩css
----

### Part 2: 优化 pizza.html 的 FPS（每秒帧数）
1. 在changePizzaSizes函数里
-  “document.querySelectorAll(".randomPizzaContainer")”在函数出现了四次，将其储存在一个变量中感觉会更好点。
- 将变量newwidth和变量dx移出for循环，并且只需访问一个元素的offsetWidth。
>  for循环中offsetWidth多次导致强制布局;
又因为每个有randomPizzaContainer类的元素的offsetWidth是相同的，无需遍历所有元素的offsetWidth。

2. 在updatePosition函数里
- for循环里的scrollTop导致多次强制布局，可在循环外访问scrollTop并储存在一个变量里
- 为适应各种屏幕中都有滑动pizza,80个滑动pizza应该足够~
