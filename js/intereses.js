$(document).ready(function() {
  var $interestsOption1 = $('#option-1');
  var $interestsOptions = document.querySelectorAll('.interests-div');
  var $array = [];
  for (var $i = 0; $i < $interestsOptions.length; $i++) {
    $interestsOptions[$i].click(function(event) {
      if ($interestsOptions[$i] === $('#option-0')) {
        console.log('Soy Cero');
      }
      /* if(event.currentTarget === ) */
    });
  }


  /* var $selection = $('.interests-div').eq($i).data('option');
    $('#option-' + $i).click(function(event) {
      var $thisOption = $('#option-' + $i);
      $array.push($thisOption);
      console.log($thisOption.text());
      $thisOption.addClass('interest-selected'); 
      alert('Opción:' + $thisOption.text());
      console.log(event);
    }); */
});