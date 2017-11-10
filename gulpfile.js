var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var $ = gulpLoadPlugins();
var pngquant = require('imagemin-pngquant');

gulp.task('clean', function() {
    return gulp.src(['dist'], { read: false })
        .pipe($.rimraf({ force: true }));
});

gulp.task('image', ['clean'], function() {
    return gulp.src('img/*')
        .pipe($.cache($.imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img'));
});

gulp.task('image2', ['clean'], function() {
    return gulp.src('views/images/*')
        .pipe($.cache($.imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/views/images'));
});

gulp.task('css', ['clean'], function() {
    return gulp.src('css/*')
        .pipe($.autoprefixer({ remove: false }))
        .pipe($.cssmin({ advanced: false }))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('css2', ['clean'], function() {
    return gulp.src('views/css/*')
        .pipe($.autoprefixer({ remove: false }))
        .pipe($.cssmin({ advanced: false }))
        .pipe(gulp.dest('dist/views/css'));
});

gulp.task('js', ['clean'], function() {
    return gulp.src('js/*.js')
        .pipe($.uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('js2', ['clean'], function() {
    return gulp.src('views/js/*.js')
        .pipe($.uglify())
        .pipe(gulp.dest('dist/views/js'));
});

gulp.task('html', ['clean'], function() {
    return gulp.src('*.html')
        .pipe($.processhtml())
        .pipe(gulp.dest('dist'));
});

gulp.task('html2', ['clean'], function() {
    return gulp.src('views/*.html')
        .pipe($.processhtml())
        .pipe(gulp.dest('dist/views'));
});

gulp.task('default', [], function() {
    gulp.run('image', 'image2', 'css', 'css2', 'js', 'js2', 'html', 'html2');
});