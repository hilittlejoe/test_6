## 网站性能优化项目

### 运行说明

1: 没有服务器运行

该项目没有后端组件，因此您可以选择简单地下载项目，双击index.html并在本地浏览。

2: 服务器

下载此项目文件放置在服务器工程根目录下，打开浏览器，访问 localhost:8080

#### 优化

1: index.html
*将 style.css 整个文件里的全部样式都内联在 HTML 文档内，减少网络请求的时间，避免阻塞首次渲染

*添加打印媒体查询来打印CSS

*设置 async 属性，避免了脚本阻止 DOM 的构建

*优化pizzeria.jpg，压缩图片质量

2: views/js/main.js

*使用 getElementsByClassName代替querySelector* 类提高效率

*将计算 newwidth 移到循环外部

*将获取网页元素移到循环外部，避免了不必要的重复

*减少背景pizza的个数
