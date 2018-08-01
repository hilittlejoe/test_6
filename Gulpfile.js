//引入gulp
var gulp = require('gulp'),
//引入组件 
    minifycss = require("gulp-minify-css"), // css压缩
    uglify = require("gulp-uglify"), // js压缩
    rename = require("gulp-rename"), // 重命名
    runSequence = require('run-sequence'), // 解决异步问题
    htmlmin = require('gulp-htmlmin'), // 压缩html
    del = require('del'); // 删除文件
    autoprefixer = require('gulp-autoprefixer'), // 根据设置浏览器版本自动处理浏览器前缀
    replace = require('gulp-replace'); // 路径更换

// 执行clean任务，删除dist目录下所有文件
gulp.task('clean', function() {
    return del(['dist/**/*', '!dist/README.md']);
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
        .pipe(replace(`<link href="css/print.css" rel="stylesheet" media="print">`, `<link href="css/print.min.css" rel="stylesheet" media="print">`))
        .pipe(replace(`<script async src="js/perfmatters.js"></script>`, `<script async src="js/perfmatters.min.js"></script>`))
        .pipe(replace(`<link rel="stylesheet" href="css/style.css">`, `<link rel="stylesheet" href="css/style.min.css">`))
        .pipe(replace(`<link rel="stylesheet" href="css/bootstrap-grid.css">`, `<link rel="stylesheet" href="css/bootstrap-grid.min.css">`))
        .pipe(replace(`<script type="text/javascript" src="js/main.js"></script>`, `<script type="text/javascript" src="js/main.min.js"></script>`))
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

// 复制图片和md
gulp.task('filetrans', function() {
    return gulp.src(['src/img/*.{png,jpg,gif,ico,webp}', 'src/views/images/*.{png,jpg,gif,ico,webp}', 'src/*.md'], {base: 'src'})
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
    // 同步执行任务
    runSequence('clean', 'autoFx', ['htmlmin', 'minifycss', 'uglify', 'filetrans'], cb);
});

gulp.task('jshint', ['script']);
