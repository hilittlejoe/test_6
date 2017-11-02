var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var imageminJpegoptim = require('imagemin-jpegoptim');

gulp.task('images', function () {
    gulp.src('views/images/*.{png,jpg,gif,ico}')
        .pipe(imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.optipng({ optimizationLevel: 1 }),
            imagemin.svgo({
                plugins: [
                    { removeViewBox: true },
                    { cleanupIDs: false }
                ]
            }),
            imageminJpegoptim({progressive:true,max:65})
        ],
            {
                verbose: true
            }))
        .pipe(gulp.dest('dist/views/images'));
});

gulp.task('img', function () {
    gulp.src('img/*.{png,jpg,gif,ico}')
        .pipe(imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.optipng({ optimizationLevel: 1 }),
            imagemin.svgo({
                plugins: [
                    { removeViewBox: true },
                    { cleanupIDs: false }
                ]
            }),
            imageminJpegoptim({progressive:true,max:65})
        ],
            {
                verbose: true
            }))
        .pipe(gulp.dest('dist/img'));
});

gulp.task('auto', function () {
    gulp.watch('views/images/*.{png,jpg,gif,ico}', ['images']);
    gulp.watch('img/*.{png,jpg,gif,ico}', ['img']);
});

// 使用 gulp.task('default') 定义默认任务
// 在命令行使用 gulp 启动 images 任务和 auto 任务
gulp.task('default', ['images', 'img', 'auto']);