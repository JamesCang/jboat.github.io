(function(){

  // open and close nav view.
  $('.js-nav-open').on('click', function(e) {
    e.preventDefault();

    $('.js-nav').toggleClass('open');
    $('.js-nav-open').toggleClass('shift');
  });

})();
