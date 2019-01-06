var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
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

// Static Server + watching scss/php files
function watchFiles() {
  browserSync.init({
    proxy: 'alonso.tech',
  });

  gulp.watch('./sass/**/*.scss', preprocess);
  gulp.watch('./**/*.php', browserSync.reload);
};
gulp.task('watchFiles', watchFiles);

gulp.task('default', gulp.parallel(watchFiles, preprocess));
