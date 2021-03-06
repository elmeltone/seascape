var $ = require('jquery'),
	$layer_0 = $('.layer-0'),
	$layer_1 = $('.layer-1'),
	$layer_2 = $('.layer-2'),
	$layer_3 = $('.layer-3'),
	$x_axis  = $('#x-axis'),
	$y_axis  = $('#y-axis'),
	$container = $('body'),
	container_w = $container.width(),
	container_h = $container.height();

function addParallax() {
	$(window).on('mousemove.parallax', function(event) {
		var pos_x = event.pageX,
			pos_y = event.pageY,
			left = 0,
			top = 0;

		left = container_w / 2 - pos_x;
		top = container_h / 2 - pos_y;

		TweenMax.to(
			$x_axis,
			1,
			{
				css: {
					transform: 'translateX(' + (left * -1) + 'px)'
				},
				ease:Expo.easeOut,
				overwrite: 'all'
			});

		TweenMax.to(
			$y_axis,
			1,
			{
				css: {
					transform: 'translateY(' + (top * -1) + 'px)'
				},
				ease:Expo.easeOut,
				overwrite:'all'
			});

		TweenMax.to(
			$layer_2,
	    	12,
	    	{
	    		css: {
	        		transform: 'translateX(' + left / 12 + 'px) translateY(' + top / 6 + 'px)'
	    		},
	        	ease: Expo.easeOut,
	        	overwrite: 'all'
	      	});

		TweenMax.to(
			$layer_1,
	    	9,
	    	{
	    		css: {
	        		transform: 'translateX(' + left / 4 + 'px), translateY(' + top / 2 + 'px)'
	    		},
	        	ease: Expo.easeOut,
	        	overwrite: 'all'
	      	});

		TweenMax.to(
			$layer_3,
	    	15,
	    	{
	    		css: {
	        		transform: 'translateX(' + left / 40 + 'px), translateY(' + top / 2 + 'px)'
	    		},
	        	ease: Expo.easeOut,
	        	overwrite: 'all'
	      	});

		TweenMax.to(
			$layer_0,
	    	10,
	    	{
	    		css: {
	        		transform: 'rotate(' + left / 200 + 'deg)'
	    		},
	        	ease: Expo.easeOut,
	        	overwrite: 'none'
	      	}
	      )
	});
};


module.exports = addParallax;
