# 网站性能优化项目
该项目主要分为对index.html的PageSpeed评分优化以及对views中的main.js进行速度优化。  

  * [Partone](#partone)
     * [异步加载JavaSCript](#异步加载javascript)
     * [CSS优化](#css优化)
     * [图片优化](#图片优化)
  * [Part2](#part2)
     * [querySelector VS <code>getElementById</code> <code>getElementsByClassName</code>](#queryselector-vs-getelementbyidgetelementsbyclassname)
     * [强制同步布局](#强制同步布局)
     * [translateX的使用](#translatex的使用)

         

## Partone
### 异步加载JavaSCript
```
    <script src="http://www.google-analytics.com/analytics.js" async="async"></script >
```
该js文件并非一定需要在项目加载完成前使用，因此改为异步加载
<br>

### CSS优化
项目之前存在的`style.css`体积并非很大，因此可改为内嵌加载。
<br>

`print.css`主要负责打印时所做操作，因此运用mediaQuery改至打印时加载。
### 图片优化
该项目图片优化主要使用`ImageOptim`进行优化。`pizzeria.jpg`在该页面中所需大小仅为100px，因此对其进行了裁剪。
## Part2

### `querySelector` VS `getElementById`+`getElementsByClassName`

querySelector相对于后两种方法性能占用更高，详情参见[getelementById vs querySelector](https://jsperf.com/getelementbyid-vs-queryselector-vs-queryselector-by-id)。

### 强制同步布局
原始代码
```
function changePizzaSizes(size) {
  for (var i = 0; i < document.querySelectorAll(".randomPizzaContainer").length; i++) {
    var dx = determineDx(document.querySelectorAll(".randomPizzaContainer")[i], size);
    var newwidth = (document.querySelectorAll(".randomPizzaContainer")[i].offsetWidth + dx) + 'px';
    document.querySelectorAll(".randomPizzaContainer")[i].style.width = newwidth;
  }
}
```
原代码在循环内对元素选用过多，而且`determineDx`与`newwidth`这些运算由于要设置的每一个 `randomPizzaContainer` 的尺寸是相等的，所以只需要计算一个。
### translateX的使用
该项目中最初使用的动画函数为`style.left`,对于该项目，优化最好的方式为将其变更为`translateX`。相对于原函数，它不需要重新再绘制 pizza。

