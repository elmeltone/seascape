var $ = require('jquery');

var addParallax = function(){
	$(window).scroll(function(){
		console.log('hi');
	});
};

module.exports = addParallax;