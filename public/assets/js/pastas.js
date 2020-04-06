document.getElementById('button').addEventListener('click', 
  function() {
    document.querySelector('.bg-modal').style.display = 'flex';
  });

document.querySelector('.close').addEventListener('click', 
  function() {
    document.querySelector('.bg-modal').style.display = 'none';
  });

document.getElementById('button-francaise').addEventListener('click', 
  function() {
    document.querySelector('.bg-modal-francaise').style.display = 'flex';
  });

document.querySelector('.close').addEventListener('click', 
  function() {
    document.querySelector('.bg-modal-francaise').style.display = 'none';
  });

