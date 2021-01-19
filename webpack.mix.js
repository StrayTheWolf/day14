let mix = require('laravel-mix');

mix.sass('src/scss/styles.scss', 'dist/css').options({processCssUrls : false});


mix.copy('src/index.html', 'dist/index.html');
mix.copyDirectory('src/images', 'dist/images');

