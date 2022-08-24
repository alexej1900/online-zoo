const gap = 30;
const input = document.getElementById('testimonials__slider_line');
const carousel = document.getElementById('testimonials__slider');

let imgWidth = document.querySelector('.slider__card_wrapper').offsetWidth;
let imgHeight= document.querySelector('.slider__card_wrapper').offsetHeight;
window.addEventListener('resize', (e) => {
  width = carousel.offsetWidth;
  imgWidth = document.querySelector('.slider__card_wrapper').offsetWidth;
});

function slideMove() {
	// if (window.width >= 940) {
		carousel.scrollTo((imgWidth + gap) * input.value, 0);
	// }
	
}

const slideFunc = () => {
	let slideIndex = +input.value;
  slideIndex += 1;
	if (slideIndex > 7) {
    slideIndex = 0;
  }
	input.value = slideIndex;
  slideMove();
}

let autoSlideInterval = setInterval(slideFunc, 10000);
let autoSlideTimeout = null;

const delayAutoSliding = () => {
  clearTimeout(autoSlideTimeout);
  clearInterval(autoSlideInterval);
  autoSlideInterval = null;

  autoSlideTimeout = setTimeout(() => {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(slideFunc, 10000);
  }, 30000);
}

carousel.addEventListener('click', delayAutoSliding);
input.addEventListener('input', slideMove);