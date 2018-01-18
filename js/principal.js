$(document).ready(function() {
  // Menú Hamburguesa
  $('.button-collapse').sideNav();    
  // Slider
  $('.slider').slider({interval: 4500});
  // Carousel-Slider
  $('.modal').modal();
  // Rateyo
  $(function() {
    $('#rateYo').rateYo({
      starWidth: '30px',
      normalFill: '#A0A0A0',
      rating: 5,
      halfStar: true,
      spacing: '10px'
    });
  });
});