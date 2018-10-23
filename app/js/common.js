$(function() {

    var swiper = new Swiper('.portfolio__slider', {
      slidesPerView: 3,
      spaceBetween: 30,
       navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

  //-------------------------скорость якоря---------------------------------------
    $(".header__next").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - 0}, 'slow', 'swing');
    });

});

//----------------------------------------preloader----------------------------------

  $(window).on('load', function(){
    $('.preloader').delay(1000).fadeOut('slow');
  });

