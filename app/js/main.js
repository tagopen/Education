// Equal Height function
function setEqualHeight(columns)
{
  var tallestcolumn = 0;
  columns.each(
    function()
    {
      currentHeight = $(this).height();
      if(currentHeight > tallestcolumn)
      {
        tallestcolumn = currentHeight;
      }
    }
    );
  columns.height(tallestcolumn);
}

// Old browser notification
$(function() { 
  $.reject({
    reject: {
      msie: 9
    },
    imagePath: 'img/icons/jReject/',
    display: [ 'chrome','firefox','safari','opera' ],
    closeCookie: true,
    cookieSettings: {
      expires: 60*60*24*365
    },
    header: 'Ваш браузер устарел!',
    paragraph1: 'Вы пользуетесь устаревшим браузером, который не поддерживает современные веб-стандарты и представляет угрозу вашей безопасности.',
    paragraph2: 'Пожалуйста, установите современный браузер:',
    closeMessage: 'Закрывая это уведомление вы соглашаетесь с тем, что сайт в вашем браузере может отображаться некорректно.',
    closeLink: 'Закрыть это уведомление',
  });
});

$(document).ready(function() {
  $('.navbar-toggle').click(function() {
    $(this).toggleClass('navbar-toggle--open');
    $('.body').toggleClass('body--collapsed');
    $('.collapse').toggleClass('collapse--open');
  });
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
/*$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});*/

// Fixed navbar on Scroll
if(!$('.navbar-toggle').is(':visible')) {
  $('.navbar').affix({
    offset: {
      top: $('.header').innerHeight()
    }
  }); 
}

$(document).ready(function() {
  //add your other targets here
  $("#header-slider").swiperight(function() {
    $(this).carousel('prev');
  });
  //add your other targets here
  $("#header-slider").swipeleft(function() {
    $(this).carousel('next');
  });
});

// Highlight the top nav as scrolling occurs
/*$('body').scrollspy({
    target: '.navbar-fixed-top'
})*/

// Navbar class active
/*$(document).ready( function () {
  $(".nav li").click( function () {
    $(".nav li").removeClass("active");
    $(this).addClass("active");
  });
});*/

// Dropdowns on hover on desktop
/*var navbarToggle = '.navbar-toggle'; // name of navbar toggle, BS3 = '.navbar-toggle', BS4 = '.navbar-toggler'  
$('.dropdown, .dropup').each(function() {
  var dropdown = $(this),
    dropdownToggle = $('[data-toggle="dropdown"]', dropdown),
    dropdownHoverAll = dropdownToggle.data('dropdown-hover-all') || false;
  
  // Mouseover
  dropdown.hover(function(){
    var notMobileMenu = $(navbarToggle).size() > 0 && $(navbarToggle).css('display') === 'none' && $(document).width() >= 992 ;
    if ((dropdownHoverAll === true || (dropdownHoverAll === false && notMobileMenu))) { 
      dropdownToggle.trigger('click');
    }
  });
});*/


// Close dropdowns on "esc"
/*$('.dropdown-menu').bind('keydown',function(event) {
  // ESC = Keycode 27
  if (event.keyCode == 27) {
    $(this).parrent().find('.dropdown-toggle').dropdown('toggle');
  }
});*/

// Lecturer page close fixed price box
$(document).ready(function() {
  $('.l-price__close').click(function() {
    $('.l-price').addClass('l-price--closed');
  });
});

// Lecturer page bookmark
$(document).ready(function() {
  $('.bookmark').click(function(e) {
    e.preventDefault();
    $(this).find('.bookmark__icon').toggleClass('bookmark__icon--active');
  });
});

// Equial Height
$(window).on('resize', function(){
  // Only 768px +
  if( $( window ).width() >= 768 ) {
    // Section format
    setEqualHeight($('.format__image'));
    setEqualHeight($('.format__box'));
    var $elemHeight = $('.format__image').height();
      $('.format__image .ic').css('line-height',  $elemHeight + 'px'); 
    // Section service  
    setEqualHeight($('.service__box'));
    setEqualHeight($('.service__title'));
    setEqualHeight($('.service__icon'));
  }
}).trigger('resize');

$(window).on('resize', function(){
  // Only 960px +
  if( $( window ).width() >= 960 ) {
    setEqualHeight($('.lesson__box--large')); 
    setEqualHeight($('.lesson__box--small')); 
  }
}).trigger('resize');


// Masked phone
$(function($){
  $(".form__input--phone").mask("+7(999)999-99-99");
});

$('.format__slider').slick({
  dots: true,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  speed: 500,
  mobileFirst: true,
  swipeToSlide: '15',
  responsive: [
    {
      breakpoint: 767,
      settings: "unslick",
    }
  ]
});

$('.teacher__slider').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: true,
  mobileFirst: true,
  swipeToSlide: '15',
  prevArrow: '<button type="button" data-role="none" class="slick-prev fa fa-angle-left" aria-label="Previous" tabindex="0" role="button"></button>',
  nextArrow: '<button type="button" data-role="none" class="slick-next fa fa-angle-right" aria-label="Next" tabindex="0" role="button"></button>',
  responsive: [
    {
      breakpoint: 959,
      settings: {
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
      {
      breakpoint: 767,
      settings: {
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 0,
      settings: {
        dots: false,
        arrows: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.blog__slider').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: true,
  mobileFirst: true,
  swipeToSlide: '15',
  prevArrow: '<button type="button" data-role="none" class="slick-prev fa fa-angle-left" aria-label="Previous" tabindex="0" role="button"></button>',
  nextArrow: '<button type="button" data-role="none" class="slick-next fa fa-angle-right" aria-label="Next" tabindex="0" role="button"></button>',
  responsive: [
    {
      breakpoint: 959,
      settings: {
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
      {
      breakpoint: 767,
      settings: {
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 0,
      settings: {
        dots: false,
        arrows: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});