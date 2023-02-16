let $grid = $('.grid').imagesLoaded( function() {
  // init Isotope after all images have loaded
  $grid.isotope({
    // options...
    itemSelector: '.grid-item',
    columnWidth: '.grid-item',
    percentPosition: true
  });
});