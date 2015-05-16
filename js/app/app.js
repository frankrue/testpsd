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

  // early start for the fonts
  TypeKitFonts.init(document);

  // on DOM ready
  $(function() {

    init();
    bind();

  });

  // initialization of vars, components, etc.
  function init() {

    FastClick.attach(document.body);

  }

  // all binds to extant DOM elements
  function bind() {

    $('header nav a').click(onNavClick);
    $('footer .country select').selectize();

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

});
