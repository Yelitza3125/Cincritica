$(document).ready(function() {
  // Menú Hamburguesa
  $('.button-collapse').sideNav();    
  // Slider
  $('.slider').slider({interval: 4500});
  // Carousel-Slider
  $('.modal').modal();
  // Obteniendo el género(s) escogido por el usuario
  var $genreMovieTitle = $('#title');
  var $genreObjectKey = JSON.parse(localStorage.getItem('genre')); 
  // var $dataBase = $.getJSON('http://www.omdbapi.com/?apikey=3a181f1c&i=tt0083866');
  // console.log($database);
  for (var $i = 0; $i < $genreObjectKey['genre'].length; $i++) {
    if ($genreObjectKey['genre'][$i] === 'Comedy') {
      $genreMovieTitle.text('Comedia');
    }
    if ($genreObjectKey['genre'][$i] === 'Romance') {
      $genreMovieTitle.text('Romance');
    }
    if ($genreObjectKey['genre'][$i] === 'Action') {
      $genreMovieTitle.text('Acción');
    }
    if ($genreObjectKey['genre'][$i] === 'Sci-Fi') {
      $genreMovieTitle.text('Ciencia Ficción');
    }
  }
  // Calificación de Estrellas del Primer Modal
  $(function() {
    $('#rateYo-0-1').rateYo({
      starWidth: '20px',
      normalFill: '#A0A0A0',
      rating: 5,
      halfStar: true,
      spacing: '10px'
    });
    $('#rateYo-0-2').rateYo({
      starWidth: '20px',
      normalFill: '#A0A0A0',
      rating: 4,
      halfStar: true,
      spacing: '10px'
    });
    $('#rateYo-0-3').rateYo({
      starWidth: '20px',
      normalFill: '#A0A0A0',
      rating: 5,
      halfStar: true,
      spacing: '10px'
    });
    $('#rateYo-0-4').rateYo({
      starWidth: '20px',
      normalFill: '#A0A0A0',
      rating: 3.5,
      halfStar: true,
      spacing: '10px'
    });
    $('#rateYo-0-5').rateYo({
      starWidth: '20px',
      normalFill: '#A0A0A0',
      rating: 5,
      halfStar: true,
      spacing: '10px'
    });
  });
  // Calificación de Estrellas del Segundo Modal
  $(function() {
    $('#rateYo-1-1').rateYo({
      starWidth: '20px',
      normalFill: '#A0A0A0',
      rating: 3.5,
      halfStar: true,
      spacing: '10px'
    });
    $('#rateYo-1-2').rateYo({
      starWidth: '20px',
      normalFill: '#A0A0A0',
      rating: 4,
      halfStar: true,
      spacing: '10px'
    });
    $('#rateYo-1-3').rateYo({
      starWidth: '20px',
      normalFill: '#A0A0A0',
      rating: 3.5,
      halfStar: true,
      spacing: '10px'
    });
    $('#rateYo-1-4').rateYo({
      starWidth: '20px',
      normalFill: '#A0A0A0',
      rating: 4.5,
      halfStar: true,
      spacing: '10px'
    });
    $('#rateYo-1-5').rateYo({
      starWidth: '20px',
      normalFill: '#A0A0A0',
      rating: 3,
      halfStar: true,
      spacing: '10px'
    });
  });
  // Calificación de Estrellas del Tercer Modal
  $(function() {
    $('#rateYo-2-1').rateYo({
      starWidth: '20px',
      normalFill: '#A0A0A0',
      rating: 4,
      halfStar: true,
      spacing: '10px'
    });
    $('#rateYo-2-2').rateYo({
      starWidth: '20px',
      normalFill: '#A0A0A0',
      rating: 5,
      halfStar: true,
      spacing: '10px'
    });
    $('#rateYo-2-3').rateYo({
      starWidth: '20px',
      normalFill: '#A0A0A0',
      rating: 4,
      halfStar: true,
      spacing: '10px'
    });
    $('#rateYo-2-4').rateYo({
      starWidth: '20px',
      normalFill: '#A0A0A0',
      rating: 4.5,
      halfStar: true,
      spacing: '10px'
    });
    $('#rateYo-2-5').rateYo({
      starWidth: '20px',
      normalFill: '#A0A0A0',
      rating: 4,
      halfStar: true,
      spacing: '10px'
    });
  });
  // Calificación de Estrellas del Cuarto Modal
  // Calificación de Estrellas del Primer Modal
  $(function() {
    $('#rateYo-3-1').rateYo({
      starWidth: '20px',
      normalFill: '#A0A0A0',
      rating: 4.5,
      halfStar: true,
      spacing: '10px'
    });
    $('#rateYo-3-2').rateYo({
      starWidth: '20px',
      normalFill: '#A0A0A0',
      rating: 3.5,
      halfStar: true,
      spacing: '10px'
    });
    $('#rateYo-3-3').rateYo({
      starWidth: '20px',
      normalFill: '#A0A0A0',
      rating: 5,
      halfStar: true,
      spacing: '10px'
    });
    $('#rateYo-3-4').rateYo({
      starWidth: '20px',
      normalFill: '#A0A0A0',
      rating: 3.5,
      halfStar: true,
      spacing: '10px'
    });
    $('#rateYo-3-5').rateYo({
      starWidth: '20px',
      normalFill: '#A0A0A0',
      rating: 4,
      halfStar: true,
      spacing: '10px'
    });
  });
  var $randomScifiMoviesArray = ['E.T. the Extra-Terrestrial', 'Blade Runner', 'Alien', 'The Matrix'] ;
  var $randomNumber1 = Math.floor(Math.random() * $randomScifiMoviesArray.length - 1) + 1;
  var $randomMovie = $randomScifiMoviesArray[$randomNumber1];
  console.log($randomMovie);
  var $movieImage;
  function apiCall() {
    $.getJSON('http://www.omdbapi.com/?apikey=3a181f1c&t=' + encodeURI($randomMovie)).then(function(response) {
      $movieImage = response.Poster;
      $('#movie-1').attr('src', $movieImage);
      console.log($('#movie-1').attr('src'));
      console.log(response.Poster);
    });
  }
  apiCall();
  /* $moviePoster = $movieInfo['Poster']; */
  /* console.log($moviePoster); */
});