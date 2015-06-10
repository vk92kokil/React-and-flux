var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');

gulp.task('browserify', function() {
    gulp.src('app/js/main.js')
        .pipe(browserify({transform:'reactify'}))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function() {
    gulp.src('app/index.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('default',['browserify', 'copy']);

gulp.task('watch', function() {
    gulp.watch('app/**/*.*', ['default']);
});