# CAPSULE - https://www.dfwcapsule.com/
===

## References

### General

**Github:** <a href="https://github.com/digitalthrive/capsule-wp" target="_blank">https://github.com/digitalthrive/capsule-wp</a><br />
**Deploybot:** This project uses `Deploybot` for deployment to production and development environments.<br />
**Google Tag Manager:** <a href="https://tagmanager.google.com/" target="_blank">https://tagmanager.google.com/</a> via `warrendouglascbm@gmail.com`<br />

### Production

**Website:** <a href="https://www.dfwcapsule.com/" target="_blank">https://www.dfwcapsule.com/</a><br />
**Database:** TBD<br />

### Development

**Website:** <a href="https://dev.capsule.wdgital.com" target="_blank">https://dev.capsule.wdgital.com</a><br />
**Database:** `capsule` located on `dev.capsule.wdgital.com`<br />

## Project Setup

This project requires Node version `11.10.0` in order to install the appropriate dependencies.

Use `NVM` to install or switch to version node version 11.10.0

### Initial

- Navigate to `wp-content/themes/capsule` and run `npm install`
- You may have to install `gulp` manually by running `npm install -g gulp`

### Ongoing

- Run `gulp` from the `wp-content/themes/capsule` directory to consolidate SCSS into `dist/css/bundle.css`.
- All CSS files need to be converted or renamed to .scss, and stored in the `src/scss` directory. The CSS Gulp task will not work with basic .css files.
- For development purposes, `gulp-sourcemaps` was added so that you can actually see what .SCSS file is referencing a class, instead of saying `bundle.css`. Running `gulp` with no flags will cause this to occur, and unminify bundle.css. Running the production commands below will minify everything and turn off the source map feature.

### Production

- Run `gulp styles --prod` to consolidate and minify all of the SCSS files into `dist/css/bundle.css` for production.
- Run `gulp scripts --prod` to minify all of the js files into `dist/js/bundle.js` for production.

## Technologies

### Languages / Libraries

- PHP
- jQuery
- Sass
- SOAP API

### WordPress

**Plugins**

The plugins listed below are essential to how Capsule is currently built. There are other plugins installed on the website, but the ones listed below have significant influence on the website.

- Advanced Custom Fields Pro
- Contact Form 7 (Various forms through the website)
- Post SMTP (email so forms send properly)

## Features

TBD

## Tasks & Processes

TBD

## Miscellaneous

TBD
