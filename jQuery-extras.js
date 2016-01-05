jQuery.fn.exists = function() {
	return jQuery(this).length > 0;
};

jQuery.fn.scrollTo = function(options) {
	$('html, body').animate({
		scrollTop: jQuery(this).offset().top
	}, options);
}
