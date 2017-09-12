var gulp = require('gulp');
//include our plugin
var jshint = require('gulp-jsint');
var sass = require('gulp-sass');
var concat = require('gulp-sass');
var uglify= require('gulp-ulgify');
gulp.task('lint',function(){
  return gulp.src('js/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});
gulp.task('sass', function(){
  return gulp.src('scss/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('dist/css'));
});
gulp.task('scripts',function(){
  return gulp.src('js/*.js')
  .pipe(concat('all.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('scss/*.scss', ['sass']);
});
// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);
