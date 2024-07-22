$(function() {
// Main menu
	$('#main-menu').smartmenus({
		mainMenuSubOffsetX: -1,
		mainMenuSubOffsetY: 4,
		subMenusSubOffsetX: 6,
		subMenusSubOffsetY: -6
	});	

// To Top	
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		    } else {
		      $('#toTop').fadeOut();
		    }
	});

	$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});
	
//Table
	$("tr:first").addClass("table-th");
	$("tr:nth-child(2)").addClass("table-th-second");
	$( "tr:odd" ).addClass("tr-odd");
	$( "tr:even" ).addClass("tr-even");
	
}); 	


// Carousel
$.fn.cycle.defaults.autoSelector = '.slideshow'

function buildCarousel(visibleSlides) {
    $('.slideshow').cycle({
        fx: 'carousel',
        speed: 600,
        slides: 'img',
        carouselVisible: visibleSlides,
        carouselFluid: true
    });
}

function buildSlideshow() {
    $('#c62').cycle({
        fx: 'fade',
        slides: 'img',
        timeout: 12000
    });
}

function initCycle() {
    var width = $(document).width();
    var visibleSlides = 5;

    if (width < 400) {
        visibleSlides = 1
    } else if (width < 700) {
        visibleSlides = 3
    } else {
        visibleSlides = 5
    };

    buildSlideshow();
    buildCarousel(visibleSlides);
}

function reinit_cycle() {
    var width = $(window).width();
    var destroyCarousel = function() {
        $('.slideshow').cycle('destroy');
    }

    if (width < 400) {
        destroyCarousel();
        reinitCycle(1);
    } else if (width > 400 && width < 700) {
        destroyCarousel();
        reinitCycle(3);
    } else {
        destroyCarousel();
        reinitCycle(5);
    }
}

function reinitCycle(visibleSlides) {
    buildCarousel(visibleSlides);
}
var reinitTimer;
$(window).resize(function () {
    clearTimeout(reinitTimer);
    reinitTimer = setTimeout(reinit_cycle, 100);
});

$(document).ready(function () {
    initCycle();
});

