const $logoutButton = $('#logout');
const $appButton = $('.app-button');
const $pastaButton = $('.pasta-button');

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

function menuPastasButton() {
  $.ajax({
    url: '/pastas',
    method: 'GET'
  }).then(function() {
    location.replace('/pastas');
  });
}

$logoutButton.on('click', handleLogout);
$appButton.on('click', menuAppetizersButton);
$pastaButton.on('click', menuPastasButton);