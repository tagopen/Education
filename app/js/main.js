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

  // Lecturer page close fixed price box
  $('.l-price__close').click(function() {
    $('.l-price').addClass('l-price--closed');
  });

  // Lecturer page bookmark
  $('.bookmark').click(function(e) {
    e.preventDefault();
    $(this).find('.bookmark__icon').toggleClass('bookmark__icon--active');
  });
  //share box
  $('.share__link--share').click(function(e) {
    e.preventDefault();
    $($(this).data('target')).toggleClass('share__box--active');
  });
  $('.share__btn-close').click(function(e) {
    e.preventDefault();
    $(this).parent('.share__box').toggleClass('share__box--active');
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

    // Cost page cost-table 
    setEqualHeight($('.cost-table__cell--1'));
    setEqualHeight($('.cost-table__cell--2'));
    setEqualHeight($('.cost-table__cell--3'));

    // Program page  program-intro
    setEqualHeight($('.program-intro--col'));
  }
  // Only 960px +
  if( $( window ).width() >= 960 ) {
    setEqualHeight($('.lesson__item--large')); 
    setEqualHeight($('.lesson__item--small')); 
  }

  // Only 761-959
  if( $( window ).width() >= 760 && ($( window ).width() < 960) ) {
    setEqualHeight($('.t-service--height')); 
    setEqualHeight($('.project--height')); 
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

$('.work__slider').slick({
  slidesToShow: 5,
  slidesToScroll: 5,
  arrows: false,
  dots: true,
  mobileFirst: true,
  swipeToSlide: '15',
  responsive: [
    {
      breakpoint: 959,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 5,
        slidesToScroll: 5
      }
    },
      {
      breakpoint: 767,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 0,
      settings: {
        dots: true,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.comment__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  mobileFirst: true,
  swipeToSlide: '15',
  responsive: [
    {
      breakpoint: 0,
      settings: {
        dots: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// Калькулятор расчета стоимости

$(document).ready(function() {
  $('.distance__select .cs-options ul li:first-child').addClass('cs-selected');
}); // Делаем первый селект выбранным 
  
$('.calculator__radio').bind('change', calculate);
$('.distance__select .cs-options li').bind('click', calculate); // Навешиваем вывод цены при клике на радиокнопку/выбор другого элемента во втором селекте


/*
Функция подсчета стоимости
Логика функции:
Берем дата атрибут(там прописана цифра-коэффициент) выбранных радиокнопок 1ой и 2ой радиогруппы, а так же берем value со стоимостью в селекте с удаленностью от метро.
Потом эти коэффициенты перемножаются и выводятся в инпут.

Если необходимо изменить цены, то необходимо произвести следующее:
Для первой радиогруппы найти блок с классом "calculator__amount" и найти дата атрибут у input со следующим названием data-amount="" и вписать в скобочки число(только цифры), сейчас там установлено 1000 и 2000 
Для второйрадиогруппы найти блок с классом "calculator__duration" и проделать аналогичные действия.
Для изменения коэффициентов у селекта необходимо найти блок "distance__select" и прописать/изменить значения для атрибута value, на данный момент установлены коэффициенты 1,2,3

ВАЖНО!
Если логика калькулятора будет меняться с умножения на плюсование необходимо переменной gr присвоить 0 (var gar = 0;) до всех действий.
 */

function calculate() {
  var amountValue = $('.calculator__amount .radio-btn__control:checked').data('amount'),
      durationValue = $('.calculator__duration .radio-btn__control:checked').data('duration'),
      distanceValue = $('.distance__select .cs-options ul li.cs-selected').data('value');

  gr = amountValue * durationValue * distanceValue ;
  $('.calculator__input').val('Итого: '+ gr + ' руб.');
};
