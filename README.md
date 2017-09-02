## 运行
使用python -m http.server 8000 启动本地服务器
使用ngrok工具（ngrok http 8000），发布到外网
## 检测
利用PageSpeed Insights检测发布之后网站的性能
  https://developers.google.com/speed/pagespeed/insights/
经评估移动端及PC端得分均大于90
## pizza.html页面优化
* 利用Timeline工具录制pizza.html上下滚动动画，可以发现渲染频率在60FPS
* 利用Timeline工具录制pizza.html中改变pizza size按钮，可以发现后台console输出消耗时间小于1ms