$(document).ready(function () {
    //initialize tooltips
    $('.tt').tooltip();

    carrousel();

    $(".js-select-links").on('click', function () {
        $(this).toggleClass('active');
    });


    $('.nav-tabs-dropdown').each(function (i, elm) {
        $(elm).html($(elm).next('div').find('a.active').html());
    });

    $('.nav-tabs-dropdown').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('open').next('div').slideToggle();
    });

    $('#nav-tab a[data-toggle="tab"]').on('click', function (e) {
        e.preventDefault();
        $(e.target).closest('div').hide().prev('a').removeClass('open').html($(this).html());
    });


    //main navigation color background
    $('#navbar').on('hidden.bs.collapse', function () {
        $('.navbar').removeClass('nav-open');
    });
    $('#navbar').on('show.bs.collapse', function () {
        $('.navbar').addClass('nav-open');
    });

});

$(window).on('resize orientationchange', function () {
    if ($('.js-testimonials').length > 0) {
        $('.js-testimonials').slick('resize');
    }

    if ($(window).width() < 991) {
        $('.navbar').removeClass('nav-open');
    }
});

//slick carrousel
function carrousel() {
    if ($('.js-testimonials').length > 0) {
        $('.js-testimonials').slick({
            infinite: false,
            initialSlide: 1,
            speed: 300,
            slidesToScroll: 1,
            arrows: false,
            centerMode: true,
            slidesToShow: 1,
            mobileFirst: true,
            centerPadding: '0',
            responsive: [
                {
                    breakpoint: 480,
                    settings: {
                        centerPadding: '80px',
                    }
                },
                {
                    breakpoint: 991,
                    settings: "unslick"
                }
            ]
        });
    }
}
