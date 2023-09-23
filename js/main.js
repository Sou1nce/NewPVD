$(function () {
	$(window).scroll(function() {
	    $('.features1').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+1000) {
	            $(this).addClass("fadeInUp");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.iphone').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+1000) {
	            $(this).addClass("fadeInLeft");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.map').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+1000) {
	            $(this).addClass("fadeInRight");
	        }
	    });
	});

	
	$(window).scroll(function() {
	    $('.imageInterface').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+1000) {
	            $(this).addClass("fadeIn");
	        }
	    });
	});
})