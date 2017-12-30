/*
欢迎来到我们的60fps项目！你的目标是使Cam's Pizzeria网站能流畅的运行在60fps下。

在这里的代码中主要有两个问题使性能低于60fps。你能发现并修复它们吗？

在代码中，你会发现一些使用User Timing API(window.performance)的例子，它们使用
console.log()将帧率数据输入到浏览器的控制台中。如果你想了解更多关于User Timing API
的信息，请访问：http://www.html5rocks.com/en/tutorials/webperformance/usertiming/


创建者:
Cameron Pittman, Udacity 课程开发者
cameron@udacity.com
*/

// 你可能已经发现了，这个网站会随机地生成披萨。

// 下面的关于背景滑窗披萨的代码来自于Ilya的demo:
// https://www.igvita.com/slides/2012/devtools-tips-and-tricks/jank-demo.html

// 基于滚动条位置移动背景中的披萨滑窗

/****************************    这里是卡顿源头！！！！！！！     *****************************/
var frame = 0;
// 记录滚动时背景滑窗披萨移动的每10帧的平均帧率
function logAverageFrame(times) {   // times参数是updatePositions()由User Timing得到的测量数据
  var numberOfEntries = times.length;
  var sum = 0;
  for (var i = numberOfEntries - 1; i > numberOfEntries - 11; i--) {
    sum = sum + times[i].duration;
  }
  console.log("Average scripting time to generate last 10 frames: " + sum / 10 + "ms");
}

function createBackgroundPizze() {
  var cols = 8;
  var s = 256;
  for (var i = 0; i < 200; i++) {
    var elem = document.createElement('img');
    elem.className = 'mover';
    elem.src = "images/pizza.png";
    elem.style.height = "100px";
    elem.style.width = "73.333px";
    elem.basicLeft = (i % cols) * s;
    elem.style.top = (Math.floor(i / cols) * s) + 'px';
    document.querySelector("#movingPizzas1").appendChild(elem);
  }
}
requestAnimationFrame(createBackgroundPizze);

function updateMover() {
  var items = document.querySelectorAll('.mover');
  for (var i = 0; i < items.length; i++) {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    var phase = Math.sin((scrollTop / 1250) + (i % 5));
    items[i].style.left = items[i].basicLeft + 100 * phase + 'px';
  }
}
requestAnimationFrame(updateMover);

function updatePositions() {
  this.frame++;
  window.performance.mark("mark_start_frame");

  requestAnimationFrame(updateMover);

  // 再次使用User Timing API。这很值得学习
  // 能够很容易地自定义测量维度
  window.performance.mark("mark_end_frame");
  window.performance.measure("measure_frame_duration", "mark_start_frame", "mark_end_frame");
  if (frame % 10 === 0) {
    var timesToUpdatePosition = window.performance.getEntriesByName("measure_frame_duration");
    logAverageFrame(timesToUpdatePosition);
  }
}
requestAnimationFrame(updatePositions);

// 在页面滚动时运行updatePositions函数
window.addEventListener('scroll', function () {
  requestAnimationFrame(updatePositions);
});

// 当页面加载时生成披萨滑窗
document.addEventListener('DOMContentLoaded', function () {
  requestAnimationFrame(updatePositions);
});
