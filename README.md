# 网站优化

通过pagespeed测试，分数达到90分以上；使fps60；

## 源代码

- 需要访问[源代码](https://github.com/chanyhot/WebsiteOptimization)

## 如何运行

下载代码至本地，在项目目录下运行`npm install`，运行gulp，会生成__dist__目录，在dist目录下建立web服务器运行，如(nodejs环境)：

```
cd WebsiteOptimization
npm install
gulp
cd dist
http-server -p 8000
```
浏览器输入地址http://localhost:8000 即能访问