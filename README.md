## 网站性能优化项目

通过以下指南，确保可以在浏览器中访问首页，查看优化效果.

### 指南

1. 将这个代码库导出
2. 你可以运行一个本地服务器，以便在你的手机上检查这个站点

```bash
  $> cd /你的工程目录
  $> python -m SimpleHTTPServer 8080
```

1. 打开浏览器，访问 localhost:8080
2. 下载 [ngrok](https://ngrok.com/) 并将其安装在你的工程根目录下，让你的本地服务器能够被远程访问。

``` bash
  $> cd /你的工程目录
  $> ./ngrok http 8080
```

1. 复制ngrok提供给你的公共URL，然后尝试通过PageSpeed Insights访问它吧！可选阅读：[更多关于整合ngrok、Grunt和PageSpeed的信息](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)。

----

### 优化概述

* 内联 font.css 和 style.css 
* 设置 print.css 媒体查询类型为 print
* 添加 analytics.js 的 async 标识，避免阻止呈现
* 压缩 pizzeria.jpg
* 修改 changePizzaSizes 函数，试图降低耗时
* 当页面加载时生成披萨滑窗，降低添加的pizza数量为30
