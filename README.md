#Website Optimization

##运行应用
解压后，用浏览器打开**index.html**。

##优化index.html
1、在`<script src="http://www.google-analytics.com/analytics.js"></script>`中添加`async`，实现异步加载。

2、为‘views/images/pizzeria.jpg’制作缩略图减少加载时间。

3、将以下语句移到HTML的最下方避免渲染受阻。
```
<link href="css/style.css" rel="stylesheet">
<link href="css/print.css" rel="stylesheet" media="print">
<link href="//fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet">
```

##优化views/js/main.js
1、在544行修改循环条件为`i < 50`,减少披萨mover的数量使网页滚动时保持60fps的帧速。

2、不使用`etermineDx`函数,并对`changePizzaSizes`函数进行调整，使pizza尺寸滑块调整pizza大小的时间小于5毫秒。
