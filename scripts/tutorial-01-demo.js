var $mainNav = $('nav');

var mainNavTopPos = $mainNav.offset().top;

$(window).scroll(function(){
	
	if($(window).scrollTop() > mainNavTopPos){

		$mainNav.addClass('sticky');
		
	}else{

		$mainNav.removeClass('sticky');
    
	}
});



$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        
        if( $(this).parents('nav').hasClass('sticky') ){

          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;

        }else {

          $('html, body').animate({
            scrollTop: (target.offset().top - 50) // 50 is the height of the sticky nav...
          }, 1000);
          return false;

        }

      }
    }
  });
});
