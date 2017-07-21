## 网站性能优化项目

你要做的是尽可能优化这个在线项目的速度。

### 目标

- index.html 在移动设备和桌面上的 PageSpeed 分数至少为90分。
- 对 views/js/main.js 进行的优化可使 views/pizza.html 在滚动时保持 60fps 的帧速。
- 用 views/pizza.html 页面上的 pizza 尺寸滑块调整 pizza 大小的时间小于5毫秒。

### 优化概述

#### index.html
1. 异步加载谷歌字体
2. css内联
3. js脚本加上async，异步加载
4. 使用pagespeed中提供的优化后的图片以及压缩后的js文件（之前也用过gulp来压缩图片和文件，结果pagespeed还是提示图片压缩的不够，所以就直接用pagespeed里面提供的图片和文件了）

#### pizza.html
1. 按需加载pizza数。通过屏幕可用高度、行高以及一行显示pizza的个数，计算出在可视区中有多少个小pizza。因为实际上可视区外多余的小pizza并没有什么用，反而还增加合成操作。
2. 用getElementById代替querySelector，并把循环内的获取dom元素操作移到循环外面。
3. 刚开始生成pizza的时候，用字符串拼接html代替dom创建元素。
4. transform代替left去移动pizza，避免重绘。
5. 用requestAnimationFrame代替监听scroll事件，使得scroll更高效。
6. 修改pizza大小的时候，去掉不必要的代码，直接获取pizza的width。
