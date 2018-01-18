$(document).ready(function() {

 
  $('.logo').addClass('animated slideInDown');

  
  function nameValid() {
    return $('#first_name').val().length >= 3;
  }
  
  function lastNameValid() {
    return $('#last_name').val().length >= 3;
  }

  function nickNameValid() {
    if ($('#nickname').val().length >= 3 && !($('#nickname').val().match(/^\s+|\s+$/))) {
      return true;
    }
    alert('Tu nickname no debe tener espacios.') ;
  }
  
  function emailValid() {
    return !$('#email').hasClass('invalid') && ($('#email').val().trim().length !== 0);
  }
  
  function passwordValid() {
    return $('#password').val().length >= 6;
  }
  
  function confirmPassword() {
    if ($('#confirm-password').val().length >= 6 && $('#confirm-password').val() === $('#password').val()) {
      return true;
    }
    alert('Tus contraseñas no son iguales. Por favor inténtalo nuevamente');
  }
  
  function checkboxValid() {
    return $('#filled-in-box').prop('checked');
  }
  
  function allOk() {
    return nameValid() && lastNameValid() && nickNameValid() && emailValid() && passwordValid() && confirmPassword();
  }
  
  $('#filled-in-box').on('change', function() {
    if (allOk()) {
      $('.btn-sign-up').prop('disabled', false);
    } else {
      $(this).prop('checked', false);
    }
  });
});