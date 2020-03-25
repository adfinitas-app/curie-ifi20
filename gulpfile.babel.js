'use strict';

import plugins       from 'gulp-load-plugins';
import yargs         from 'yargs';
import browser       from 'browser-sync';
import gulp          from 'gulp';
import rimraf        from 'rimraf';
import yaml          from 'js-yaml';
import fs            from 'fs';
import dateFormat    from 'dateformat';
import webpackStream from 'webpack-stream';
import webpack2      from 'webpack';
import named         from 'vinyl-named';
import log           from 'fancy-log';
import colors        from 'ansi-colors';

import bulkSass      from 'gulp-sass-bulk-import';

import injectPartials from 'gulp-inject-partials';
// import injectVars     from 'gulp-inject-env-variables';

import rename         from 'gulp-rename';
import svgstore       from 'gulp-svgstore';
import svgmin         from 'gulp-svgmin';
import path           from 'path';
import cheerio        from 'gulp-cheerio';


// Load all Gulp plugins into one variable
const $ = plugins();

// Check for --production flag
const PRODUCTION = !!(yargs.argv.production);

// Check for --development flag unminified with sourcemaps
const DEV = !!(yargs.argv.dev);

// Load settings from settings.yml
const { BROWSERSYNC, COMPATIBILITY, TEMPLATES, REVISIONING, PATHS } = loadConfig();

// Check if file exists synchronously
function checkFileExists(filepath) {
  let flag = true;
  try {
    fs.accessSync(filepath, fs.F_OK);
  } catch(e) {
    flag = false;
  }
  return flag;
}



// Load default or custom YML config file
function loadConfig() {
  log('Loading config file...');

  if (checkFileExists('config.yml')) {
    log(colors.bold(colors.cyan('config.yml')), 'exists, loading', colors.bold(colors.cyan('config.yml')));
    let ymlFile = fs.readFileSync('config.yml', 'utf8');
    return yaml.load(ymlFile);
  } else {
    log('Exiting process, no config file exists.');
    process.exit(1);
  }
}

// Delete the "dist" folder
// This happens every time a build starts
function clean(done) {
  rimraf(PATHS.dist, done);
}

// Copy files out of the assets folder
// This task skips over the "images", "js", and "scss" folders, which are parsed separately
function copy() {
  return gulp.src(PATHS.assets)
    .pipe(gulp.dest(PATHS.dist));
}

// Compile Sass into CSS
// In production, the CSS is compressed
function sass() {
  return gulp.src('src/scss/app.scss')
    .pipe(bulkSass())
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      // includePaths: PATHS.sass
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: COMPATIBILITY
    }))

    .pipe($.if(PRODUCTION, $.cleanCss({ compatibility: 'ie9' })))
    .pipe($.if(!PRODUCTION, $.sourcemaps.write()))
    .pipe($.if(REVISIONING && PRODUCTION || REVISIONING && DEV, $.rev()))
    .pipe(gulp.dest(PATHS.dist + '/css'))
    .pipe($.if(REVISIONING && PRODUCTION || REVISIONING && DEV, $.rev.manifest()))
    .pipe(gulp.dest(PATHS.dist + '/css'))
    .pipe(browser.reload({ stream: true }));
}

// Combine JavaScript into one file
// In production, the file is minified
const webpack = {
  config: {
    module: {
      rules: [
        {
          test: /.js$/,
          loader: 'babel-loader',
          exclude: /node_modules(?!\/foundation-sites)/,
        },
      ],
    },
    externals: {
      jquery: 'jQuery',
    },
  },

  changeHandler(err, stats) {
    log('[webpack]', stats.toString({
      colors: true,
    }));
    browser.reload();
  },

  build() {
    log ('build rev:'+REVISIONING +' | prod:'+ PRODUCTION+' | dev:'+DEV);
    return gulp.src(PATHS.entries)
      .pipe(named())
      .pipe(webpackStream(webpack.config, webpack2))
      .pipe($.if(PRODUCTION, $.uglify()
        .on('error', e => { console.log(e); }),
      ))
      .pipe($.if(REVISIONING && PRODUCTION || REVISIONING && DEV, $.rev()))
      .pipe(gulp.dest(PATHS.dist + '/js'))
      .pipe($.if(REVISIONING && PRODUCTION || REVISIONING && DEV, $.rev.manifest()))
      .pipe(gulp.dest(PATHS.dist + '/js'));
  },

  watch() {
    const watchConfig = Object.assign(webpack.config, {
      watch: true,
      devtool: 'inline-source-map',
    });

    return gulp.src(PATHS.entries)
      .pipe(named())
      .pipe(webpackStream(watchConfig, webpack2, webpack.changeHandler)
        .on('error', (err) => {
          log('[webpack:error]', err.toString({
            colors: true,
          }));
        }),
      )
      .pipe(gulp.dest(PATHS.dist + '/js'));
  },
};

