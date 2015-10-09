$(document).ready(function() {
  var $codeSnippets = $('.code-example-body'),
      $nav=$('#navbar'),
	  navOffsetTop = $('#navbar').offset().top
      $body = $('body'),
      $window = $(window)

  function init() {
    $window.on('scroll', onScroll)
    $window.on('resize', resize)
    $('a[href^="#"]').on('click', smoothScroll)
  }
  
   function onScroll() {
    if(navOffsetTop < $window.scrollTop() && !$body.hasClass('has-docked-nav')) {
      $body.addClass('has-docked-nav')
    }
    if(navOffsetTop > $window.scrollTop() && $body.hasClass('has-docked-nav')) {
      $body.removeClass('has-docked-nav')
    }
  }
  
  
 
  function smoothScroll(e) {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  }
  
  function resize() {
    $body.removeClass('has-docked-nav')
    navOffsetTop = $nav.offset().top
    onScroll()
  }
  
 
  
  init();

});