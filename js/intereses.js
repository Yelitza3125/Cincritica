$(document).ready(function() {
  var $interestsOption1 = $('#option-1');
  var $interestsOptions = document.querySelectorAll('.interests-div');
  var $selection = $('.interests-div');
  var $genreObject = {'genre': []}; 
  var $nextButton = $('#next-button');
  $selection.one('click', function() {
    var $thisOption = $(this).data('genre');
    $(this).addClass('interest-selected');
    console.log($thisOption);
    var $array = $genreObject.genre;
    $array.push($thisOption);
    console.log($genreObject);
    $nextButton.removeAttr('disabled');
    localStorage.setItem('genre', JSON.stringify($genreObject));
  });
});

