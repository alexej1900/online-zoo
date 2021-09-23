const gap = 30;
let currentItem = 0;
const carousel = document.querySelector('.slider'),
  content = document.querySelector('.slider__block'),
  nextBtn = document.querySelector('.slider__button_next'),
  prevBtn = document.querySelector('.slider__button_prev');

  

let slideIndex = 0;


let width = carousel.offsetWidth;
let imgWidth = document.querySelector('.slider__block_item').offsetWidth;
// window.addEventListener('resize', (e) => {
//   width = carousel.offsetWidth;
//   imgWidth = document.querySelector('img').offsetWidth;
// });

nextBtn.addEventListener('click', e => {
  // delayAutoSliding();

  // slideIndex += slideType === 'all' ? slideCoefficient : 1;

  content.scrollTo((imgWidth + gap) * 3, 0);
  // if (slideIndex > 0) {
  //   prev.style.display = 'flex';
  // }
  // if (slideIndex >= 15) {
  //   next.style.display = 'none';
  // }
});

prevBtn.addEventListener('click', e => {
  // delayAutoSliding();

  // slideIndex -= slideType === 'all' ? slideCoefficient : 1;
    // console.log('prev');
  content.scrollTo(0, 0);
  // if (slideIndex < 15) {
  //   next.style.display = 'flex';
  // }
  // if (slideIndex <= 0) {
  //   prev.style.display = 'none';
  // }
});

// const slideFunc = () => {
//   slideIndex += slideType === 'all' ? slideCoefficient : 1;
//   if (slideIndex > 0) {
//     prev.style.display = 'flex';
//   }
//   if (slideIndex >= 15) {
//     next.style.display = 'none';
//   }
//   if (slideIndex > 15) {
//     if (!(slideIndex < 20 && slideType === 'all')) {
//       slideIndex = 0;
//     }
//     prev.style.display = 'none';
//     next.style.display = 'flex';
//   }
//   carousel.scrollTo((imgWidth + gap) * slideIndex, 0);
// }

// let autoSlideInterval = setInterval(slideFunc, 3000);
// let autoSlideTimeout = null;

// const delayAutoSliding = () => {
//   clearTimeout(autoSlideTimeout);
//   clearInterval(autoSlideInterval);
//   autoSlideInterval = null;

//   autoSlideTimeout = setTimeout(() => {
//     clearInterval(autoSlideInterval);
//     autoSlideInterval = setInterval(slideFunc, 3000);
//   }, 6000);
// }


// carousel.addEventListener('click', delayAutoSliding);