import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

//open nav list
$("#burger-check").click(function(){
	$(".header_nav_list").toggleClass("open-list");
});

//scroll to a section
$('a[href*="#"]:not([href="#"])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

		var target = $(this.hash);

		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
			return false;
		}
	}
});
