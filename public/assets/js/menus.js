const $logoutButton = $('#logout');
const $appButton = $('.app-button');

let user;

init();

function init() {
  user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    localStorage.clear();
    location.replace('/');
    return;
  }

  $('.welcome h3').text('Welcome ' + user.email + '!');
}

function handleLogout() {
  $.ajax({
    url: '/logout',
    method: 'DELETE'
  }).then(function() {
    localStorage.clear();
    location.replace('/');
  });
}

function menuAppetizersButton() {
  $.ajax({
    url: '/appetizers',
    method: 'GET'
  }).then(function() {
    location.replace('/appetizers');
  });
}

$logoutButton.on('click', handleLogout);
$appButton.on('click', menuAppetizersButton);