jQuery.fn.exists = function() {
	return jQuery(this).length > 0;
};

jQuery.fn.scrollToShow = function(options) {
	$('html, body').animate({
		scrollTop: jQuery(this).offset().top
	}, options);
}
