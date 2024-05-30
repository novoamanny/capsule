import { src, dest, watch, series, parallel } from 'gulp';
import del from 'del';
import imagemin from 'gulp-imagemin';
import wpPot from 'gulp-wp-pot';
import named from 'vinyl-named';
import webpack from 'webpack-stream';
import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'autoprefixer';
import yargs from 'yargs';
import sass from 'gulp-sass';
import cleanCss from 'gulp-clean-css';
import gulpif from 'gulp-if';
const PRODUCTION = yargs.argv.prod;

export const styles = () => {
  return src('src/scss/bundle.scss')
    .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulpif(PRODUCTION, postcss([autoprefixer])))
    .pipe(gulpif(PRODUCTION, cleanCss({ compatibility: 'ie8' })))
    .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
    .pipe(dest('dist/css'));
};

export const watchForChanges = () => {
  watch('src/scss/**/*.scss', styles);
  watch('src/js/**/*.js', scripts);
  watch('src/images/**/*.{jpg,jpeg,png,svg,gif}', images);
};

export const scripts = () => {
  return src(['src/js/bundle.js', 'src/js/admin.js'])
    .pipe(named())
    .pipe(
      webpack({
        module: {
          rules: [
            {
              test: /\.js$/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: [],
                },
              },
            },
          ],
        },
        mode: PRODUCTION ? 'production' : 'development',
        devtool: !PRODUCTION ? 'inline-source-map' : false,
        output: {
          filename: '[name].js',
        },
        externals: {
          jquery: 'jQuery',
        },
      })
    )
    .pipe(dest('dist/js'));
};

export const images = () => {
  return src('src/images/**/*.{jpg,jpeg,png,svg,gif}')
    .pipe(gulpif(PRODUCTION, imagemin()))
    .pipe(dest('dist/images'));
};

export const pot = () => {
  return src('**/*.php')
    .pipe(
      wpPot({
        domain: '_capsule',
        package: info.name,
      })
    )
    .pipe(dest(`languages/${info.name}.pot`));
};

export const dev = series(parallel(styles, scripts), watchForChanges);
export const build = series(parallel(styles, scripts), pot);
export const clean = () => del(['dist']);
export default dev;
