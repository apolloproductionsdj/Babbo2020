var removeCartItemsButtons = document.getElementsByClassName('btn-danger');

console.log(removeCartItemsButtons);

for (var i = 0; i < removeCartItemsButtons.length; i++) {
  var button = removeCartItemsButtons[i]
  button.addEventListener('click', function(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove();
  })
}