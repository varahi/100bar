// One test

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


// Two test
function buildCarousel(visibleSlides) {
    $('.slideshow').cycle({
        fx: 'carousel',
        speed: 600,
        slides: 'img',
        carouselVisible: visibleSlides,
        carouselFluid: true
    });
    $('.slideshow img').css('opacity','1');
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
    
    if ( width < 400 ) {visibleSlides = 1}
    else if(width < 700) {visibleSlides = 3}
    else {visibleSlides = 5};

    buildSlideshow();
    buildCarousel(visibleSlides);
}
function reinit_cycle() {
    var width = $(window).width();   
    var destroyCarousel = function() { // create a function
        $('.slideshow').cycle('destroy');
    }

    if (width < 400) {
        destroyCarousel(); // call the function
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
$(window).resize(function() {
    clearTimeout(reinitTimer);
    reinitTimer = setTimeout(reinit_cycle, 100);
});

$(document).ready(function(){
    initCycle();    
});
