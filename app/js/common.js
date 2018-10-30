$(function() {

    var swiper = new Swiper('.portfolio__slider', {
      slidesPerView: 3,
      spaceBetween: 30,
       navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
       breakpoints: {
        992: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        776: {
          slidesPerView: 1,
          spaceBetween: 30
        }
      }
    });

  //-------------------------стрелка в низ---------------------------------------
    $(".header__next").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - 0}, 'slow', 'swing');
    });

  //-------------------------скорость якоря---------------------------------------
    $(".nav__click").on("click","a", function (event) {
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

