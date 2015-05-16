require([
  'jquery',
  'fastclick',
  'jquery-touchswipe',
  './TypeKitFonts',
  'gsap',
  'selectize'
],function(
  $,
  FastClick,
  _jqts,
  TypeKitFonts,
  _gsap,
  _selectize
) {

  'use strict';

  var $window;
  var $header;
  var fontInterval;

  // on DOM ready
  $(function() {

    init();
    bind();

  });

  // initialization of vars, components, etc.
  function init() {

    TypeKitFonts.init(document);

    FastClick.attach(document.body);
    $window = $(window);
    $header = $('header');
    $('body').swipe({
      allowPageScroll: 'vertical',
      threshold: 75,
      swipe: onSwipe
    });

    fontInterval = setInterval( checkFonts, 250 );

  }

  // all binds to extant DOM elements
  function bind() {

    $('header nav a').click(onNavClick);
    $('header nav li:first a').click();
    $('footer .country select').selectize();
    $('header button').click(onNavToggle);
    $(window).scroll(onScroll);
    $(window).resize(onResize);

  }

  function onNavClick(e) {

    e.preventDefault();
    var newLeft = $(this).position().left + parseInt( $(this).css('marginLeft') );

    // fly bar to active nav
    TweenMax.to('header nav .active-bar', 0.5, {
      width: $(this).width(),
      left: newLeft,
      ease: Back.easeOut
    });

  }

  function onNavToggle(e) {
    e.preventDefault();
    $('header nav').toggleClass('open');
    $(this).toggleClass('on');
  }

  function onScroll() {
    if ($window.scrollTop() > 20) {
      $header.addClass('affix');
    } else {
      $header.removeClass('affix');
    }
  }

  function onResize() {
    $('header nav li:first a').click();
  }

  function onSwipe( event, direction ) {

    switch(direction) {

      case 'left':
      $('header nav').addClass('open');
      $('header button').addClass('on');
      break;

      case 'right':
      $('header nav').removeClass('open');
      $('header button').removeClass('on');
      break;

      default:
      break;

    }

  }

  function checkFonts() {

    if ($('html').hasClass('wf-active')) {

      TweenMax.to('.load-shield', 0.5, { force3D: true, autoAlpha: 0 });
      TweenMax.from('.animated.slideInUp', 0.5, { force3D: true, y: 100, ease: Power4.easeOut });
      TweenMax.from('.animated.slideInDown', 0.5, { force3D: true, y: -100, ease: Power4.easeOut });
      TweenMax.from('.animated.bounceIn', 0.5, { force3D: true, scale: 0, ease: Back.easeOut });
      clearInterval(fontInterval);

    }

  }

});
