let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let less = require('gulp-less');
let minify = require('gulp-minify');

gulp.task('css', function(){
    return gulp.src('assets/less/index.less')
        .pipe(less())
        .pipe(cleanCSS())
        .pipe(gulp.dest('css'))
});

gulp.task('js', function(){
    return gulp.src('assets/js/*.js')
        .pipe(minify({
            ext:{
                min:'.min.js'
            },
            noSource: true
        }))
        .pipe(gulp.dest('js'))
});

gulp.task('default', [ 'css', 'js' ]);