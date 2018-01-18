$(document).ready(function() {
  $('.slider').slider({
    interval: 3000,
    transition: 500,
  });

  setTimeout(function() {
    window.location.href = 'views/home.html';
  }, 10000);
});


