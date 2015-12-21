(function(){

  $('.js-graph__item').on('click', function(e) {
    var layer = $('.js-layer');
    var imgSrc = $(e.target).attr('src');
    var graphDetailImg = $('.js-graph__detail');

    layer.show();
    graphDetailImg.attr('src', imgSrc);
  });

  $('.js-graph__detail').on('click', function(e) {
    var layer = $('.js-layer');
    var graphDetailImg = $('.js-graph__detail');

    layer.hide();
    graphDetailImg.attr('src', '');
  })

})();
