$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 75
        }, 1000);
        return false;
      }
    }
  });
});


(function ($) {
  $(document).ready(function(){
	$(".navbar").hide();

	$(function () {
		$(window).scroll(function () {
      height = $(window).height() - 76;
			if ($(this).scrollTop() > height) {
				$('.navbar').fadeIn("fast");
			} else {
				$('.navbar').fadeOut("fast");
			}
		});
	});
});
  }(jQuery));
