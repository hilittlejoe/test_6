var size_bridge;//作为使用requestAnimaionFrame传参的全局变量
// 改变滑窗前披萨的尺寸值
function changeSliderLabel(size) {
  switch (size) {
    case "1":
      document.querySelector("#pizzaSize").innerHTML = "Small";
      return;
    case "2":
      document.querySelector("#pizzaSize").innerHTML = "Medium";
      return;
    case "3":
      document.querySelector("#pizzaSize").innerHTML = "Large";
      return;
    default:
      console.log("bug in changeSliderLabel");
  }
}
// 将值转成百分比宽度
function sizeSwitcher(size) {
  switch (size) {
    case "1":
      return 0.25;
    case "2":
      return 0.3333;
    case "3":
      return 0.5;
    default:
      console.log("bug in sizeSwitcher");
  }
}

// 返回不同的尺寸以将披萨元素由一个尺寸改成另一个尺寸。由changePizzaSlices(size)函数调用
function determineDx(elem, size,randompizzasArr) {
  var oldWidth = elem.offsetWidth;
  var windowWidth = randompizzasArr.offsetWidth;
  var oldSize = oldWidth / windowWidth;
  var newSize = sizeSwitcher(size);
  var dx = (newSize - oldSize) * windowWidth;
  return dx;
}

// 遍历披萨的元素并改变它们的宽度
function changePizzaSizes(size) {
  var classArr = document.getElementsByClassName("randomPizzaContainer");
  var randompizzasArr = document.getElementById("randomPizzas");
  var dx = determineDx(classArr[0], size,randompizzasArr);
  var newwidth = (classArr[0].offsetWidth + dx) + 'px';
  for (var i = 0; i <classArr .length; i++) {
    classArr[i].style.width = newwidth;
  }
}


// 当网站中"Our Pizzas"的滑窗部分移动时调用resizePizzas(size)函数

var resizePizzas = function (size) {
  // User Timing API 函数
  window.performance.mark("mark_start_resize");
  this.size_bridge = size;
  requestAnimationFrame(bridge);
  // User Timing API 太棒了
  window.performance.mark("mark_end_resize");
  window.performance.measure("measure_pizza_resize", "mark_start_resize", "mark_end_resize");
  var timeToResize = window.performance.getEntriesByName("measure_pizza_resize");
  console.log("Time to resize fixed pizzas: " + timeToResize[timeToResize.length - 1].duration + "ms");
};

function bridge(){
  var size_now = this.size_bridge;
  changeSliderLabel(size_now); // 改变滑窗前披萨的尺寸值
  changePizzaSizes(size_now);// 遍历披萨的元素并改变它们的宽度
}

