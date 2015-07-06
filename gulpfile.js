var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var $ = require('gulp-load-plugins')();



gulp.task('js-watch', browserSync.reload);

// use default task to launch Browsersync and watch JS files
gulp.task('serve',  function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        },
        logLevel: "silent",
        notify: false
    });


    gulp.watch(["./**/*.js","./**/*.html"], ['js-watch']);
    gulp.watch(["./**/*.jade"], ['jade']);
});


gulp.task('jade', function () {
    return gulp.src('./**/*.jade')
        .pipe($.jade({
            pretty: true
        }))
        .pipe(gulp.dest('./'))
})
