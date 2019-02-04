$(document).ready(function () {
    $('.slider_container').slick({
        dots: true,
        infinite: true,
        arrows: true,
        speed: 1000,
        slidesToShow: 1
    })
});


$(document).ready(function () {
    $('.slider_product').slick({
        dots: true,
        infinite: false,
        arrows: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [{
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                    infinite: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    infinite: false,
                }
            }
        ]
    });
});

$(document).ready(function () {
    $('.slider_product_hits').slick({
        dots: true,
        infinite: false,
        arrows: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [{
            breakpoint: 1280,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
                infinite: false,
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                infinite: false,
            }
        }]
    })
 $('.slider_feedback').slick({
        dots: true,
        infinite: false,
        arrows: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [{
            breakpoint: 1280,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                infinite: false,
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                infinite: false,
            }
        }]
    })
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        dots: false,
        arrows: false,
        verticalSwiping: true,
        asNavFor: '.slider-for',
        focusOnSelect: true
    });
});