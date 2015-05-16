var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var opn = require('opn');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

var tinylr;
var server = {
  host: 'localhost',
  port: '3000'
};

function notifyLiveReload(event) {
  var fileName = require('path').relative(__dirname, event.path);
  tinylr.changed({
    body: {
      files: [fileName]
    }
  });
}

gulp.task('livereload', function() {
  tinylr = require('tiny-lr')();
  tinylr.listen(35729);
});

gulp.task('sass', function() {
  return gulp.src('css/main.scss')
    .pipe(sass({
      errLogToConsole: true,
      onError: function(err) {
        return notify().write(err);
      }
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
  gulp.watch('css/**/*.scss', ['sass']);
  gulp.watch('js/app/**/*.js', notifyLiveReload);
  gulp.watch('js/app/*.js', notifyLiveReload);
  gulp.watch('*.html', notifyLiveReload);
  gulp.watch('js/app/template/*.html', notifyLiveReload);
  gulp.watch('css/main.css', notifyLiveReload);
});

gulp.task('connect', function() {
  connect.server({
    port: server.port,
    livereload:  false
  });
});

gulp.task('openbrowser', function() {
  opn( 'http://' + server.host + ':' + server.port, "Google Chrome" );
});

// watch for changes and update
gulp.task('default', ['livereload', 'sass', 'watch', 'connect', 'openbrowser']);
