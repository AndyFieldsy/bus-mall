// blank template for starting projects

//lab 11 busmall start
// ids: Image1 Image2 Image3 imageSelection imageGen
'use strict';

var imgs = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

var imgObj = [];
var totalVotes = 0;

function ImageTracker(img, path) {
  this.name = img.split('.')[0];
  // this.name.pop();
  // this.name.toString();
  this.path = path;
  this.votes = 0;
  this.views = 0;
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
//values to call from img index
var r = 0;
var r2 = 0;
var r3 = 0;

//values will be set after image generation on initial page load
//values will be compared with r value to make sure no duplicates
var nodup = -1;
var nodup2 = -1;
var nodup3 = -1;

var inputImage1 = function () {
  r = rando();
  while(r === nodup || r === nodup2 || r === nodup3){
    r = rando();
  }
  console.log(r,nodup); // initially had a problem. put logs in to find and fix.
  var image = document.createElement('img');
  // image.className = r; no
  image.src = imgObj[r].path;
  var src = document.getElementById('Image1');
  src.appendChild(image);
  imgObj[r].views++;
};

var inputImage2 = function() {
  r2 = rando();
  while(r2 === r || r2 === nodup || r2 === nodup2 || r2 === nodup3){
    r2 = rando();
  }
  console.log('r:'+r,'nodup:'+nodup,'r2:'+r2,'nodup2:'+nodup2); // initially had a problem. put logs in to find and fix.
  var image2 = document.createElement('img');
  // image2.className = r2; bad idea
  image2.src = imgObj[r2].path;
  var src = document.getElementById('Image2');
  src.appendChild(image2);
  imgObj[r2].views++;
};

var inputImage3 = function() {
  r3 = rando();
  while(r3 === r || r3 === r2 || r3 === nodup || r3 === nodup2 || r3 === nodup3){
    r3 = rando();
  }
  nodup = r;
  nodup2 = r2;
  nodup3 = r3;
  var image3 = document.createElement('img');
  // image3.className = r3; bad andy
  image3.src = imgObj[r3].path;
  var src = document.getElementById('Image3');
  src.appendChild(image3);
  imgObj[r3].views++;
  console.log('r:'+r,'nodup:'+nodup,'r2:'+r2,'nodup2:'+nodup2,'r3:'+r3,'nodup3:'+nodup3); // initially had a problem. put logs in to find and fix.
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

//start voting mechanics

var vote1Button = document.getElementById('vote1');
var vote2Button = document.getElementById('vote2');
var vote3Button = document.getElementById('vote3');

vote1Button.addEventListener('click', voted);
vote2Button.addEventListener('click', voted2);
vote3Button.addEventListener('click', voted3);

function voted() {
  imgObj[r].votes++;
  regen();
  resetScores();
  createScores();
  resetViews();
  createViews();
  totalVotes++;
}
function voted2() {
  imgObj[r2].votes++;
  regen();
  resetScores();
  createScores();
  resetViews();
  createViews();
  totalVotes++;
}
function voted3() {
  imgObj[r3].votes++;
  regen();
  resetScores();
  createScores();
  resetViews();
  createViews();
  totalVotes++;
}

// end voting mechanics

// start score - alerts at 25 total votes

var createScores = function() {
  for(var s=0; s < imgObj.length; s++) {
    var crtScores = document.createElement('li');
    crtScores.textContent = imgObj[s].name + ' total votes: ' + imgObj[s].votes;
    var scores = document.getElementById('scores');
    scores.appendChild(crtScores);
  }
};
createScores(); //run once to create initial scores

//clears HTML so we can recreate with new values
var resetScores = function () {
  document.getElementById('scores').innerHTML=' ';
  if(totalVotes > 24) {
    console.log('25 Reached');
    alert('You\'ve reached 25 votes! That is all that is required, but you may continue if you want.');
  }
  if(totalVotes > 50) {
    console.log('50 votes... but why?');
    alert('Okay. That\'s 50... why though?');
  }
  if(totalVotes > 75) {
    console.log('75...');
    alert('please stop!');
  }
};

// end scoring

// creates list of total views

var createViews = function() {
  for(var s=0; s < imgObj.length; s++) {
    var crtViews = document.createElement('li');
    crtViews.textContent = imgObj[s].name + ' total votes: ' + imgObj[s].views;
    var views = document.getElementById('views');
    views.appendChild(crtViews);
  }
};
createViews(); //run once to create initial views

//clears HTML so we can recreate with new values
var resetViews = function() {
  document.getElementById('views').innerHTML=' ';
};









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