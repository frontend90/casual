/*************         welcome-slick       ************/
$('.welcome-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 415,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});