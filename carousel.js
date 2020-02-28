var slideIndex = 1;
showSlide(slideIndex);

function nextSlide(n) {
    showSlide(slideIndex += n);
}

function thisSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    var i;
    var slides = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0;, i < DOMStringList.length; i++) {
        dots[i].className = dots[i].className.replace(" active, "");
    }
    slides[slideInex -].style.display = "block";
    dots[slideIndex - 1].className += "active";
}