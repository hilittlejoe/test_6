## 网站性能优化项目

### Part 1: 优化 index.html 的 PageSpeed Insights 得分

- 打开pagespeed insight
- 输入http://aaronwang95.github.io/uda-web-optimization/

##### 做出的优化：
- 压缩本地图片，使用的是pagespeed insight提供的优化图片
- 给print.css加上media='print'属性
- 把style.css压缩之后内置到index.html之中
- google font使用web font loader异步加载方式
- google analytics加上async属性

### Part 2: 优化 pizza.html 的 FPS（每秒帧数）

##### 做出的改动：
- 由于在我的电脑上document.body.scrollTop的值始终为0，使得源代码本应该出现的FSL并不会出现。将其改为window.scrollY。
- updatePositions函数中，把window.scrollY变量的读取放在循环之外。
- changePizzaSizes函数中，将Node List转换为Array之后使用foreach循环；并且把offsetWidth的读取放在了循环之外。
- 改写了changePizzaSizes函数中多余的部分，直接计算newWidth。