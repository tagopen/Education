var gulp          = require('gulp'),
    sass          = require('gulp-compass'),
    browserSync   = require('browser-sync'),
    concat        = require('gulp-concat'),
    uglify        = require('gulp-uglifyjs'),
    critical      = require('critical').stream,
    cssnano       = require('gulp-cssnano'),
    rename        = require('gulp-rename'),
    del           = require('del'),
    imagemin      = require('gulp-imagemin'),
    pngquant      = require('imagemin-pngquant'),
    cache         = require('gulp-cache'),
    autoprefixer  = require('gulp-autoprefixer')
    /*gulpSelectors = require('gulp-selectors')*/;

gulp.task('sass', function() {
  return gulp.src(['app/sass/**/*.+(scss|sass)'])
    .pipe(sass({
      css: 'app/css',
      sass: 'app/sass',
      image: 'app/img'
    }))
    .on('error', function(error) {
      // Would like to catch the error here 
      console.log(error);
      this.emit('end');
    })
    .pipe(autoprefixer(['last 15 versions', '>1%', 'ie 9'], {cascade: true}))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('scripts', function() {
  return gulp.src([
      'app/bower_components/jquery/dist/jquery.min.js',
      'app/bower_components/magnific-popup/dist/jquery.magnific-popup.min.js'
    ])
  .pipe(concat('libs.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('app/js'));
});

gulp.task('css-libs', ['sass'], function() {
  return gulp.src('app/css/libs.css')
  .pipe(cssnano())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('app/css'));
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    },
    notify: false
  });
});
/*
// Generate & Inline Critical-path CSS
gulp.task('critical', function () {
  return gulp.src('dist/*.html')
  .pipe(critical({base: 'dist/', inline: true, css: ['dist/styles/components.css','dist/styles/main.css']}))
  .pipe(gulp.dest('dist'));
});
*/
gulp.task('clean', function () {
  return del.sync('dist');
});

gulp.task('clear', function () {
  return cache.clearAll();
});

gulp.task('img', function() {
  return gulp.src('app/img/**/*')
    .pipe(cache(imagemin({
      interlaced: true,
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    })))
    .pipe(gulp.dest('dist/img'));
});

//gulp.task('minify-css-names', function() {
//  return gulp.src(['dist/css/*.css', 'dist/**/*.html', 'dist/js/*.js'])
//    .pipe(gulpSelectors.run())
//    .pipe(gulp.dest('build'));
//});

gulp.task('watch', ['browser-sync', 'css-libs', 'scripts'], function() {
  gulp.watch('app/sass/**/*.+(scss|sass)', ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('build', ['clean', 'img', 'sass', 'scripts'], function() {
  var buildCss = gulp.src([
      'app/css/style.css',
      'app/css/libs.min.css',
    ])
    .pipe(gulp.dest('dist/css'));

  var buildFonts = gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));

  var buildJs = gulp.src('app/js/**/*')
    .pipe(gulp.dest('dist/js'));

  var buildHtml = gulp.src('app/*.html')
    .pipe(gulp.dest('dist'));
});


gulp.task('dev', ['clean', 'img', 'sass', 'scripts'], function() {

  var buildCss = gulp.src(['app/css/**/*.css'])
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    //.pipe(cssnano())
    //.pipe(concat('all.min.css'))
    .pipe(gulp.dest('dist/css'));

  var buildFonts = gulp.src('app/font/**/*')
    .pipe(gulp.dest('dist/font'));

  var buildJs = gulp.src([
      'app/js/jquery.js'
      ])
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/js')); 
  var buildJs1 = gulp.src([
      'app/js/bootstrap.js'
      ])
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/js')); 
  var buildJs2 = gulp.src([
      'app/js/jqBootstrapValidation.js',
      ])
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/js')); 
  var buildJs3 = gulp.src([
      'app/js/jquery.maskedinput.js',
      ])
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/js')); 
  var buildJs4 = gulp.src([
      'app/js/jquery.reject.js',
      ])
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/js')); 
  var buildJs5 = gulp.src([
      'app/js/contact_me.js'
      ])
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/js')); 
  var buildJs6 = gulp.src([
      'app/js/main.js'
      ])
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/js')); 
  var buildJs7 = gulp.src([
      'app/js/mobile.carousel.swiper.min.js',
      ])
    .pipe(gulp.dest('dist/js')); 
  
  var buildJs8 = gulp.src([
      'app/js/slick.js'
      ])
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/js')); 

  var buildHtml = gulp.src('app/*.html')
    .pipe(gulp.dest('dist'));
});