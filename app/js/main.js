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

$(document).ready(function() {
  $('.metro__select')
    .find('.cs-options ul')
    .prepend('<li><input class="filter" type="text" /></li>');
});

$('.info').on('change', '[type=radio], select', function() {
  var $info          = $('.info'),
      $amount        = $info.find('.calculator__amount:checked'),
      $duration      = $info.find('.calculator__duration:checked'),
      $metro         = $info.find('.distance__select'),
      $distance      = $info.find('.metro__select');
  if (
    
    $amount != 'undefined' &&
    $duration != 'undefined' &&
    $metro.prop('selected') &&
    $distance.prop('selected') 
  ) {
    $('.calculator__btn').removeClass('calculator__btn--disabled');
  } else {
    $('.calculator__btn').addClass('calculator__btn--disabled');
  }
});

$('.calculator__btn').on('click', function(e) {
  e.preventDefault();
  var $info          = $('.info'),
      $amount        = $info.find('[data-amount]:checked'),
      $duration      = $info.find('[data-duration]:checked'),
      amount         = Number($amount.data('amount')),
      duration       = Number($duration.data('duration')),
      $selects       = $info.find('.distance__select, .metro__select'),
      $select        = $selects.find('.cs-options ul li.cs-selected'),
      $total         = $info.find('.calculator__result--total'),
      $sale          = $info.find('.calculator__result--sale'),
      $discount      = $info.find('.calculator__result--discount'),
      email          = $info.find('.form__input--email'),
      total          = 0,
      discount       = 0,
      totalRound     = 0,
      BreakException = {};

  $('.calculator__result').removeClass('calculator__result--hidden');

  if (!isNaN(duration)) {
    discount = duration;
  }

  if (discount != 0) {
    $sale.removeClass('calculator__result--hidden');
  } else {
    $sale.addClass('calculator__result--hidden');
  }

  try {
    $select.each(function(el) {
      selectValue = Number($(this).data('value'));
      if ((selectValue == 200) && (!isNaN(selectValue))) {
        total += selectValue;
        throw BreakException;
      }
    });
  } catch (e) {
    if (e !== BreakException) throw e;
  }
  
  if (!isNaN(duration) && !isNaN(amount)) {
    total += amount - amount * duration / 100;
  }

  total = total.toFixed(0); // Округляем до целого числа
  totalRound = total%10;

  if (totalRound <= 7) {
    if (totalRound >= 3) {
      total = total - totalRound + 5;
    } else {
      total = total - totalRound;
    }
  } else {
    total = total - totalRound + 10;
  }

  $total.text(total);
  $discount.text(discount);
});

// search filter
$(document).ready(function(){
  $(".filter").keyup(function(){

    // Retrieve the input field text and reset the count to zero
    var $filter            = $(this),
        filter             = $filter.val(),
        $selectList        = $filter.parents('ul'),
        $selectListItem    = $filter.parent().siblings("li"),
        countVisibleList   = 0;

    // Loop through the list
    $selectListItem.each(function(){
      // If the list item does not contain the text phrase fade it out
      if ($(this).text().search(new RegExp(filter, "i")) < 0) {
          $(this).fadeOut();
          countVisibleList ++;
          if ($selectListItem.length == countVisibleList) {
            $selectList.append("<li class='list-notify'><span>Ничего не найденно</span></li>");
          } else {
            $selectList.find('.list-notify').detach();
          }
          
      // Show the list item if the phrase matches and increase the count by 1
      } else {
          $(this).show();
      }
    });
  });
});