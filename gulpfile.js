
// 引入gulp
var gulp = require('gulp');
var sass = require('gulp-sass');

// 创建一个gulp任务,编译sass文件
gulp.task('bySass',function(){

    // console.log(222);

    // 查找sass文件,得到文件流
    gulp.src('./src/sass/*.scss')

    // 编译sass
    // .pipe(sass({outputStyle:'expanded'}))
    .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))


    // 把编译后得到的css文件输出到css文件夹中
    .pipe(gulp.dest('./src/css/'))

});


// 创建文件监听任务,自动编译
gulp.task('jtSass',function(){

    // 当sass文件有修改，则执行bySass任务
    gulp.watch('./src/sass/*.scss',['bySass'])

})