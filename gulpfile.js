var ts = require('gulp-typescript');
var gulp = require('gulp');
var clean = require('gulp-clean');

var destPath = 'scripts/libs/';

// Delete the dist directory
gulp.task('clean', function() {
    return gulp.src(destPath)
        .pipe(clean());
});

gulp.task("scriptsNStyles", function() {
    gulp.src([
            'es6-shim/es6-shim.min.js',
            'systemjs/dist/system-polyfills.js',
            'systemjs/dist/system.src.js',
            'reflect-metadata/Reflect.js',
            'rxjs/**',
            'zone.js/dist/**',
            '@angular/**',
            'jquery/dist/jquery.*js',
            'bootstrap/dist/js/bootstrap*.js',
        ], {
            cwd: "node_modules/**"
        })
        .pipe(gulp.dest("scripts/libs"));

    gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.css'
    ]).pipe(gulp.dest('scripts/libs/css'));
});

//ts - task to transpile TypeScript files to JavaScript using Gulp-TypeScript 
var tsProject = ts.createProject('tsconfig.json');
gulp.task('ts', function() {    
    var tsResult = gulp.src([
            "scripts/**/*.ts"
        ])
        .pipe(ts(tsProject), undefined, ts.reporter.fullReporter());
    return tsResult.js.pipe(gulp.dest('scripts/appScripts'));
});

gulp.task('watch', ['watch.ts']);

gulp.task('watch.ts', ['ts'], function() {
    return gulp.watch('scripts/*.ts', ['ts']);
});

gulp.task('default', ['scriptsNStyles', 'watch']);