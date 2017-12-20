;(function($) {
	"use strict";

	var worksSlider = $('.ba-slider')
	worksSlider.slick({
		slide: '.ba-slidde',
		prevArrow: '.ba-slider-prev',
		nextArrow: '.ba-slider-next',
		 infinite: true,
		 speed: 300,
		 slidesToShow: 3,
		 variableWidth: true

	});

})(jQuery);
