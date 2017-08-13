## 网站性能优化项目 详细步骤

###``index.html``
* 取消``web字体``
* 内联``css``
* ``print.css``添加媒体查询
* 压缩图片

###``views/js/main.js``
* 把固定的宽高写到``css``，``js``为元素添加``class``
* 用``getElementById``、``getElementsByClassName``换掉``querySelector* ``一类的方法
* 通过添加/移除``class``的方法来设置披萨容器的宽度
* 获取``.mover``元素和计算``scrollTop``移到循环外部

###``pizza.html``
* 添加``measureCRP``
* 删除html代码里的``randomPizzaContainer``，改为用js生成