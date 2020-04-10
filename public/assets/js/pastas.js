document.getElementById('button').addEventListener('click', 
  function() {
    document.querySelector('.bg-modal').style.display = 'flex';
  });

document.querySelector('.close-zoo').addEventListener('click', 
  function() {
    document.querySelector('.bg-modal').style.display = 'none';
  });

 $(document).ready(function () {
        var small={width: "200px",height: "116px"};
        var large={width: "400px",height: "232px"};
        var count=1; 
        $("#imgtab").css(small).on('click',function () { 
            $(this).animate((count==1)?large:small);
            count = 1-count;
        });
    });

document.getElementById('button-francaise').addEventListener('click', 
  function() {
    document.querySelector('.bg-modal-francaise').style.display = 'flex';
  });

document.querySelector('.close-fran').addEventListener('click', 
  function() {
    document.querySelector('.bg-modal-francaise').style.display = 'none';
  });

document.getElementById('button-super').addEventListener('click', 
  function() {
    document.querySelector('.bg-modal-super-food-pasta').style.display = 'flex';
  });

document.querySelector('.close-super').addEventListener('click', 
  function() {
    document.querySelector('.bg-modal-super-food-pasta').style.display = 'none';
  });

document.getElementById('button-kale').addEventListener('click', 
  function() {
    document.querySelector('.bg-modal-kale').style.display = "flex";
  });

document.querySelector('.close-kale').addEventListener('click', 
  function() {
    document.querySelector('.bg-modal-kale').style.display = 'none';
  });

document.getElementById('button-pomodoro').addEventListener('click', 
  function() {
    document.querySelector('.bg-modal-pomodoro').style.display = "flex";
  });

document.querySelector('.close-pomodoro').addEventListener('click', 
  function() {
    document.querySelector('.bg-modal-pomodoro').style.display = 'none';
  });


      
