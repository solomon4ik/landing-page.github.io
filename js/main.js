var swiper = new Swiper( '.swiper-container.two', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    effect: 'coverflow',
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    autoplay: {
        delay: 3000,
    },
    coverflow: {
        rotate: 0,
        stretch: 100,
        depth: 150,
        modifier: 1.5,
        slideShadows : false,
    }
});
// $(window).scroll(function() {
//     if ($(this).scrollTop()>=500) {
//       $('.scrollup').fadeIn('slow','linear');
//     }
//     else {
//       $('.scrollup').fadeOut('fast','swing');
//     }
// });

/////button-top_function\\\\\
$(document).ready(function(){
	$('#get-contact-us').click(function(){
		$("#get-contact-us").css("display", "none;");
	});
	$("#get-contact-us").fadeIn(2800);
	$("#get-contact-us").on("click", function(event){
		event.preventDefault();
		var top = $("#b").offset().top;
		$("html, body").animate({
			scrollTop: top
		}, 800);
	});
});

/////Nubber couting\\\\\
jQuery(document).ready(function($) {
  $('.counter').counterUp({
      delay: 100,
      time: 2000
  });
});
	


