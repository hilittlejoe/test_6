const gulp = require('gulp'),
      connect = require('gulp-connect'),
      csso = require('gulp-csso'),
      htmlmin = require('gulp-htmlmin'),
      uglify = require('gulp-uglify'),
      imagemin = require('gulp-imagemin'),
      del = require('del'),
      psi = require('psi'),
      sequence = require('run-sequence'),
      ngrok = require('ngrok'),
      port = 8080;
const config = {
  html: [
    '*.html',
    'views/*.html'
  ],
  img: [
    'img/*',
    'views/images/*'
  ],
  css: [
    'css/*.css',
    'views/css/*.css'
  ],
  js: [
    'js/*.js',
    'views/js/*.js'
  ]
};
var site = '';

gulp.task('clean', function() {
  return del(['dist']).then(paths => {
    console.log('Deleted files and folders:\n', paths.join('\n'));
  });
});

gulp.task('minify', function() {
  return gulp.src(config.html, {base: '.'})
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

gulp.task('optimizeCSS', function() {
  return gulp.src(config.css, {base: '.'})
      .pipe(csso())
      .pipe(gulp.dest('dist'));
});

gulp.task('compressJS', function() {
  return gulp.src(config.js, {base: '.'})
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('minImages', function() {
  return gulp.src(config.img, {base: '.'})
    .pipe(imagemin())
    .pipe(gulp.dest('dist'))
});

gulp.task('ngrok-url', function(cb) {
  return ngrok.connect(port, function (err, url) {
    site = url;
    console.log('serving your tunnel from: ' + site);
    cb();
  });
});

gulp.task('psi-mobile', function () {
    return psi(site, {
        nokey: 'true',
        strategy: 'mobile',
    }).then(function (data) {
      console.log('Speed score: ' + data.ruleGroups.SPEED.score);
      console.log('Usability score: ' + data.ruleGroups.USABILITY.score);
    });
});

gulp.task('psi-desktop', function () {
  return psi(site, {
    nokey: 'true',
    strategy: 'desktop',
  }).then(function (data) {
    console.log('Speed score: ' + data.ruleGroups.SPEED.score);
  });
});

gulp.task('psi-seq', function (cb) {
  return sequence(
    'serve-dist',
    'ngrok-url',
    'psi-desktop',
    'psi-mobile',
    cb
  );
});

gulp.task('build', function(cb){
  return sequence(
    'clean',
    'minify',
    'optimizeCSS',
    'compressJS',
    'minImages',
    cb
  );
});

gulp.task('serve-dist', ['build'], function(){
  connect.server({
    root: "dist",
    port: port
  });
});

gulp.task('serve-psi', ['psi-seq'], function(){
  console.log('Woohoo! Check out your page speed scores!')
});

gulp.task('default', function(){
  connect.server({
    port: port
  });
});
