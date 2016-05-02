var $ = require('jquery');
var makeBackgroundRed = require('./background');
var addParallax = require('./functions');

$(function() {
	makeBackgroundRed();
	addParallax();
});