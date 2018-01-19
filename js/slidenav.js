$(document).ready(function() {
  $('.button-collapse').sideNav();
  var getNickname = localStorage.getItem('nickname_google');
  $('#nicknametext').text(getNickname);
});
