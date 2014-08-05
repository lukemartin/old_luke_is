# Load required libraries
gulp       = require 'gulp'
gutil      = require 'gulp-util'
coffee     = require 'gulp-coffee'
concat     = require 'gulp-concat'
livereload = require 'gulp-livereload'
sourcemaps = require 'gulp-sourcemaps'
sass       = require 'gulp-sass'


# Gulp tasks
gulp.task 'coffee', ->
  gulp.src './coffee/**/*.coffee'
    .pipe sourcemaps.init()
    .pipe coffee({ bare: false }).on('error', gutil.log)
    .pipe sourcemaps.write()
    .pipe concat('main.js')
    .pipe gulp.dest('./contents/scripts')
    .pipe livereload()

gulp.task 'sass', ->
  gulp.src './sass/**/*.scss'
    .pipe sass({ sourceMap: 'sass', sourceComments: 'map' })
    .pipe gulp.dest('./contents/styles')
    .pipe livereload()

gulp.task 'livereload', ->
  gulp.src ['./templates/**/*.html', './contents/**/*.md', './contents/**/*.json']
    .pipe livereload()

gulp.task 'package', ->
  gulp.src './coffee/**/*.coffee'
    .pipe coffee({ bare: false }).on('error', gutil.log)
    .pipe concat('main.js')
    .pipe gulp.dest('./contents/scripts')
  gulp.src './sass/**/*.scss'
    .pipe sass()
    .pipe gulp.dest('./contents/styles')


# Default tasks
gulp.task 'default', ['coffee', 'sass'], ->
  gulp.watch './coffee/**/*.coffee', ['coffee']
  gulp.watch './sass/**/*.scss', ['sass']
  gulp.watch ['./templates/**/*.html', './contents/**/*.md', './contents/**.*.json'], ['livereload']