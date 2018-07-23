// blank template for starting projects

//lab 11 busmall start
'use strict';

var imgs = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];
var imgObj = [];
var productArray = [];

function Product(name, path) {
  this.name = name;
  this.path = path;
  this.votes = 0;
  productArray.push[this];
}


for (var i = 0; i < imgs.length; i++) {
  imgObj.push(new ImageTracker(imgs[i]));
}



























// 'use strict';
// var audio = document.getElementById('lecture-audio');
// var astart = document.getElementById('audio-start');
// var apause = document.getElementById('audio-pause');

// function handleStartAudio() {
//   audio.play();
// }

// function handlePauseAudio() {
//   audio.pause();
// }

// astart.addEventListener('click' , handleStartAudio);
// apause.addEventListener('click', handlePauseAudio);

// setTimeout(function() {
//   handleStartAudio();
// }, 3000);


// var video = document.getElementById('lecture-video');
// var vstart = document.getElementById('video-start');
// var vpause = document.getElementById('video-pause');

// function handleStartVideo() {
//   video.play();
// }

// function handlePauseVideo() {
//   video.pause();
// }

// vstart.addEventListener('click', handleStartVideo);
// vpause.addEventListener('click', handlePauseVideo);

// setTimeout(function() {
//   handleStartVideo();
// }, 5000);