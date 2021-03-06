$(document).ready(function() {
	
	/* parallax */
	
	$('body').stellar({
		scrollProperty: 'scroll',
		positionProperty: 'transfade',
		horizontalScrolling: false,	
		hideDistantElements: true,
		horizontalOffset: 0,
		verticalOffset: 0
	});
	
	/* fancybox */
	
	$('.fancybox').fancybox();
	
	/* sticky navigation */
	
	$('#nav_bar').scrollFix({
		fixOffset: 1
	});
	
	/* social links */
	
	$( "ul[class*='social_info'] li a[href*='facebook']" ).empty().append( '<span class="icon icon-facebook"></span>' ).addClass('facebook');
	$( "ul[class*='social_info'] li a[href*='instagram']" ).empty().append( '<span class="icon icon-instagram"></span>' ).addClass('instagram');
	$( "ul[class*='social_info'] li a[href*='twitter']" ).empty().append( '<span class="icon icon-twitter"></span>' ).addClass('twitter');
	$( "ul[class*='social_info'] li a[href*='google']" ).empty().append( '<span class="icon icon-googleplus"></span>' ).addClass('googleplus');
	$( "ul[class*='social_info'] li a[href*='pinterest']" ).empty().append( '<span class="icon icon-pinterest"></span>' ).addClass('pinterest');
	$( "ul[class*='social_info'] li a[href*='youtube']" ).empty().append( '<span class="icon icon-youtube"></span>' ).addClass('youtube');
	$( "ul[class*='social_info'] li a[href*='yelp']" ).empty().append( '<span class="icon icon-yelp"></span>' ).addClass('yelp');
	$( "ul[class*='social_info'] li a[href*='linkedin']" ).empty().append( '<span class="icon icon-linkedin"></span>' ).addClass('linkedin');
	$( "ul[class*='social_info'] li a[href*='#search']" ).empty().append( '<span class="icon icon-search"></span>' ).addClass('linkedin');
	$( "ul[class*='social_info'] li a[href*='github']" ).empty().append( '<span class="icon icon-github"></span>' ).addClass('github');
	$( "ul[class*='social_info'] li a[href*='codepen']" ).empty().append( '<span class="icon icon-codepen"></span>' ).addClass('codepen');
	$( "ul[class*='social_info'] li a[href*='snapchat']" ).empty().append( '<span class="icon icon-snapchat"></span>' ).addClass('snapchat');
	$( "ul[class*='social_info'] li a[href*='flickr']" ).empty().append( '<span class="icon icon-flickr"></span>' ).addClass('flickr');
	
	$( "ul[class*='contact'] li a[href*='tel:']" ).prepend( '<span class="icon icon-phone"></span>' );
	$( "ul[class*='contact'] li a[href*='mailto:']" ).prepend( '<span class="icon icon-mail"></span>' );
	
	/* patient form buttons */
	
	$( ".content.patient_forms a[href*='.pdf']" ).prepend( '<span class="icon icon-pdf"></span>' );
	$( ".content.patient_forms a:not([href*='.pdf'])" ).prepend( '<span class="icon icon-mouse"></span>' );
	
	/* search & mobile nav */
	
	$('a#searchopen').click( function() { 
	    $('#search').slideToggle();
	    $('body').addClass('disablepagescroll');
	});
	
	$('a#searchclose').click( function() { 
	    $('#search').slideToggle();
	    $('body').removeClass('disablepagescroll');
	});
	
	$('a#mobileopen').click( function() { 
	    $('#mobile_nav').slideToggle();
	    $('body').addClass('disablepagescroll');
	});
	
	$('a#mobileclose').click( function() { 
	    $('#mobile_nav').slideToggle();
	    $('body').removeClass('disablepagescroll');
	});
	
	/* jquery functionality */
	
	$( function() {
	    $( "#accordion" ).accordion({
	      	heightStyle: "content"
	    });
	} );
  
	$( "#tabs" ).tabs();
	
	/* slideshow */
	
	$('#slideshow_wrapper').slideShow(6000);
	
});


$.stellar.positionProperty.transfade = {
	setPosition: function(element, newLeft, originalLeft, newTop, originalTop) {
	    var distance = newTop - originalTop;
	    var rate = $(window).height() / 5.5;
		element.css('transform', 'translate3d(0, ' + distance + 'px, 0').css('opacity', 1 - (distance / rate));
	}
};

$.fn.slideShow = function(timeOut) {
	
	var $elem = this;
		
	this.children(':gt(0)').hide();
		
	setInterval(function() {
			
		$elem.children().eq(0).fadeOut().next().fadeIn().end().appendTo($elem);
	
	}, timeOut || 3000);
	
};