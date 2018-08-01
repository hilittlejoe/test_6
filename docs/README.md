* ## 网站性能优化项目

  ### 说明

  1. 本项目通过优化CRT路径、js代码、压缩文件等方式实现网站的优化；
  2. 优化的目标主要有PageSpeed分数90+、帧率60fps、调整时间<5ms；
  3. 优化的主要方式有CRT优化、消除FSL、防止css触发layout等；
  4. 详细优化步骤请参见下方的项目相关操作记录

  ------

  ###项目地址

  ##### GitHub Rep：[CyfforPro/Udacity_Website_Optimization](https://github.com/CyfforPro/Udacity_Website_Optimization)

  ##### GitHub Pages：[Udacity_Website_Optimization](https://cyfforpro.github.io/Udacity_Website_Optimization/)

  ------

  ### 项目相关操作记录

  ####Part 1: 优化 index.html 的 PageSpeed Insights 得分

  1. 设置meta允许浏览器缓存html；
  2. 字体加载通过js改为异步加载；
  3. 将style.css设为内联
  4. 对print.css设置媒体查询条件，使之不会阻塞渲染；
  5. 利用gulp minify css/html/js、uglify js，通过ImageMagick/智图压缩图片；
  6. 对于index.html外链中的图片，似乎因为某墙的关系，可能加载不出来，为了能够对图片进行优化，将之下载到了本地文件夹并进行了压缩

  #### Part 2: 优化 pizza.html 的 滚动/滑动 帧率60fps

  1. 滚动时发现存在FSL问题，故将updatePositions中的scrollTop移出循环；
  2. 微优化updatePositions中循环的lenth计算，使之只需计算一次；
  3. 优化updatePositions中的变更items的left值为transform实现，避免触发layout；
  4. 在style.css的.mover中添加will-change: transform;提前告知浏览器做好准备；
  5. 利用frame的值，每三次frame刷新才触发一次pizza的移动，能减少js计算、重计算样式、合成图层的次数；
  6. 优化滚动背景pizza的数量，根据屏幕高度生成；
  7. 压缩图片pizza.png为更高性能的webp格式

  #### Part 3: 优化 pizza.html 的 滑动调整pizza大小 时间<5ms

  1. 将windowWidth从determinDx中移出（并且使用querySelector→getElementById微优化），避免FSL；
  2. 将document.querySelectorAll(".randomPizzaContainer")用变量randomPizzaContainers记住；
  3. 实际上原代码那么复杂的计算也只是要根据size和windowWidth来计算新randomPizzaContainer的width，优化计算流程减少计算量并使之不需要用到randomPizzaContainers[i].offsetWidth，避免FSL，故舍弃determinDx使用新算法determineNewWidth
