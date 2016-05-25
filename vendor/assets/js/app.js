/**
 * This is our entry point to bundle all javascript files that our framework provides into one single .js file. 
 * This is done via laravel-elixir - the exelent wrapper around gulp https://github.com/laravel/elixir
 */

// Import Jquery & Jquery Mobile
var $ = require('jquery');
$.mobile = require ('jquery-mobile');

// Import ChartJS
window.Chart = require('chart.js');
// Import wrapper around chartjs
require('./modules/makeChart.js');