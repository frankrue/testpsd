require.config({
  baseUrl: 'js/app',
  paths: {
    jquery: '../lib/jquery/dist/jquery',
    fastclick: '../lib/fastclick/lib/fastclick',
    'jquery-touchswipe': '../lib/jquery-touchswipe/jquery.touchSwipe',
    requirejs: '../lib/requirejs/require',
    gsap: '../lib/gsap/src/uncompressed/TweenMax'
  }
});

require(['app']);
