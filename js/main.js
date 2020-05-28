(function ($) {
    'use strict';

$(window).load(function() {
    $('#preloader-wrapper').fadeOut('slow');
});

    $('.gallery-slider').owlCarousel(
        {
        pagination : true,
        navigation : true,
        navigationText: [
            "<i class='fa fa-chevron-left'></i>",
            "<i class='fa fa-chevron-right'></i>"
         ],
        autoPlay : 6000,
        singleItem: true
        }
    );
    // Gallery Popup
    // $('.image-popup').magnificPopup({type:'image'});

})(jQuery);

ScrollReveal({ duration: 1000 })
ScrollReveal().reveal('.section');

