var gulp = require('gulp');
var sass = require('gulp-sass');
const watchSass = require("gulp-watch-sass")

gulp.task('sass', function () {
    gulp.src('src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/css'))
})

gulp.task('sass-watch', function () {
    gulp.watch('src/sass/**/*.scss', ['sass', 'scss'])
})

gulp.task("sass:watch", () => watchSass([
    "src/sass/**/*.scss"
])
    .pipe(sass())
    .pipe(gulp.dest("src/css")));

gulp.task("sass:watch", () => {
    gulp.watch([
        "src/sass/**/*.scss"], ["sass"]);
});

gulp.task("sass:watch", () => watch([
    "src/sass/**/*.scss"])
    .pipe(sass())
    .pipe(gulp.dest("src/css")));

gulp.task('watch', function () {
    gulp.watch('src/sass/**/*.scss', ['sass']);
    // Other watchers
})

gulp.task('default', ['sass']);