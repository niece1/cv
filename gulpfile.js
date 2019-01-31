const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const cssnano      = require('gulp-cssnano');
const sass        = require('gulp-sass');
const rename       = require('gulp-rename');
const uglify       = require('gulp-uglify');
const imagemin     = require('gulp-imagemin');
const autoprefixer = require('gulp-autoprefixer');

// Compile sass into CSS & auto-inject into browsers
function preprocess() {
  return gulp.src('./sass/**/*.scss')
  .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 5 versions'],
    cascade: true
  }))
  .pipe(gulp.dest('./css'))
  .pipe(browserSync.stream());
};
gulp.task('sass', sass);

// Compressing css files
function minify() {
  return gulp.src('./css/main.css')
  .pipe(cssnano())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('./css'));
};
gulp.task('minify', minify);

// Compressing js files
function scripts() {
  return gulp.src('./js/main.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./js'));
};
gulp.task('scripts', scripts);

// Compressing images
function image() {
  return gulp.src('./img/*')
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
	.pipe(gulp.dest('./images'));
};
gulp.task('image', image);

// Static Server + watching scss/php files
function watchFiles() {
  browserSync.init({
    proxy: 'alonso.tech',
  });

  gulp.watch('./sass/**/*.scss', preprocess);
//  gulp.watch("./js/**/*.js, css);
  gulp.watch('*.php', browserSync.reload);
};
gulp.task('watchFiles', watchFiles);

gulp.task('default', gulp.parallel(watchFiles, preprocess));
