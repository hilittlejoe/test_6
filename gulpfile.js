var gulp = require('gulp');
var watch = require('gulp-watch');
var htmlmin = require('gulp-htmlmin');
var cssnano = require('gulp-cssnano');
var pump = require('pump');
var uglify = require('gulp-uglify');
var image = require('gulp-image');

// 实时更新并压缩关键路径文件
gulp.task('watch', () => {
  gulp.watch([
    './src/*.html', './src/views/*.html',
  ], () => {
    gulp.start('htmlmin');
  });
  gulp.watch([
    './src/css/*.css', './src/views/css/*.css',
  ], ['cssmin']);
  gulp.watch([
    './src/js/*.js', './src/views/js/*.js',
  ], ['jsmin']);
});

// 压缩html文件
gulp.task('htmlmin', (cb) => {
  var options = {
    removeComments: true, //清除HTML注释
    collapseWhitespace: true, //压缩HTML
    collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input checked />
    removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
    removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
    removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
    minifyJS: true, //压缩页面JS
    minifyCSS: true, //压缩页面CSS
  };
  pump([
    gulp.src([
      './src/*.html', './src/views/*.html',
    ], { base: 'src' }),
    htmlmin(options),
    gulp.dest('./dist'),
  ], cb);
});

// 压缩css文件
gulp.task('cssmin', (cb) => {
  pump([
    gulp.src([
      './src/css/*.css', './src/views/css/*.css',
    ], { base: 'src' }),
    cssnano(),
    gulp.dest('./dist'),
  ], cb);
});

//压缩js文件
gulp.task('jsmin', (cb) => {
  pump([
    gulp.src([
      './src/js/*.js', './src/views/js/*.js',
    ], { base: 'src' }),
    uglify(),
    gulp.dest('./dist'),
  ], cb);
});

// 压缩图片
gulp.task('imagemin', (cb) => {
  pump([
    gulp.src([
      './src/img/*', './src/views/images/*',
    ], { base: 'src' }),
    image(),
    gulp.dest('./dist'),
  ], cb);

});
