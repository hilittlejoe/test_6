### 安装
```
1、install node
2、install npm
```

### 使用

```
1、npm install
2、npm start 启动
3、浏览器输入http://localhost:3000

```

### 优化

#### 1、index.html

* 增加一张pizzeria.jpg为100*75的尺寸图片，用于首页显示，减少原始图片太大导致请求加载时间与流量消耗问题

* 字体加载：使用js优化加载，不阻塞渲染

* 减少样式http请求，使用内联样式

#### 2、main.js

* DOMContentLoaded：页面初始化创建dom元素时，使用createDocumentFragment碎片，一次性加入所创建好元素，再往dom添加，减少频繁操作dom

* updatePositions：循环外记录top高度，无需循环内重复计算，导致性能损耗
```
var top = document.body.scrollTop;
```

* 模式一：worker.js多线程：使用worker.js操作业务，不阻塞主线程操作。模式二：获取pizza第一个的宽度，无需每次重复计算pizza宽度
* 循环外缓存变量，无需循环内重新获取，如下代码
```js
function changePizzaSizes(size) {
            var items = document.querySelectorAll(".randomPizzaContainer");
            for (var i = 0; i < items.length; i++) {
                var itemDetail = items[i];
                var itemOffsetWidth = itemDetail.offsetWidth;
                var dx = determineDx(itemOffsetWidth, size);
                var newwidth = (itemOffsetWidth + dx) + 'px';
                itemDetail.style.width = newwidth;
            }
        }
```





