/*
* @Author: admin
* @Date:   2018-08-21 18:38:31
* @Last Modified by:   admin
* @Last Modified time: 2019-08-05 10:07:04
*/
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
// sass
// gulp.task('sass', function(){
// return gulp.src('app/scss/**/*.scss')
//     .pipe(sass()) // Converts Sass to CSS with gulp-sass
//     .pipe(autoprefixer(browsers))
//     .pipe(gulp.dest('app/css'))
//     .pipe(browserSync.reload({
//       stream: true
//     }))
// });
// watch
// gulp.task('watch', function(){
//   gulp.watch('app/scss/**/*.less', ['less']);
//   // Other watchers
// })
// // 
less = require("gulp-less") // less 编译

var gulp = require('gulp');
var less = require('gulp-less');
var LessPluginAutoPrefix = require('less-plugin-autoprefix');
var autoprefix = new LessPluginAutoPrefix({
    browsers: ["last 5 versions"],
    cascade: true
});
var plumber = require('gulp-plumber');

gulp.task('less',function(){
	return gulp.src('./src/less/**/*.less')
    .pipe(plumber())
    .pipe(less({
        plugins: [autoprefix]
    }))
.pipe(gulp.dest('src/css'));
})


// browser Sync
gulp.task('browserSync',function(){
	browserSync({
		server:{
			baseDir:'src'
		}
	})
})

// gulp.task('watch', function() {
// 	gulp.watch(('./app/less/**/*.less'), ['less']);
// })
// 

var smushit = require('gulp-smushit');//
gulp.task('smushit', function () {
    return gulp.src('src/img/*.*')
        .pipe(smushit({
            verbose: true
        }))
        .pipe(gulp.dest('src/images'));
});

// 浏览器兼容补全
var autoprefixer = require('gulp-autoprefixer');
gulp.task('autoprefixer', () =>
    gulp.src('src/css/*.css')
    .pipe(autoprefixer({
    	browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('src/css'))
);

// 监听刷新
gulp.task('watch',['browserSync','less','autoprefixer'],function(){
	gulp.watch(('./src/less/**/*.less'), ['less']);
	gulp.watch('src/*.html', browserSync.reload);
	gulp.watch('src/js/**/*.js', browserSync.reload);
	gulp.watch(('src/css/*.css'),browserSync.reload)
})