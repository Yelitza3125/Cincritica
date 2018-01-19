$(document).ready(function() {
  $('.logo').addClass('animated slideInDown');
  console.log(JSON.parse(localStorage.getItem('email_new_user'))); // array
  console.log(JSON.parse(localStorage.getItem('password_new_user'))); // array
  
  /* Recuperando la información guardada en los array */  
  var emailArray = JSON.parse(localStorage.getItem('email_new_user'));
  var passwordArray = JSON.parse(localStorage.getItem('password_new_user'));
  
  /* Comprobando que el email sea el mismo */
  function email() {
    for (var i = 0; i < emailArray.length; i++) {
      return $('#email').val() === emailArray[i];
    }
  } 
  
  /* Comprobando que la contraseña sea la misma */
  function password() {
    for (var i = 0; i < passwordArray.length; i++) {
      return $('#password').val() === passwordArray[i];
    }     
  }
  
  /* Si ambos campos son correctos, se habilita el botón */
  $('#password').keyup(function allOk() {
    if (email() && password()) {
      $('.btn-log-in').prop('disabled', false);
    }
  });
  
  /* Enviando a la vista perfil del usuario que ya esta resgistrado*/
  $('.btn-log-in').click(function() {
    window.location.href = '../views/principal.html';
  }); 
  
  /* Enviando a la vista home */
  $('.logo').on('click', function() {
    $(location).attr('href', 'home.html');
  });
});