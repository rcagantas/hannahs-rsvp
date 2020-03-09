const gulp = require('gulp');
const sass = require('gulp-sass');
const purgecss = require('gulp-purgecss');
const browserSync = require('browser-sync').create();

function style() {
    return gulp.src('scss/**/*.scss')
        .pipe(sass().on('error',sass.logError))
        .pipe(gulp.dest('css'))
        .pipe(purgecss({ content: ['index.html'] }))
        .pipe(browserSync.stream());
}

    function watch() {
    browserSync.init({
        server: {
            baseDir: ".",
            index: "./index.html"
        }
    });

    gulp.watch('scss/**/*.scss', style)
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

module.exports = {
    style,
    watch
};