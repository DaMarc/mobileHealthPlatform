/**
 * makeChart is a wrapper around the javascript plugin http://chartjs.org
 *
 * we need to use window.makeChart, so we can use the function outside of the bundled browserified javascript file.
 * 
 * @param  {[HTML DOM Element]} DOMelement [document.getElementById("demo");]
 * @param  {[String]} type       [this is the type of the chart. we have included 'line', 'bar' and 'pie']
 * @param  {[json]} data         [dataset, with labels and stuff... (check README.md)]
 * @param  {[json]} options      [options, with scales and stuff... (check README.md)]
 */
window.makeChart = function(DOMelement, type, data, options) {
	new Chart(inputelement,{
	    type: type,
	    data: data,
	    options: options
	});
}; 