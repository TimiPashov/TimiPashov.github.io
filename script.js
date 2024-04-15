// let slideIndex = 0;
// const slides = document.querySelectorAll('.slides img');
// slides.forEach(slide => slide.style.display = 'none');

// function showSlides() {
//     if (slideIndex >= slides.length) {
//         slideIndex = 0;
//     }
//     if (slideIndex < 0) {
//         slideIndex = slides.length - 1;
//     }
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.opacity = 0;
//         setTimeout(() => {
//             slides[i].style.display = 'none';
//         }, 500)

//     }
//     slides[slideIndex].style.opacity = 1;
//     setTimeout(() => {
//         slides[slideIndex].style.display = 'block';
//     }, 500)

// }

// function moveSlide() {
//     slideIndex += 1;
//     showSlides();
// }


// showSlides();

// setInterval(moveSlide, 2000)


// set index and transition delay
let index = 0;
let transitionDelay = 2000;

// get div containing the slides
let slideContainer = document.querySelector(".slideshow");
// get the slides
let slides = slideContainer.querySelectorAll(".slide");

// set transition delay for slides
for (let slide of slides) {
  slide.style.transition = `all ${transitionDelay/1000}s linear`;
}

// show the first slide
showSlide(index);

// show a specific slide
function showSlide(slideNumber) {
  slides.forEach((slide, i) => {
    slide.style.display = i == slideNumber ? "block" : "none";
  });
  // next index
  index++;
  // go back to 0 if at the end of slides
  if (index >= slides.length) {
    index = 0;
  }
}

// transition to next slide every x seconds
setInterval (() => showSlide(index), transitionDelay);