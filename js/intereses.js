$(document).ready(function() {

  $('.interests-div').addClass('animated rollIn');
  var $interestsOption1 = $('#option-1');
  var $interestsOptions = document.querySelectorAll('.interests-div');
  var $selection = $('.interests-div');
  var $genreObject = {genre: []};
  var $nextButton = $('#next-button');
  $selection.one('click', function() {
    var $thisOption = $(this).data('genre');
    /* $(this).addClass('interest-selected'); */
    console.log($thisOption);
    var $array = $genreObject.genre;
    $array.push($thisOption);
    console.log($genreObject);
    $nextButton.removeAttr('disabled');
  });

  /* Estilo al hacer click en la opción comedia*/
  $('#option-1').click(function() {
    $('#option-1').text('');
    var imgComedy = $('<img src= "../assets/images/vectores/comedy.png" class= "icons" >');
    $('#option-1').append(imgComedy);
  });

  /* Estilo al hacer click en la opción acción*/
  $('#option-2').click(function() {
    $('#option-2').text('');
    var imgAction = $('<img src= "../assets/images/vectores/action.png" class= "icons" >');
    $('#option-2').append(imgAction);
  });

  /* Estilo al hacer click en la opción romance*/
  $('#option-3').click(function() {
    $('#option-3').text('');
    var imgRomantic = $('<img src= "../assets/images/vectores/romance.png" class= "icons" >');
    $('#option-3').append(imgRomantic);
  });

  /* Estilo al hacer click en la opción ciencia ficción*/
  $('#option-4').click(function() {
    $('#option-4').text('');
    var imgFiction = $('<img src= "../assets/images/vectores/fiction.png" class= "icons" >');
    $('#option-4').append(imgFiction);
  });
});

/*
 $selection.one('dblclick', function() {
    debugger;
    var $thisOption = $(this).data('genre');
    $(this).removeClass('interest-selected');
    var $array = $genreObject.genre;
    $array.indexOf($thisOption);
    console.log($thisOption);
  });
*/
