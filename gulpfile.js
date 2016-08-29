const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');

gulp.task('default',['build-js','build-css']);

gulp.task('build-js',function(){
    gulp.src('./src/js/**/*.js')
        .pipe(concat('peptide.js'))
        .pipe(gulp.dest('./dist'));
})

gulp.task('build-css',function(){
    gulp.src('./src/sass/**/*.scss')
        
        .pipe(concat('peptide.css'))
        .pipe(gulp.dest('./dist'));
})
