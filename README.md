## 项目优化概述
1. index.html 
1) css外部载入文件改为内联方式
2) 压缩图片
3) 给js文件添加 async 属性，避免脚本阻止 DOM 的构建。

2. views/js/main.js 
1) 改用 CSS 设置披萨元素的尺寸，避免了之前的强制布局
2) 优化updatePositions()函数
3) 修改DOM元素选择方法querySelector为getElementBy
4) 动态计算背景披萨个数

3. pizza.html
1) css外部载入文件改为内联方式
2) 压缩图片

## 项目运行指南
点击[进入页面](https://hf024.github.io/optimize/)
