const nextBtn = document.querySelector('.slider__button_next');
const prevBtn = document.querySelector('.slider__button_prev');
const gap = 30;
const carousel = document.querySelector('.camera__slider_wrapper');
const mainFrame = document.getElementById('main-frame');
const frames = document.querySelectorAll('.camera__slider_item');

let slideIndex = 0;
let width = carousel.offsetWidth;
let slideWidth = document.querySelector('.camera__slider_item').offsetWidth;

window.addEventListener('resize', (e) => {
	if (window.innerWidth <= 639) {
			prevBtn.style.display = 'none';
			nextBtn.style.display = 'none';
	} 
  width = carousel.offsetWidth;
  slideWidth = document.querySelector('.camera__slider_item').offsetWidth;
});

let step = 3;
if (window.innerWidth < 1600) step = 5;

nextBtn.addEventListener('click', e => {
  slideIndex += 1;
  carousel.scrollTo((slideWidth + gap) * slideIndex, 0);
  if (slideIndex > 0) {
    prevBtn.style.display = 'block';
  }
  if (slideIndex >= step) {
    nextBtn.style.display = 'none';
  }
});

prevBtn.addEventListener('click', e => {
  slideIndex -= 1;
  carousel.scrollTo((slideWidth + gap) * slideIndex, 0);
  if (slideIndex < step) {
    nextBtn.style.display = 'block';
  }
  if (slideIndex <= 0) {
    prevBtn.style.display = 'none';
  }
});

function chengeFrameSrc(event) {
	// console.log(event);
	let currLink = mainFrame.src;
	mainFrame.src = event.target.firstElementChild.src;
	event.target.firstElementChild.src = currLink;
}

frames.forEach(frame => frame.addEventListener('click', chengeFrameSrc));












