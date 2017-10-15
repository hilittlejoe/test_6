var gulp = require('gulp');
var less = require('gulp-less');
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var htmlMin = require('gulp-htmlmin');
var browserSync = require('browser-sync');

gulp.task('style', function () {
    gulp.src(['views/css/*.css','./css/*.css', '!src/style/_*.css'])
        .pipe(less())
        .pipe(cssnano())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({
        stream:true
    }))

})

gulp.task('script', function () {
    gulp.src('views/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.reload({
        stream:true
    }))

})

gulp.task('image', function () {
    gulp.src(['views/images/*.*','./img/*.*'])
        .pipe(gulp.dest('dist/images'))
        .pipe(browserSync.reload({
        stream:true
    }))

})

gulp.task('htmlMin', function () {
    gulp.src('views/*.html').pipe(htmlMin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({
        stream:true
    }))

})

gulp.task('serve',['style','script','image','htmlMin'], function () {
    browserSync({
        server: {
            baseDir:'./',
            directory: true
        },
        port:8333
    }, function (err, bs) {
        console.log(bs.options.getIn(['urls','local']))
    })
})

