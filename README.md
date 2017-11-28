## 网站性能优化项目

### 构建
``` bash
npm install
npm run build
```

### Update
#### 2017/11/28
- 内联`style.css`的样式
- 压缩`pizzeria.jpg`
- 披萨背景左右移动的效果正常了
- 初始化时，根据视窗高度计算披萨的数量

### 优化 index.html 的 PageSpeed Insights 得分
- 使用gulp自动压缩图片、css和html
- 移除不必要的Google font css
- 添加媒体查询
- 将js引用和代码移到文档底部，并改为异步调用

### 优化 pizza.html 的 FPS
- 使用`document.createDocumentFragment()`，提高生成披萨滑窗的效率
- 移除`updatePositions`中无用的代码，改为在生成披萨滑窗时，初始化元素的left。
- 修改`resizePizzas`代码，移除`determineDx`，避免force reflow