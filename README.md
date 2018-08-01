## Udacity Website Optimization Project

This project is a udacity nano-degree front-end development project about website optimization.

### References
* [Web Front Loader](https://github.com/typekit/webfontloader#modules)
* [Compressing Images](https://compressjpeg.com/)
* [Analyze FPS](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/#analyze_frames_per_second)
* [requestAnimationFrame()](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame)
### How to use

####Part 1: PageSpeed Insights for index.html

This website is hosted at https://jeremyleeeee.github.io/WebOptimization/. I searched online and it seemed that it is 
not possible to get PageSpeed Insights score if you open index.html directly on your machine. By simply entering the
address above in the input box of PageSpeed website, you could see that it should be 99/100 for mobile devices and 
96/100 for desktop devices.

1. I used Web Font Loader to get Google Fonts asynchronously, it dramatically increases the score.
2. I embedded the style.css into the html, which I am not sure helps a lot.
3. Another important part that increases my score a lot is compressing all the images used in the website. By doing that,
the speed for loading these images increase.
####Part 2: FPS for pizza.html

For this part, you need to turn on the FPS meter provided by Chrome and after that you just navigate to the pizza.html 
page and start scrolling and see what the FPS is. As I was testing, the FPS is generally around 60, but at some point it
would drop below 60.
1. In updatePositions(), I used a requestAnimationFrame(callback) to increase performance.
2. The code removed from updatePositions() is put inside the callback() function and I used transform instead of left, 
this requires me to make some changes at the end of the DOMContentLoaded listener as well.
3. Since every pizza generated is the same, I removed some of the code in the loop.
4. Replace all the query with getElementbyId or getElementsbyClass
5. Calculate the number of pizza needed so we do not have to do more loops than necessary.
