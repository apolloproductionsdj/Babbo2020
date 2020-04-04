const $newBoardButton = $('#new-board');

$newBoardButton.on('click', MicroModal.show.bind(null, 'create-board'))