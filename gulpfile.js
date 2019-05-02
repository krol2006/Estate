const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');
const minify = require('gulp-minify');
const concat = require('gulp-concat');
const html = require('gulp-nunjucks-render');
const gcmq = require('gulp-group-css-media-queries');
const wait = require('gulp-wait');

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: './dist'
        },
        port: 1338
    });
});

gulp.task('html', function () {
    return gulp.src('pages/*.html')
        .pipe(plumber())
        .pipe(html({
            path: ['blocks/']
        }))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
});

gulp.task('sass', function() {
    return gulp.src('./scss/init.scss')
        .pipe(plumber())
        .pipe(wait(200))
        .pipe(sass().on('error', sass.logError))
        .pipe(gcmq())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream())
});

gulp.task('fonts', function () {
    return gulp.src('fonts/*')
        .pipe(gulp.dest('dist/fonts'))
        .pipe(browserSync.stream());
});

gulp.task('js', function() {
    return gulp.src(['js/jquery.min.js', 'js/slick.min.js', 'js/jquery-ui.min.js', 'js/main.js'])
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('bundle.js'))
        .pipe(minify())
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
});

gulp.task('img', function() {
    return gulp.src('images/*')
        .pipe(plumber())
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch('pages/*.html', ['html']);
    gulp.watch('blocks/*.html', ['html']);
    gulp.watch('scss/**/*.scss', ['sass']);
    gulp.watch('images/*', ['img']);
    gulp.watch('js/*', ['js']);
    gulp.watch('fonts/*', ['fonts']);
});

gulp.task('compile', ['html', 'sass', 'js', 'img', 'fonts']);
gulp.task('default', ['server', 'watch', 'html', 'sass', 'js', 'img', 'fonts']);

