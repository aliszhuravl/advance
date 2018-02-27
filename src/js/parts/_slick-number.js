$('.fab_slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    var indexSlide = nextSlide + 1;
    $('.slide-number').text(indexSlide);
});