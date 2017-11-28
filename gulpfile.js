const gulp = require('gulp');
const cleancss = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify');
const del = require('del');

gulp.task('css', () => {
  return gulp.src(['src/css/*.css', 'src/*/css/*.css'], {base: './src/'})
      .pipe(cleancss())
      .pipe(gulp.dest('dist'))
});

gulp.task('images', () => {
  return gulp.src(['src/img/*', 'src/*/images/*'], {base: './src/'})
      .pipe(imagemin({
        interlaced: true,
        progressive: true,
        optimizationLevel: 6,
      }))
      .pipe(gulp.dest('dist'))
});

gulp.task('js', () => {
  return gulp.src(['src/js/*.js', 'src/*/js/*.js'], {base: './src/'})
      .pipe(uglify())
      .pipe(gulp.dest('dist'))
});

gulp.task('html', () => {
  return gulp.src(['src/*.html', 'src/*/*.html'], {base: './src/'})
      .pipe(htmlmin({
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
        removeComments: true
      }))
      .pipe(gulp.dest('dist'))
});


// 构建前先删除dist文件里的旧版本
gulp.task('clean', () => {
  return del('dist/*')
});
gulp.task('default', ['clean', 'css', 'images', 'js', 'html']);