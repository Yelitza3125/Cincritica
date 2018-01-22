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
  // Variables
  var $randomNumber1;
  var $randomNumber2;
  var $randomNumber3;
  var $randomNumber4;
  var $randomMovie;
  var $randomMovie2;
  var $randomMovie3;
  var $randomMovie4;
  var $movieImage;
  var $movieName;
  var $movieYear;
  var $moviePlot;
  // Recorriendo el array de géneros
  for (var $i = 0; $i < $genreObjectKey['genre'].length; $i++) {
    if ($genreObjectKey['genre'][$i] === 'Comedy') {
      $genreMovieTitle.text('Comedia');
      // Accediendo al Array de Películas de Comedia
      var $randomComedyMoviesArray = ['Mamma Mia!', 'Letters to Juliet', 'Zoolander', 'Night at the Museum'];
      // Para el primer card/tarjeta
      $randomNumber1 = Math.floor(Math.random() * $randomComedyMoviesArray.length - 1) + 1;
      $randomMovie = $randomComedyMoviesArray[$randomNumber1];
      console.log($randomMovie);
      // Accediendo al Open Movie DataBase
      function apiCall() {
        $.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&t=' + encodeURI($randomMovie)).then(function(response) {
          $movieImage = response.Poster;
          $movieName = response.Title;
          $movieYear = response.Year;
          $moviePlot = response.Plot;
          console.log(response);
          //  Cambiando el URL por defecto de image por el de la película a mostrar
          $('#movie-1').attr('src', $movieImage);
          // Agregando el nombre de la película y el año en el card/tarjeta
          $('#name-card-1').text($movieName);
          $('#year-card-1').text($movieYear);
          // Agregando la imagen de la película al modal
          $('#poster-movie-modal').css('background-image', 'url(' + $movieImage + ')');
          // Agregando el nombre de la película y el año en el modal
          $('#name-modal-1').text($movieName);
          $('#year-modal-1').text($movieYear);
          // Agregando el sinopsis de la película
          $('#sinopsis-modal').text($moviePlot);
          console.log($('#movie-1').attr('src'));
          console.log(response.Poster);
        });
      }
      apiCall();
   
      // Para el segundo card/tarjeta
      $randomNumber2 = Math.floor(Math.random() * $randomComedyMoviesArray.length - 1) + 1;
      $randomMovie2 = $randomComedyMoviesArray[$randomNumber2];
      console.log($randomMovie2);
   
      // Accediendo al Open Movie DataBase
      function apiCall2() {
        $.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&t=' + encodeURI($randomMovie2)).then(function(response) {
          $movieImage = response.Poster;
          $movieName = response.Title;
          $movieYear = response.Year;
          $moviePlot = response.Plot;
          console.log(response);
          //  Cambiando el URL por defecto de image por el de la película a mostrar
          $('#movie-2').attr('src', $movieImage);
          // Agregando el nombre de la película y el año en el card/tarjeta
          $('#name-card-2').text($movieName);
          $('#year-card-2').text($movieYear);
          // Agregando la imagen de la película al modal
          $('#poster-movie-modal-2').css('background-image', 'url(' + $movieImage + ')');
          // Agregando el nombre de la película y el año en el modal
          $('#name-modal-2').text($movieName);
          $('#year-modal-2').text($movieYear);
          // Agregando el sinopsis de la película
          $('#sinopsis-modal-2').text($moviePlot);
          console.log($('#movie-2').attr('src'));
          console.log(response.Poster);
        });
      }
      apiCall2();
   
      // Para el tercer card/tarjeta
      $randomNumber3 = Math.floor(Math.random() * $randomComedyMoviesArray.length - 1) + 1;
      $randomMovie3 = $randomComedyMoviesArray[$randomNumber3];
      console.log($randomMovie3);
   
      // Accediendo al Open Movie DataBase
      function apiCall3() {
        $.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&t=' + encodeURI($randomMovie3)).then(function(response) {
          $movieImage = response.Poster;
          $movieName = response.Title;
          $movieYear = response.Year;
          $moviePlot = response.Plot;
          console.log(response);
          //  Cambiando el URL por defecto de image por el de la película a mostrar
          $('#movie-3').attr('src', $movieImage);
          // Agregando el nombre de la película y el año en el card/tarjeta
          $('#name-card-3').text($movieName);
          $('#year-card-3').text($movieYear);
          // Agregando la imagen de la película al modal
          $('#poster-movie-modal-3').css('background-image', 'url(' + $movieImage + ')');
          // Agregando el nombre de la película y el año en el modal
          $('#name-modal-3').text($movieName);
          $('#year-modal-3').text($movieYear);
          // Agregando el sinopsis de la película
          $('#sinopsis-modal-3').text($moviePlot);
          console.log($('#movie-3').attr('src'));
          console.log(response.Poster);
        });
      }
      apiCall3();
   
      // Para el cuarto card/tarjeta
      $randomNumber4 = Math.floor(Math.random() * $randomComedyMoviesArray.length - 1) + 1;
      $randomMovie4 = $randomComedyMoviesArray[$randomNumber4];
      console.log($randomMovie4);
   
      // Accediendo al Open Movie DataBase
      function apiCall4() {
        $.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&t=' + encodeURI($randomMovie4)).then(function(response) {
          $movieImage = response.Poster;
          $movieName = response.Title;
          $movieYear = response.Year;
          $moviePlot = response.Plot;
          console.log(response);
          //  Cambiando el URL por defecto de image por el de la película a mostrar
          $('#movie-4').attr('src', $movieImage);
          // Agregando el nombre de la película y el año en el card/tarjeta
          $('#name-card-4').text($movieName);
          $('#year-card-4').text($movieYear);
          // Agregando la imagen de la película al modal
          $('#poster-movie-modal-4').css('background-image', 'url(' + $movieImage + ')');
          // Agregando el nombre de la película y el año en el modal
          $('#name-modal-4').text($movieName);
          $('#year-modal-4').text($movieYear);
          // Agregando el sinopsis de la película
          $('#sinopsis-modal-4').text($moviePlot);
          console.log($('#movie-4').attr('src'));
          console.log(response.Poster);
        });
      }
      apiCall4();
    }


    if ($genreObjectKey['genre'][$i] === 'Romance') {
      $genreMovieTitle.text('Romance');
      // Accediendo al Array de Películas de Romance
      var $randomRomanceMoviesArray = ['Me Before You', 'The Notebook', 'Titanic', 'Ghost'];
      // Para el primer card/tarjeta
      $randomNumber1 = Math.floor(Math.random() * $randomRomanceMoviesArray.length - 1) + 1;
      $randomMovie = $randomRomanceMoviesArray[$randomNumber1];
      console.log($randomMovie);
      // Accediendo al Open Movie DataBase
      function apiCall() {
        $.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&t=' + encodeURI($randomMovie)).then(function(response) {
          $movieImage = response.Poster;
          $movieName = response.Title;
          $movieYear = response.Year;
          $moviePlot = response.Plot;
          console.log(response);
          //  Cambiando el URL por defecto de image por el de la película a mostrar
          $('#movie-1').attr('src', $movieImage);
          // Agregando el nombre de la película y el año en el card/tarjeta
          $('#name-card-1').text($movieName);
          $('#year-card-1').text($movieYear);
          // Agregando la imagen de la película al modal
          $('#poster-movie-modal').css('background-image', 'url(' + $movieImage + ')');
          // Agregando el nombre de la película y el año en el modal
          $('#name-modal-1').text($movieName);
          $('#year-modal-1').text($movieYear);
          // Agregando el sinopsis de la película
          $('#sinopsis-modal').text($moviePlot);
          console.log($('#movie-1').attr('src'));
          console.log(response.Poster);
        });
      }
      apiCall();
   
      // Para el segundo card/tarjeta
      $randomNumber2 = Math.floor(Math.random() * $randomRomanceMoviesArray.length - 1) + 1;
      $randomMovie2 = $randomRomanceMoviesArray[$randomNumber2];
      console.log($randomMovie2);
   
      // Accediendo al Open Movie DataBase
      function apiCall2() {
        $.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&t=' + encodeURI($randomMovie2)).then(function(response) {
          $movieImage = response.Poster;
          $movieName = response.Title;
          $movieYear = response.Year;
          $moviePlot = response.Plot;
          console.log(response);
          //  Cambiando el URL por defecto de image por el de la película a mostrar
          $('#movie-2').attr('src', $movieImage);
          // Agregando el nombre de la película y el año en el card/tarjeta
          $('#name-card-2').text($movieName);
          $('#year-card-2').text($movieYear);
          // Agregando la imagen de la película al modal
          $('#poster-movie-modal-2').css('background-image', 'url(' + $movieImage + ')');
          // Agregando el nombre de la película y el año en el modal
          $('#name-modal-2').text($movieName);
          $('#year-modal-2').text($movieYear);
          // Agregando el sinopsis de la película
          $('#sinopsis-modal-2').text($moviePlot);
          console.log($('#movie-2').attr('src'));
          console.log(response.Poster);
        });
      }
      apiCall2();
   
      // Para el tercer card/tarjeta
      $randomNumber3 = Math.floor(Math.random() * $randomRomanceMoviesArray.length - 1) + 1;
      $randomMovie3 = $randomRomanceMoviesArray[$randomNumber3];
      console.log($randomMovie3);
   
      // Accediendo al Open Movie DataBase
      function apiCall3() {
        $.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&t=' + encodeURI($randomMovie3)).then(function(response) {
          $movieImage = response.Poster;
          $movieName = response.Title;
          $movieYear = response.Year;
          $moviePlot = response.Plot;
          console.log(response);
          //  Cambiando el URL por defecto de image por el de la película a mostrar
          $('#movie-3').attr('src', $movieImage);
          // Agregando el nombre de la película y el año en el card/tarjeta
          $('#name-card-3').text($movieName);
          $('#year-card-3').text($movieYear);
          // Agregando la imagen de la película al modal
          $('#poster-movie-modal-3').css('background-image', 'url(' + $movieImage + ')');
          // Agregando el nombre de la película y el año en el modal
          $('#name-modal-3').text($movieName);
          $('#year-modal-3').text($movieYear);
          // Agregando el sinopsis de la película
          $('#sinopsis-modal-3').text($moviePlot);
          console.log($('#movie-3').attr('src'));
          console.log(response.Poster);
        });
      }
      apiCall3();
   
      // Para el cuarto card/tarjeta
      $randomNumber4 = Math.floor(Math.random() * $randomRomanceMoviesArray.length - 1) + 1;
      $randomMovie4 = $randomRomanceMoviesArray[$randomNumber4];
      console.log($randomMovie4);
   
      // Accediendo al Open Movie DataBase
      function apiCall4() {
        $.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&t=' + encodeURI($randomMovie4)).then(function(response) {
          $movieImage = response.Poster;
          $movieName = response.Title;
          $movieYear = response.Year;
          $moviePlot = response.Plot;
          console.log(response);
          //  Cambiando el URL por defecto de image por el de la película a mostrar
          $('#movie-4').attr('src', $movieImage);
          // Agregando el nombre de la película y el año en el card/tarjeta
          $('#name-card-4').text($movieName);
          $('#year-card-4').text($movieYear);
          // Agregando la imagen de la película al modal
          $('#poster-movie-modal-4').css('background-image', 'url(' + $movieImage + ')');
          // Agregando el nombre de la película y el año en el modal
          $('#name-modal-4').text($movieName);
          $('#year-modal-4').text($movieYear);
          // Agregando el sinopsis de la película
          $('#sinopsis-modal-4').text($moviePlot);
          console.log($('#movie-4').attr('src'));
          console.log(response.Poster);
        });
      }
      apiCall4();
    }


    if ($genreObjectKey['genre'][$i] === 'Action') {
      $genreMovieTitle.text('Acción');
      // Accediendo al Array de Películas de Acción
      var $randomActionMoviesArray = ['Die Hard', 'The Avengers', 'Transformers', 'Gundam Wing: The Movie - Endless Waltz'];
      // Para el primer card/tarjeta
      $randomNumber1 = Math.floor(Math.random() * $randomActionMoviesArray.length - 1) + 1;
      $randomMovie = $randomActionMoviesArray[$randomNumber1];
      console.log($randomMovie);
      // Accediendo al Open Movie DataBase
      function apiCall9() {
        $.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&t=' + encodeURI($randomMovie)).then(function(response) {
          $movieImage = response.Poster;
          $movieName = response.Title;
          $movieYear = response.Year;
          $moviePlot = response.Plot;
          console.log(response);
          //  Cambiando el URL por defecto de image por el de la película a mostrar
          $('#movie-1').attr('src', $movieImage);
          // Agregando el nombre de la película y el año en el card/tarjeta
          $('#name-card-1').text($movieName);
          $('#year-card-1').text($movieYear);
          // Agregando la imagen de la película al modal
          $('#poster-movie-modal').css('background-image', 'url(' + $movieImage + ')');
          // Agregando el nombre de la película y el año en el modal
          $('#name-modal-1').text($movieName);
          $('#year-modal-1').text($movieYear);
          // Agregando el sinopsis de la película
          $('#sinopsis-modal').text($moviePlot);
          console.log($('#movie-1').attr('src'));
          console.log(response.Poster);
        });
      }
      apiCall9();
   
      // Para el segundo card/tarjeta
      $randomNumber2 = Math.floor(Math.random() * $randomActionMoviesArray.length - 1) + 1;
      $randomMovie2 = $randomActionMoviesArray[$randomNumber2];
      console.log($randomMovie2);
   
      // Accediendo al Open Movie DataBase
      function apiCall10() {
        $.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&t=' + encodeURI($randomMovie2)).then(function(response) {
          $movieImage = response.Poster;
          $movieName = response.Title;
          $movieYear = response.Year;
          $moviePlot = response.Plot;
          console.log(response);
          //  Cambiando el URL por defecto de image por el de la película a mostrar
          $('#movie-2').attr('src', $movieImage);
          // Agregando el nombre de la película y el año en el card/tarjeta
          $('#name-card-2').text($movieName);
          $('#year-card-2').text($movieYear);
          // Agregando la imagen de la película al modal
          $('#poster-movie-modal-2').css('background-image', 'url(' + $movieImage + ')');
          // Agregando el nombre de la película y el año en el modal
          $('#name-modal-2').text($movieName);
          $('#year-modal-2').text($movieYear);
          // Agregando el sinopsis de la película
          $('#sinopsis-modal-2').text($moviePlot);
          console.log($('#movie-2').attr('src'));
          console.log(response.Poster);
        });
      }
      apiCall10();
   
      // Para el tercer card/tarjeta
      $randomNumber3 = Math.floor(Math.random() * $randomActionMoviesArray.length - 1) + 1;
      $randomMovie3 = $randomActionMoviesArray[$randomNumber3];
      console.log($randomMovie3);
   
      // Accediendo al Open Movie DataBase
      function apiCall11() {
        $.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&t=' + encodeURI($randomMovie3)).then(function(response) {
          $movieImage = response.Poster;
          $movieName = response.Title;
          $movieYear = response.Year;
          $moviePlot = response.Plot;
          console.log(response);
          //  Cambiando el URL por defecto de image por el de la película a mostrar
          $('#movie-3').attr('src', $movieImage);
          // Agregando el nombre de la película y el año en el card/tarjeta
          $('#name-card-3').text($movieName);
          $('#year-card-3').text($movieYear);
          // Agregando la imagen de la película al modal
          $('#poster-movie-modal-3').css('background-image', 'url(' + $movieImage + ')');
          // Agregando el nombre de la película y el año en el modal
          $('#name-modal-3').text($movieName);
          $('#year-modal-3').text($movieYear);
          // Agregando el sinopsis de la película
          $('#sinopsis-modal-3').text($moviePlot);
          console.log($('#movie-3').attr('src'));
          console.log(response.Poster);
        });
      }
      apiCall11();
   
      // Para el cuarto card/tarjeta
      $randomNumber4 = Math.floor(Math.random() * $randomActionMoviesArray.length - 1) + 1;
      $randomMovie4 = $randomActionMoviesArray[$randomNumber4];
      console.log($randomMovie4);
   
      // Accediendo al Open Movie DataBase
      function apiCall12() {
        $.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&t=' + encodeURI($randomMovie4)).then(function(response) {
          $movieImage = response.Poster;
          $movieName = response.Title;
          $movieYear = response.Year;
          $moviePlot = response.Plot;
          console.log(response);
          //  Cambiando el URL por defecto de image por el de la película a mostrar
          $('#movie-4').attr('src', $movieImage);
          // Agregando el nombre de la película y el año en el card/tarjeta
          $('#name-card-4').text($movieName);
          $('#year-card-4').text($movieYear);
          // Agregando la imagen de la película al modal
          $('#poster-movie-modal-4').css('background-image', 'url(' + $movieImage + ')');
          // Agregando el nombre de la película y el año en el modal
          $('#name-modal-4').text($movieName);
          $('#year-modal-4').text($movieYear);
          // Agregando el sinopsis de la película
          $('#sinopsis-modal-4').text($moviePlot);
          console.log($('#movie-4').attr('src'));
          console.log(response.Poster);
        });
      }
      apiCall12();
    }


    if ($genreObjectKey['genre'][$i] === 'Sci-Fi') {
      $genreMovieTitle.text('Ciencia Ficción');
      // Accediendo al Array de Películas de Ciencia Ficción
      var $randomScifiMoviesArray = ['E.T. the Extra-Terrestrial', 'Blade Runner', 'Alien', 'The Matrix'] ;
      // Para el primer card/tarjeta
      $randomNumber1 = Math.floor(Math.random() * $randomScifiMoviesArray.length - 1) + 1;
      $randomMovie = $randomScifiMoviesArray[$randomNumber1];
      console.log($randomMovie);
      // Accediendo al Open Movie DataBase
      function apiCall() {
        $.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&t=' + encodeURI($randomMovie)).then(function(response) {
          $movieImage = response.Poster;
          $movieName = response.Title;
          $movieYear = response.Year;
          $moviePlot = response.Plot;
          console.log(response);
          //  Cambiando el URL por defecto de image por el de la película a mostrar
          $('#movie-1').attr('src', $movieImage);
          // Agregando el nombre de la película y el año en el card/tarjeta
          $('#name-card-1').text($movieName);
          $('#year-card-1').text($movieYear);
          // Agregando la imagen de la película al modal
          $('#poster-movie-modal').css('background-image', 'url(' + $movieImage + ')');
          // Agregando el nombre de la película y el año en el modal
          $('#name-modal-1').text($movieName);
          $('#year-modal-1').text($movieYear);
          // Agregando el sinopsis de la película
          $('#sinopsis-modal').text($moviePlot);
          console.log($('#movie-1').attr('src'));
          console.log(response.Poster);
        });
      }
      apiCall();

      // Para el segundo card/tarjeta
      $randomNumber2 = Math.floor(Math.random() * $randomScifiMoviesArray.length - 1) + 1;
      $randomMovie2 = $randomScifiMoviesArray[$randomNumber2];
      console.log($randomMovie2);

      // Accediendo al Open Movie DataBase
      function apiCall2() {
        $.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&t=' + encodeURI($randomMovie2)).then(function(response) {
          $movieImage = response.Poster;
          $movieName = response.Title;
          $movieYear = response.Year;
          $moviePlot = response.Plot;
          console.log(response);
          //  Cambiando el URL por defecto de image por el de la película a mostrar
          $('#movie-2').attr('src', $movieImage);
          // Agregando el nombre de la película y el año en el card/tarjeta
          $('#name-card-2').text($movieName);
          $('#year-card-2').text($movieYear);
          // Agregando la imagen de la película al modal
          $('#poster-movie-modal-2').css('background-image', 'url(' + $movieImage + ')');
          // Agregando el nombre de la película y el año en el modal
          $('#name-modal-2').text($movieName);
          $('#year-modal-2').text($movieYear);
          // Agregando el sinopsis de la película
          $('#sinopsis-modal-2').text($moviePlot);
          console.log($('#movie-2').attr('src'));
          console.log(response.Poster);
        });
      }
      apiCall2();

      // Para el tercer card/tarjeta
      $randomNumber3 = Math.floor(Math.random() * $randomScifiMoviesArray.length - 1) + 1;
      $randomMovie3 = $randomScifiMoviesArray[$randomNumber3];
      console.log($randomMovie3);

      // Accediendo al Open Movie DataBase
      function apiCall3() {
        $.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&t=' + encodeURI($randomMovie3)).then(function(response) {
          $movieImage = response.Poster;
          $movieName = response.Title;
          $movieYear = response.Year;
          $moviePlot = response.Plot;
          console.log(response);
          //  Cambiando el URL por defecto de image por el de la película a mostrar
          $('#movie-3').attr('src', $movieImage);
          // Agregando el nombre de la película y el año en el card/tarjeta
          $('#name-card-3').text($movieName);
          $('#year-card-3').text($movieYear);
          // Agregando la imagen de la película al modal
          $('#poster-movie-modal-3').css('background-image', 'url(' + $movieImage + ')');
          // Agregando el nombre de la película y el año en el modal
          $('#name-modal-3').text($movieName);
          $('#year-modal-3').text($movieYear);
          // Agregando el sinopsis de la película
          $('#sinopsis-modal-3').text($moviePlot);
          console.log($('#movie-3').attr('src'));
          console.log(response.Poster);
        });
      }
      apiCall3();

      // Para el cuarto card/tarjeta
      $randomNumber4 = Math.floor(Math.random() * $randomScifiMoviesArray.length - 1) + 1;
      $randomMovie4 = $randomScifiMoviesArray[$randomNumber4];
      console.log($randomMovie4);

      // Accediendo al Open Movie DataBase
      function apiCall4() {
        $.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&t=' + encodeURI($randomMovie4)).then(function(response) {
          $movieImage = response.Poster;
          $movieName = response.Title;
          $movieYear = response.Year;
          $moviePlot = response.Plot;
          console.log(response);
          //  Cambiando el URL por defecto de image por el de la película a mostrar
          $('#movie-4').attr('src', $movieImage);
          // Agregando el nombre de la película y el año en el card/tarjeta
          $('#name-card-4').text($movieName);
          $('#year-card-4').text($movieYear);
          // Agregando la imagen de la película al modal
          $('#poster-movie-modal-4').css('background-image', 'url(' + $movieImage + ')');
          // Agregando el nombre de la película y el año en el modal
          $('#name-modal-4').text($movieName);
          $('#year-modal-4').text($movieYear);
          // Agregando el sinopsis de la película
          $('#sinopsis-modal-4').text($moviePlot);
          console.log($('#movie-4').attr('src'));
          console.log(response.Poster);
        });
      }
      apiCall4();
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
  /*
  // Accediendo al Array
  var $randomScifiMoviesArray = ['E.T. the Extra-Terrestrial', 'Blade Runner', 'Alien', 'The Matrix'];
  debugger;
  for (var $i = 0; $i < $randomScifiMoviesArray ;$i++) {
    debugger;
    var $randomNumber = Math.floor(Math.random() * $randomScifiMoviesArray.length - 1) + 1;
    var $randomMovie = $randomScifiMoviesArray[$randomNumber];
    console.log($randomMovie);
    // Accediendo al Open Movie DataBase
    function apiCall() {
      $.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&t=' + encodeURI($randomMovie)).then(function(response) {
        var $movieImage = response.Poster;
        var $movieName = response.Title;
        var $movieYear = response.Year;
        var $moviePlot = response.Plot;
        console.log(response);
        //  Cambiando el URL por defecto de image por el de la película a mostrar
        $('#movie-' + $i).attr('src', $movieImage);
        // Agregando el nombre de la película y el año en el card/tarjeta
        $('#name-card-' + $i).text($movieName);
        $('#year-card-' + $i).text($movieYear);
        // Agregando la imagen de la película al modal
        $('#poster-movie-modal-' + $i).css('background-image', 'url(' + $movieImage + ')');
        // Agregando el nombre de la película y el año en el modal
        $('#name-modal-' + $i).text($movieName);
        $('#year-modal-' + $i).text($movieYear);
        // Agregando el sinopsis de la película
        $('#sinopsis-modal-' + $i).text($moviePlot);
        console.log($('#movie-' + $i).attr('src'));
        console.log(response.Poster);
      });
    }
    apiCall();
  }*/
});