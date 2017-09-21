#网站优化指南
##优化index.html提高page speed
1. 将html所有JavaScript文件全部改为异步，减少阻塞文件
2. 将CSS样式转变成inline样式，减少文件遍历时间
3. 用ImgeOptim 工具压缩所有网页应用的图片尺寸。
5. 内嵌了本地JS，减少请求JS的时间
6. 缩小了pizzeria图片的尺寸降低了文件size
7. 搭建了NGROK，生成网页并用page speed测试。

##优化Pizza.html 页面
1. 修改function changePizzaSizes(size)函数，为了避免强制同步布局，修改了遍历过程，成功减少了pizza尺寸修改时间。
2. 通过chrome dev tool定位了影响页面滚动FPS的函数为function updatePositions()，发现有大量布局重绘
3. 通过will change-transform 以及translateX（）修改函数
4. 由于translateX是基于父节点平移，父节点本身偏移了6 md-col,修改了html中movingPizzas1，改为div id="movingPizzas1" class="col-md-6 col-md-pull-6"
