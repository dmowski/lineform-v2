'use strict';

var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var stylus = require('gulp-stylus');
var csso = require('gulp-csso');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var plumber = require('gulp-plumber');

var path = {
  build: {
    style: 'src',
    img: 'src/assets/img'
  },
  src: {
    style: 'src/app/styles.styl',
    img: 'src/app/components/images/**/*'
  },
  watch: {
    style: 'src/app/**/*.styl',
    img: 'src/app/components/images/**/*'
  }
};

gulp.task('style:build', function() {
  return gulp.src(path.src.style)
    .pipe(plumber())
    .pipe(stylus({
      'include css': true
    }))
    .pipe(csso())
    .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
    .pipe(gulp.dest(path.build.style));
});

gulp.task('image:build', function() {
  return gulp.src(path.src.img)
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{
        removeViewBox: false
      }],
      use: [pngquant()],
      interlaced: true
    }))
    .pipe(gulp.dest(path.build.img));
});

gulp.task('build', [
  'style:build',
  'image:build'
]);

gulp.task('watch', function() {
  watch([path.watch.style], function(event, cb) {
    gulp.start('style:build');
  });
  watch([path.watch.img], function(event, cb) {
    gulp.start('image:build');
  });
});

gulp.task('default', ['build']);
