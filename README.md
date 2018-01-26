## 网站性能优化项目

####项目一：优化index.html的pagespeed insights得分

#####git -- 版本控制

1. 在GitHub新建仓库
2. 把初始代码文件推送到在线仓库

##### PageSpeed Insights --  评估网站性能

1. python3 -- 创建本地服务器

   ```shell
     $> cd /src
     $> python -m http.server 8080
   ```

2. ngrok -- 让本地服务器能被远程访问

   ```shell
     $> cd /你的工程目录
     $> ./ngrok http 8080
   ```

3. 复制ngrok提供给你的公共URL，然后通过PageSpeed Insights访问

##### 优化步骤

1. 压缩关键路径文件
   - `gulp-htmlmin`缩减html文件
   - `gulp-cssnano`缩减css文件
   - `gulp-uglify`缩减js文件
   - `gulp-watch`实时更新文件变化
2. 使用`media = 'print'`减少无关的阻塞css文件
3. 删除google字体和analytics


#### 项目二：优化pizza.html的frames

1. ##### 卡顿原因

   强制同步布局

2. ##### 优化步骤

   - pizza尺寸滑块：减少读取的页面属性的种类；不在循环中读取页面属性
   - 滚动页面：在循环外读取页面属性，然后在循环中批量处理元素样式

