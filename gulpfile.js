/**
 * This gulpfile.js is part of modsoussi.xyz.
 * 
 * (c) 2016. modsoussi.
 */

var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('serve', function(){
	browserSync({
		server: {
			baseDir: './public/src/main/'
		}
	});
	
	gulp.watch(['*.html','styles/**/*.css','scripts/**/*.js'],{cwd: 'public'}, reload);
});

