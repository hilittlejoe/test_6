# frontend-nanodegree-Website-Optimization、

## 如何打开文件:
- 执行gulp serve命令即可打开localhost:8333中dist文件夹查看pizza.html文件

##gulpz自动任务：压缩html、css、js、images文件

## 优化index.html
- 去除外联css，减少搜索文件的时间
- 将js放在body底部将所有的js代码加上async属性
- 优化了图片
- print.css加上print限制才执行，优化不必要的css文件
- 将http://www.google-analytics.com/analytics.js存储到本地，减少请求等待时间。

## 优化style.css
- 给mover选择器，添加 will-change: transform;

##优化字体
- 将webfontloader储存到本地
- 使用webfontloader.js进行字体的异步加载，在未加载完成前使用sans-serif来代替，加载好后启用新字体。

## 优化views/js/main.js
- 将css文件以及js文件放到html的末尾；
- 优化changePizzaSizeschangePizzaSizes，以解决dom的重复性选择以及FSL问题；
- 优化updatePositions方法：将layout的执行放在循环前面，降低时耗
- 在第486行将dom的操作放在循环之外
- 在第521行将layout的相关计算放在循环之外以防止重复计算
- 要求内容：将i的最大值调到24以下
- 在第551行删除var，防止多次声明
- 427中，querySelector-->getElementById,提高搜索速度
- 523中，定义放在循环外，dom操作放在循环内时间成本太高  
- 548~550中，根据页面宽度动态设置pizza的数量
