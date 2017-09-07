## 网站性能优化项目

## 如何运行
1. 网站地址 https://imhxc.github.io/Website_Optimization_zh/
2. 直接克隆到本地

## 优化

### index.html 优化
- 增加对应的css、js压缩处理文件，并将改脚本、样式链接到已压缩的文件。
  - `print.css -> print.min.css`
  - `perfmatters.js -> perfmatters_min`
- 将已压缩的style.css文件内连到index.html中


- css、js阻止呈现优化
  - 使用media属性 `<link href="css/print.min.css" rel="stylesheet" media="print">`
  - js使用async异步加载
- img文件下的所有图片进行压缩
- 增加小尺寸pizzeria_min.png图片，并将index.html页面下的图片链接(pizzeria.jpg)，修改为pizzeria_min.png



### pizza.html 优化

- 增加对应的css、js压缩处理文件，并重新链接至已压缩文件
- main.js文件修改`querySelector`为`getElementById`,`querySelectorAll`为`getElementsByClassName`
- 优化pizza size 的个数 *main.js文件524行*
- 着重优化main.js文件中的changePizzaSizes方法
- 压缩图片


