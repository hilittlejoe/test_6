var gulp = require('gulp'),
uglify = require("gulp-uglify"),
minifyCss = require("gulp-minify-css"),
minifyHtml = require("gulp-minify-html"),
imagemin = require('gulp-imagemin');


// gulp.task('default', function() {
//     gulp.src('src/**').pipe(gulp.dest('dest/'));
// });

gulp.task('minify-js', function () {
    gulp.src('src/**/*.js') // 要压缩的js文件
    .pipe(uglify())  //使用uglify进行压缩,更多配置请参考：
    .pipe(gulp.dest('dest/')); //压缩后的路径
});

gulp.task('minify-css', function () {
    gulp.src('src/**/*.css') // 要压缩的css文件
    .pipe(minifyCss()) //压缩css
    .pipe(gulp.dest('dest/'));
});

gulp.task('minify-html', function () {
    gulp.src('src/**/*.html') // 要压缩的html文件
    .pipe(minifyHtml()) //压缩
    .pipe(gulp.dest('dest/'));
});

gulp.task('imagemin', function () {    
	gulp.src('src/img/*')
		.pipe(imagemin([
	                      imagemin.gifsicle({interlaced: true}),
	                      imagemin.jpegtran({progressive: true}),
	                      imagemin.optipng({optimizationLevel: 5}),
						  imagemin.svgo({
								plugins: [
									{removeViewBox: true},
									{cleanupIDs: false}
								]
						  })
	                    ]))
		.pipe(gulp.dest('dest/img')) 
});

var imageop = require('gulp-image-optimization');
 
gulp.task('imageopti', function() {
    gulp.src(['src/**/*.png','src/**/*.jpg','src/**/*.gif','src/**/*.jpeg']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('dest/'));
});

gulp.task('watch', function () {
    gulp.watch(['src/js/*.js','src/css/*.css','src/*.html'], ['minify-js','minify-css','minify-html']);
});

