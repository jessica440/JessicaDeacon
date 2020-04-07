var image = document.querySelectorAll('.slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,1800);

function nextSlide() {
	image[currentSlide].className = 'slide';
	currentSlide = (currentSlide + 1) % image.length;
	image[currentSlide].className = 'slide showing';
}

function prevSlide() {
	if (currentSlide < 1) {
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

// document.addEventListener(onkeydown, function nextSlide(){
// 	case 39;;
//   });
