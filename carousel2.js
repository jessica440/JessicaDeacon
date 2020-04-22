var image = document.querySelectorAll('.slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,1800);


function nextSlide() {
	image[currentSlide].className = 'slide';
	currentSlide = (currentSlide + 1) % image.length;
	image[currentSlide].className = 'slide showing';
}

function prevSlide() {
	console.log("currentSlide",currentSlide)
	// var newmg = document.getElementById('img').innerHTML = "<img src='slide3.png'>"
	if (currentSlide < 1) {
		currentSlide = (image.length - 1) % image.length
		return image[image.length - 1];
	} else {
	image[currentSlide].className = 'slide';
	currentSlide = (currentSlide - 1) % image.length;
	image[currentSlide].className = 'slide showing';
	}
}

var play = true;
var pauseButton = document.getElementById('pause');

function pauseSlideshow() {
	pauseButton.innerHTML = 'Play';
	play = false;
	clearInterval(slideInterval);
}

function playSlideshow() {
	pauseButton.innerHTML = 'Pause';
	play = true;
	slideInterval = setInterval(nextSlide,1800);
}

pauseButton.onclick = function() {
	if (play) {pauseSlideshow();
	} else {playSlideshow(); 
	}
};

// // var input = document.getElementByClass("content");
// document.addEventListener("keydown", function(event) {
//   if (event.key === 37) {
//   console.log("next");
// 	prevSlide();}
//    else if (event.key === 39) {
//    console.log("prev");
// 	nextSlide();}
  
// });

document.addEventListener('keydown', logKey);

function logKey(e) {
  console.log(e);
  if (e.code === "ArrowLeft") {
	console.log("next");
	  prevSlide();}
	 else if (event.key === "ArrowRight") {
	 console.log("prev");
	  nextSlide();}
}

// document.onkeydown = function arrowNav(e) {
// 	switch (e.keydown) {
// 		if (e === case "37") {
// 			prevSlide();
// 	} else (e === case "39") {
// 		return nextSlide();
// 	}
// }


// document.onkeydown = function arrowNav(n) {
// 	if (n == 37) {
// 		return function prevSlide()}
// 	else (n == 39) {
// 		return function nextSlide()}
// 	}

var text = document.getElementsByClassName("me");
var i;

for (i = 0; i < text.length; i++) {
  text[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}