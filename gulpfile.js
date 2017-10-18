'use strict';

var gulp = require('gulp');
var luxcoreTasks = require('luxcore-build');

luxcoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
