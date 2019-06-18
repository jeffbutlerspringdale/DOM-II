// Your code goes here

var delayInMilliseconds = 100; //1 second

const btn = document.getElementById('dest-btn1');
btn.addEventListener('mouseenter', function(eventObject){
  eventObject.currentTarget.style.backgroundColor = "red";
  eventObject.currentTarget.style.color = "white";
  eventObject.stopPropagation();
  setTimeout(function() {
    alert('When you move your mouse to click Ok, ill vanish.');
  }, delayInMilliseconds);
});



btn.addEventListener('mouseenter', function(eventObject){
  eventObject.currentTarget.style.backgroundColor = "red";
  eventObject.stopPropagation();
});

btn.addEventListener('mouseleave', function(eventObject){
   //  console.log(`Current Target: ${eventObject.currentTarget}`);
    //  eventObject.currentTarget.style.backgroundColor = "blue";
     eventObject.currentTarget.style.display = "none";
     console.log(`working btn`);
     eventObject.stopPropagation();
   });

const nav = document.querySelector('.nav');
nav.addEventListener('click', function(eventObject){
eventObject.target.style.border = "1px dashed black";
    eventObject.stopPropagation();
    event.preventDefault();
});