const gulp = require('gulp');
const concat = require('gulp-concat');
gulp.task('default',['build-js']);

gulp.task('build-js',function(){
    gulp.src('./src/*.js')
        .pipe(concat('peptide.js'))
        .pipe(gulp.dest('./dist'));
})
