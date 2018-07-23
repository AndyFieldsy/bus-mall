// blank template for starting projects

//lab 11 busmall start
// ids: Image1 Image2 Image3 imageSelection imageGen
'use strict';

var imgs = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];
var imgObj = [];


function ImageTracker(img, path) {
  this.name = img.split('.')[0];
  // this.name.pop();
  // this.name.toString();
  this.path = path;
  this.votes = 0;
}

var objCreate = function() {
  for (var i = 0; i < imgs.length; i++) {
    imgObj.push(new ImageTracker(imgs[i], 'img/'+imgs[i]));
  }
};
objCreate();

var rando = function() {
  return Math.floor(Math.random() * (imgs.length - 0) + 0);
};

//start of image generation

var inputImage1 = function () {
  rando();
  var r = rando();
  var image = document.createElement('img');
  image.src = imgObj[r].path;
  var src = document.getElementById('Image1');
  src.appendChild(image);
};

var inputImage2 = function() {
  rando();
  var r2 = rando();
  var image2 = document.createElement('img');
  image2.src = imgObj[r2].path;
  var src = document.getElementById('Image2');
  src.appendChild(image2);
};

var inputImage3 = function() {
  rando();
  var r3 = rando();
  var image3 = document.createElement('img');
  image3.src = imgObj[r3].path;
  var src = document.getElementById('Image3');
  src.appendChild(image3);
};

inputImage1();
inputImage2();
inputImage3();

var imageGen = function() {
  document.getElementById('Image1').innerHTML=' ';
  document.getElementById('Image2').innerHTML=' ';
  document.getElementById('Image3').innerHTML=' ';
  inputImage1();
  inputImage2();
  inputImage3();
};

function regen() {
  imageGen();
}

var imageGenButton = document.getElementById('imageGen');
imageGenButton.addEventListener('click', regen);

// end image generation



















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