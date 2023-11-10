(function ($) {

    "use strict";

    //spinner

    var spinner = function (){

        setTimeout(function(){
            if($('#spinner').length > 0){
                $('#spinner').removeClass('show');
            }
        }, 1);

    };
    spinner();
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });

    // $('.skill').waypoint(function () {
    //     $('.progress .progress-bar').each(function () {
    //         $(this).css("width", $(this).attr("aria-valuenow") + '%');
    //     });
    // }, {offset: '80%'});

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });



    // Facts counter
    // $('[data-toggle="counter-up"]').counterUp({
    //     delay: 10,
    //     time: 2000
    // });

    //    Skills
    // $('.skill').waypoint(function () {
    //     $('.progress .progress-bar').each(function () {
    //         $(this).css("width", $(this).attr("aria-valuenow") + '%');
    //     });
    // });

    // $(".skill").each(function() {
    //     $(this).waypoint(function() {
    //     var progressBar = $(".progress-bar");
    //     progressBar.each(function(indx){
    //         $(this).css("width", $(this).attr("aria-valuenow") + "%");
    //     });
    // }, {
    //     triggerOnce: true,
    //     offset: 'bottom-in-view'
    //   });
    //  });



var owl = $('.project-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:25,
    dots: true,
    dotsData: true,
    nav: false,
    autoplay:true,
    autoplayTimeout:2000,
    smartSpeed: 1000,
    autoplayHoverPause:true,
    responsive: {
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            items:4
        }
    }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
});


        // Testimonials carousel
        $(".testimonial-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            margin: 25,
            loop: true,
            center: true,
            dots: false,
            nav: true,
            navText : [
                '<i class="fa-solid fa-chevron-left" style="margin: 0 12px; padding: 0 24px; width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; border: 1px solid #DEE2E6; border-radius: 100px; font-size: 18px; transition: .5s;"></i>',
                '<i class="fa-solid fa-chevron-right" style="margin: 0 12px; padding: 0 24px; width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; border: 1px solid #DEE2E6; border-radius: 100px; font-size: 18px; transition: .5s;"></i>'
            ],
            responsive: {
                0:{
                    items:1
                },
                768:{
                    items:2
                },
                992:{
                    items:3
                }
            }
        });

     

})(jQuery);

