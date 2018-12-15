var gulp = require('gulp'),
    sass = require('gulp-sass'),
    inky = require('inky'),
    inlineCss = require('gulp-inline-css'),
    inlinesource = require('gulp-inline-source');


//STYLES
gulp.task('styles', function () {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css'));
});

//CONVERTE INKY
gulp.task('inky', ['styles'], function() {
  return gulp.src('src/templates/**/*.html')
    .pipe(inlinesource())
    .pipe(inky())
    .pipe(inlineCss({
        preserveMediaQueries: true,
        removeLinkTags: false
    }))
    .pipe(gulp.dest('dist'));
});

//WATCH
gulp.task('default',function() {
    gulp.watch(['src/scss/**/*.scss', 'src/templates/**/*.html'],['inky']);
});
