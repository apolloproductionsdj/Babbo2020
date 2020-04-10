const $logoutButton = $('#logout');
const $appButton = $('.app-button');
const $modalTest = $('.modal-test');
const $pastaButton = $('.pasta-button');
const $saladsButton = $('.salads-button');
const $sandwichesButton = $('.sandwiches-button');
const $calzonesButton = $('.calzones-button');
const $proBowlsButton = $('.pro-bowls-button');
const $chalkEntreeButton = $('.chalk-entrees-button');
const $kidsMenuButton = $('.kids-menu-button');
const $dessertsButton = $('.desserts-button');
const $pizzaButton = $('.pizza-button');
const $italianSodasButton = $('.italian-sodas');


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
    location.assign('/appetizers');
  });
}

function menuPastasButton() {
  $.ajax({
    url: '/pastas',
    method: 'GET'
  }).then(function() {
    location.assign('/pastas');
  });
}

function menuSaladsButton() {
  $.ajax({
    url: '/salads',
    method: 'GET'
  }).then(function() {
    location.assign('/salads')
  });
}

function menuSandwichesButton() {
  $.ajax({
    url: ('/sandwiches'),
    method: 'GET'
  }).then(function() {
    location.assign('/sandwiches');
  });
}

function menuCalzonesButton() {
  $.ajax({
    url: ('/calzones'),
    method: 'GET'
  }).then(function() {
    location.assign('/calzones');
  });
}

function menuProBowlsButton() {
  $.ajax({
    url: ('/protein'),
    method: 'GET'
  }).then(function() {
    location.assign('/protein');
  });
}

function menuChalkEntreesButton() {
  $.ajax({
    url: ('/chalkboard'),
    method: 'GET'
  }).then(function() {
    location.assign('/chalkboard');
  });
}

function menuKidsMenuButton() {
  $.ajax({
    url: '/kids',
    method: 'GET' 
  }).then(function() {
    location.assign('/kids');
  });
}

function menuDessetsButton() {
  $.ajax({
    url: '/desserts',
    mehtod: 'GET'
  }).then(function() {
    location.assign('/desserts');
  });
}

function menuPizzaButton() {
  $.ajax({
    url: ('/pizzas'),
    method: 'GET'
  }).then(function(){
    location.assign('/pizzas');
  });
}

function menuItalianSodasButton() {
  $.ajax({
    url: ('/italian_sodas'),
    method: 'GET'
  }).then(function() {
    location.assign('/italian_sodas');
  });
}

function menuModalTest() {
  $.ajax({
    url: ('/appetizers2'),
    method: 'GET'
  }).then(function() {
    location.assign('/appetizers2');
  });
}

$logoutButton.on('click', handleLogout);
$appButton.on('click', menuAppetizersButton);
$pastaButton.on('click', menuPastasButton);
$saladsButton.on('click', menuSaladsButton);
$sandwichesButton.on('click', menuSandwichesButton);
$calzonesButton.on('click', menuCalzonesButton);
$proBowlsButton.on('click', menuProBowlsButton);
$chalkEntreeButton.on('click', menuChalkEntreesButton);
$kidsMenuButton.on('click', menuKidsMenuButton);
$dessertsButton.on('click', menuDessetsButton);
$pizzaButton.on('click', menuPizzaButton);
$italianSodasButton.on('click', menuItalianSodasButton);
$modalTest.on('click', menuModalTest);