let slideIndex = 0;
const slides = document.querySelectorAll('.slides img');
slides.forEach(slide => slide.style.display = 'none');

function showSlides() {
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
        setTimeout(() => {
            slides[i].style.display = 'none';
        }, 500)

    }
    slides[slideIndex].style.opacity = 1;
    setTimeout(() => {
        slides[slideIndex].style.display = 'block';
    }, 500)

}

function moveSlide() {
    slideIndex += 1;
    showSlides();
}

// Show initial slide
showSlides();

setInterval(moveSlide, 2000)
