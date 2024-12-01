$(function () {
  $(".fade").slick({
    prevArrow: ".slick-prev",
    nextArrow: ".slick-next",
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
  });
});

$(function () {
  $(".one-time").slick({
    prevArrow: ".slick-prev-2",
    nextArrow: ".slick-next-2",
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  });
});