gulp.task('webpack:build', webpack.build);
gulp.task('webpack:watch', webpack.watch);

// Copy images to the "dist" folder
// In production, the images are compressed
function images() {
  return gulp.src('src/images/**/*')
    .pipe($.if(PRODUCTION, $.imagemin({
      progressive: true
    })))
    .pipe(gulp.dest(PATHS.dist + '/images'));
}

// Create a .zip archive of the theme
function archive() {
  var time = dateFormat(new Date(), "yyyy-mm-dd_HH-MM");
  var pkg = JSON.parse(fs.readFileSync('./package.json'));
  var title = pkg.name + '_' + time + '.zip';

  return gulp.src(PATHS.package)
    .pipe($.zip(title))
    .pipe(gulp.dest('packaged'));
}

// Start BrowserSync to preview the site in
function server(done) {
  browser.init({
    proxy: BROWSERSYNC.url,

    ui: {
      port: 8080
    },

  });
  done();
}

// Reload the browser with BrowserSync
function reload(done) {
  browser.reload();
  done();
}


//SVG build ******************************************************************************************
gulp.task('svg_build', function () {
    //var svgs =  gulp
    return gulp
        .src(PATHS.watch_svg, { base: 'sprites' })
        .pipe(rename({prefix: ''}))
        .pipe(svgmin())
        .pipe(svgstore( {inlineSvg: true} ))
        .pipe(cheerio({
          run: function ($, file) {
            $('svg').attr('style', 'display:none;');
            $('symbol[id*="icon"] path').removeAttr('fill');
          },
          parserOptions: { xmlMode: true }
        }))
        .pipe(gulp.dest(PATHS.dist_svg));
});

//
gulp.task('templates_task', function () {
	return gulp.src(TEMPLATES.entries)
		.pipe(injectPartials(TEMPLATES.injectPartials))
		.pipe(gulp.dest(PATHS.dist))
    .pipe(browser.reload({ stream: true }));
});

// Watch for changes to static assets, pages, Sass, and JavaScript
function watch() {
  //templating
  gulp.watch(TEMPLATES.watch, gulp.series('templates_task'));
  //assets
  gulp.watch(PATHS.assets, copy);
  //css
  gulp.watch('src/scss/**/*.scss', sass)
    .on('change', path => log('File ' + colors.bold(colors.magenta(path)) + ' changed.'))
    .on('unlink', path => log('File ' + colors.bold(colors.magenta(path)) + ' was removed.'));
  //php
  gulp.watch('**/*.php', reload)
    .on('change', path => log('File ' + colors.bold(colors.magenta(path)) + ' changed.'))
    .on('unlink', path => log('File ' + colors.bold(colors.magenta(path)) + ' was removed.'));
  // gulp.watch('src/assets/images/**/*', gulp.series(images, browser.reload)) ///issue with gulp.serie : not copy done
  //media
  gulp.watch('src/images/**/*', images)
    .on('change', path => log('Image ' + colors.bold(colors.magenta(path)) + ' changed.'));
  //svg
  gulp.watch(PATHS.watch_svg,     gulp.series('svg_build'));
}

// Build the "dist" folder by running all of the below tasks
gulp.task('build',
  gulp.series(clean, 'templates_task', gulp.parallel(sass, 'webpack:build', 'svg_build', images, copy)));

// Build the site, run the server, and watch for file changes
gulp.task('default',
  gulp.series('build', server, gulp.parallel('webpack:watch', watch)));

  //log('production is :'+PRODUCTION);

//svg

// gulp.task('svgstore', function () {
//   return gulp.src( 'src/svg/*.svg' )
//   .pipe(svgstore())
//   .pipe(rename( 'spritesheet.svg' ))
//   .pipe(gulp.dest( 'dist/svg' ));
// });


// Package task
gulp.task('package',
  gulp.series('build', archive));
