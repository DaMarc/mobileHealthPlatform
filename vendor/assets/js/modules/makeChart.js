window.makeChart = function(inputelement, type, data, options) {
	new Chart(inputelement,{
	    type: type,
	    data: data,
	    options: options
	});
}; 