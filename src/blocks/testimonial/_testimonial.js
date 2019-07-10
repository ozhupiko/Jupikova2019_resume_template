$(document).ready(function(){
    $('.testimonial__slide').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false
    });
  });
  $('.fa-chevron-left').click(function(){
    $('.testimonial__slide').slick('slickNext');
  })
  
  $('.fa-chevron-right').click(function(){
    $('.testimonial__slide').slick('slickPrev');
  })