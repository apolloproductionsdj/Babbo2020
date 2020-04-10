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

 $(document).ready(function () {
        var small={width: "200px",height: "116px"};
        var large={width: "400px",height: "232px"};
        var count=1; 
        $("#img-francaise").css(small).on('click',function () { 
            $(this).animate((count==1)?large:small);
            count = 1-count;
        });
    });

document.getElementById('button-super').addEventListener('click', 
  function() {
    document.querySelector('.bg-modal-super-food-pasta').style.display = 'flex';
  });

document.querySelector('.close-super').addEventListener('click', 
  function() {
    document.querySelector('.bg-modal-super-food-pasta').style.display = 'none';
  });

 $(document).ready(function () {
        var small={width: "200px",height: "116px"};
        var large={width: "400px",height: "232px"};
        var count=1; 
        $("#img-super").css(small).on('click',function () { 
            $(this).animate((count==1)?large:small);
            count = 1-count;
        });
    });

document.getElementById('button-kale').addEventListener('click', 
  function() {
    document.querySelector('.bg-modal-kale').style.display = "flex";
  });

document.querySelector('.close-kale').addEventListener('click', 
  function() {
    document.querySelector('.bg-modal-kale').style.display = 'none';
  });

$(document).ready(function () {
  var small = {width: "200px", height: "116px"};
  var large = {width: "400px", height: "232px"};
  var count = 1;
  $("#img-kale").css(small).on('click', function () {
    $(this).animate((count==1) ? large : small);
    count = 1 - count;
  });
});

document.getElementById('button-pomodoro').addEventListener('click', 
  function() {
    document.querySelector('.bg-modal-pomodoro').style.display = "flex";
  });

document.querySelector('.close-pomodoro').addEventListener('click', 
  function() {
    document.querySelector('.bg-modal-pomodoro').style.display = 'none';
  });

$(document).ready(function() {
  var small = {width: "200px", height: "116px"};
  var large = {width: "400px", height: "232px"};
  var count = 1;
  $("#img-pomodoro").css(small).on('click', function() {
    $(this).animate((count==1) ? large : small);
    count = 1 - count;
  });
});

document.getElementById('button-supremo').addEventListener('click', 
  function() {
    document.querySelector('.bg-modal-supremo').style.display = "flex";
  });

document.querySelector('.close-supremo').addEventListener('click', 
  function() {
    document.querySelector('.bg-modal-supremo').style.display = 'none';
  });

$(document).ready(function() {
  var small = {width: "200px", height: "116px"};
  var large = {width: "400px", height: "232px"};
  var count = 1;
  $("#img-supremo").css(small).on('click', function() {
    $(this).animate((count==1) ? large : small);
    count = 1 - count;
  });
});
      
document.getElementById('button-primavera').addEventListener('click', 
  function() {
    document.querySelector('.bg-modal-primavera').style.display = "flex";
  });

document.querySelector('.close-primavera').addEventListener('click', 
  function() {
    document.querySelector('.bg-modal-primavera').style.display = 'none';
  });

$(document).ready(function() {
  var small = {width: "200px", height: "116px"};
  var large = {width: "400px", height: "232px"};
  var count = 1;
  $("#img-primavera").css(small).on('click', function() {
    $(this).animate((count==1) ? large : small);
    count = 1 - count;
  });
});