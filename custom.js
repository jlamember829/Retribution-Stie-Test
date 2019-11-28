jQuery(document).ready(function($) {
	$('.banner_slider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.thumbnail_slider'
	});
	
	$('.thumbnail_slider').slick({
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  asNavFor: '.banner_slider',
	  arrows: false,	
	  dots: false,
	  centerMode: true,
	  focusOnSelect: true,
	  responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			arrows: false,	
			dots: false,
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	  ]
	});
});