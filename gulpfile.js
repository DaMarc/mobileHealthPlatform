var elixir = require('laravel-elixir');

elixir.config.css.sass.folder = '../../vendor/assets/sass/';

elixir(function(mix) {

<<<<<<< HEAD
    mix.sass('app.scss', 'www/css/app.css', {assetsDir: 'vendor/assets/sass'});

    // Javascript
    mix.browserify('app.js', 'www/js/app.js', 'vendor/assets/js/');
=======
    mix.sass('app.scss', 'www/css/vendor.css', {assetsDir: 'vendor/assets/sass'});

    // Javascript
    mix.browserify('app.js', 'www/js/vendor.js', 'vendor/assets/js/');
>>>>>>> structure/vendor-functions

    // mix.version(['css/app.css', 'js/app.js']);

});
