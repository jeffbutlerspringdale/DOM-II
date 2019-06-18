// Your code goes here

var delayInMilliseconds = 100; //1 second

const btn1 = document.getElementById('dest-btn1');
const btn2 = document.getElementById('dest-btn2');
const btn3 = document.getElementById('dest-btn3');

btn1.addEventListener('mouseenter', function(eventObject){
  eventObject.currentTarget.style.backgroundColor = "red";
  eventObject.currentTarget.style.color = "white";
  setTimeout(function() {
    alert('When you move your mouse to click Ok, ill vanish.');
  }, delayInMilliseconds);
  eventObject.stopPropagation();

});
btn1.addEventListener('mouseleave', function(eventObject){
   //  console.log(`Current Target: ${eventObject.currentTarget}`);
    //  eventObject.currentTarget.style.backgroundColor = "blue";
     eventObject.currentTarget.style.display = "none";
     console.log(`working btn1`);
     eventObject.stopPropagation();
   });

btn2.addEventListener('mouseenter', function(eventObject){
    eventObject.currentTarget.style.backgroundColor = "red";
    eventObject.currentTarget.style.color = "white";
    setTimeout(function() {
      alert('When you move your mouse to click Ok, ill vanish.');
    }, delayInMilliseconds);
    eventObject.stopPropagation();
  
  });
btn2.addEventListener('mouseleave', function(eventObject){
     //  console.log(`Current Target: ${eventObject.currentTarget}`);
      //  eventObject.currentTarget.style.backgroundColor = "blue";
       eventObject.currentTarget.style.display = "none";
       console.log(`working btn2`);
       eventObject.stopPropagation();
     });

btn3.addEventListener('mouseenter', function(eventObject){
        eventObject.currentTarget.style.backgroundColor = "red";
        eventObject.currentTarget.style.color = "white";
        setTimeout(function() {
        alert('When you move your mouse to click Ok, ill vanish.');
        }, delayInMilliseconds);
        eventObject.stopPropagation();
      
});
btn3.addEventListener('mouseleave', function(eventObject){
         //  console.log(`Current Target: ${eventObject.currentTarget}`);
          //  eventObject.currentTarget.style.backgroundColor = "blue";
           eventObject.currentTarget.style.display = "none";
           console.log(`working btn3`);
           eventObject.stopPropagation();
});

const nav = document.querySelector('.nav');
nav.addEventListener('click', function(eventObject){
eventObject.target.style.border = "1px dashed black";
    eventObject.stopPropagation();
    event.preventDefault();
    console.log('nav working');
});

const middleImg1 = document.getElementById('middleImg1');
middleImg1.addEventListener('dblclick', function(eventObject){
    console.log('img content working');
    eventObject.target.style.border = "2px dashed black";
    TweenMax.to("middleImg1", 1, {opacity: 0,});
});

// const middleImg2 = document.getElementsByClassName('img-content');
// middleImg2.addEventListener('click', function(eventObject){
// eventObject.target.style.border = "1px dashed black";
//     eventObject.stopPropagation();
//     console.log('img content working');
// });