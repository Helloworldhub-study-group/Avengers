// Add your codes


// Testimonial starts

function CarouselInit() {
    
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true, // loop is true up to 1199px screen
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsiveClass: true, // Optional helper class. Add 'owl-reponsive-' + 'breakpoint' class to main element.
        responsive: {
            0: { // from this breakpoint 0 to 500
                items: 1,
                dots: true,
            },

            501: { // from this breakpoint 501 to 770
                items: 2, // 3,
                // margin: 18,
                dots: true,
            },

            771: { // from this breakpoint 771 to 1199
                items: 3, // 4,
                dots: true,
            },

        /*    1200: {
                items: 6,
                dots: true,
            } */
        }
    });
}

$(document).ready(CarouselInit);
$(window).resize(CarouselInit);

// Testimonial ends 


