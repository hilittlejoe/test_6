var gulp = require('gulp');

var imagemin = require('gulp-imagemin');
var cssmin = require('gulp-minify-css');
var htmlmin = require('gulp-htmlmin')

gulp.task('testimagemin', function() {
    gulp.src('img/*.{png,jpg,gif,ico}')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));

});
gulp.task('cssmin', function() {
    gulp.src('css/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('dist/css'));
});
gulp.task('htmlmin', function() {
    var option = {
        removeComments: true, //清除HTML注释
        collapseWhitespace: true, //压缩HTML
        collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
        minifyJS: true, //压缩页面JS
        minifyCSS: true //压缩页面CSS
    };
    gulp.src('*.html')
        .pipe(htmlmin(option))
        .pipe(gulp.dest('dist/html'));
});
gulp.task('pizzaImageMin',function () {
   gulp.src('views/images/*.{png,jpg}')
       .pipe(imagemin())
       .pipe(gulp.dest('dist/pizza/pizzaImage'));
});
gulp.task('pizzaCSSMin',function () {
    gulp.src('views/css/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('dist/pizza/css'));
});