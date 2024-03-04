const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const srcmap = require('gulp-sourcemaps')
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify')

function sassCompiler() {
    return gulp.src('./src/styles/main.scss')
        .pipe(srcmap.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(srcmap.write('./maps'))
        .pipe(gulp.dest('./build/styles'))
}

function minifyImages() {
    return gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
}

function minifyJS() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))
}

exports.default = () => {
    gulp.watch('./src/styles/*.scss', { ignoreInitial: false }, gulp.series(sassCompiler))
    gulp.watch('./src/images/*', { ignoreInitial: false }, gulp.series(minifyImages))
    gulp.watch('./src/scripts/*.js', { ignoreInitial: false }, gulp.series(minifyJS))
}

exports.fastBuild = gulp.parallel(sassCompiler, minifyImages, minifyJS)
