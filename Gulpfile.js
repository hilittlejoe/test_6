//引入gulp，项目文件中安装的gulp的引入方式 
var gulp =require('gulp'),
//引入组件 
    jshint = require("gulp-jshint"), // js检测
    minifycss = require("gulp-minify-css"), // css压缩
    concat = require("gulp-concat"), // 文件合并
    uglify = require("gulp-uglify"), // js压缩
    rename = require("gulp-rename"), // 重命名
    runSequence = require('run-sequence'), // 解决异步问题
    htmlmin = require('gulp-htmlmin'), // 压缩html
    imagemin = require('gulp-imagemin'), // 压缩图片
    pngquant = require('imagemin-pngquant'), // 深度压缩图片
    del = require('del');                   // 删除文件
    autoprefixer = require('gulp-autoprefixer'), // 根据设置浏览器版本自动处理浏览器前缀
    htmlreplace = require('gulp-html-replace');

// 执行clean任务，删除dist目录下所有文件
gulp.task('clean', function() {
    return del(['dist/**/*']);
});

// 压缩html和css,js路径替换
gulp.task('htmlmin', function() {
    // 设置可选项
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        removeEmptyAttributes: true,//删除所有空属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    return gulp.src(['src/*html', 'src/views/*.html'], {base: 'src'})
        .pipe(htmlreplace({
            'css': ['css/style.min.css', 'css/print.min.css'],
            'pizzacss': ['css/style.min.css', 'css/bootstrap-grid.min.css'],
            'js': 'js/perfmatters.min.js',
            'pizzajs': 'js/main.min.js'
        }))
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dist/'));
});

// 浏览器前缀（兼容性）
gulp.task('autoFx', function() {
    return gulp.src('src/css/print.css')
        .pipe(autoprefixer({
            browsers: ['last 4 versions', 'Android >= 4.0'],
            cascade: true,//是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove:true //是否去掉不必要的前缀 默认：true
        }))
        .pipe(gulp.dest('src/css/')); // 输出到开发版本，方便css的压缩是针对已经autoFx过的文件
});

// 压缩css文件
gulp.task('minifycss', function() {
    return gulp.src(['src/css/*.css', 'src/views/css/*.css'], {base: 'src'})
        .pipe(minifycss())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/'));
});

// 压缩js文件
gulp.task('uglify', function() {
    return gulp.src(['src/js/*.js', 'src/views/js/*.js'], {base: 'src'})
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/'));
});

// JS合并压缩 例子
gulp.task('concatjsmin', function() {
    return gulp.src(['src/js/*.js', '!src/js/perfmatters.js'])
        .pipe(concat('main.js'))              //合并除perfmatters的所有js到main.js
        // .pipe(gulp.dest('dist/js/'))          //输出main.js到文件夹
        .pipe(rename({suffix: '.min'}))      //rename压缩后的文件名
        .pipe(uglify())                      //压缩
        .pipe(gulp.dest('dist/js/'));          //输出
});

// 压缩图片(效果不理想) 推荐在线压缩：http://zhitu.isux.us/
gulp.task('imagemin', function() {
    return gulp.src(['src/img/*.{png,jpg,gif,ico}', 'src/views/images/*.{png,jpg,gif,ico}'], {base: 'src'})
        .pipe(imagemin({
            progressive: true,
	        optimizationLevel: 7,
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist'));
});

// 检测js是否有错误
gulp.task('script', function() {
    return gulp.src('src/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// 输出生产代码
gulp.task('build', function(cb) {
    // gulp的任务都是异步执行，htmlmin不会等到clean执行完后再执行
    runSequence('clean', 'autoFx', ['htmlmin', 'minifycss', 'uglify', 'concatjsmin', 'imagemin'], cb);
});

gulp.task('jshint', ['script']);


// cnpm install --save-dev jshint gulp-jshint