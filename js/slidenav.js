$(document).ready(function() {
  $('.button-collapse').sideNav();
});

firebase.auth()
  .signInWithPopup(provider)
  .then(function(result) {
    var user = firebase.auth().currentUser;
    saveDataUser(user);
    console.log(user.displayName);
    console.log(user.photoURL);

    // Extraemos los datos de usuario para el modal de registro exitoso
    $('#your-photo').append('<img class="img-responsive" src="' + user.photoURL + '"/>');
  });
