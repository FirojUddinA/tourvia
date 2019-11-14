

$(document).ready(function () {
    new WOW().init();
    const header = document.querySelector('#header_area');

    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;
        if (scrollPos > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });


    // sub-menu

    $('.sub_menu_link').click(function () {
       $('.sub_menu_child').toggle();
    });

    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
        mousewheel: true,
        autoplay:true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

    $(document).ready(function(){
        $(".agency-award-content").owlCarousel({
            loop:true,
            margin:20,
            nav:false,
            autoplay:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:4
                }
            }
        });
    });



});