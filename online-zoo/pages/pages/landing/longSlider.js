const items = document.querySelectorAll('.slider__block');
const prevBtn = document.querySelector('.slider__button_prev');
const nextBtn = document.querySelector('.slider__button_next');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
	currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
	isEnabled = false;
	items[currentItem].classList.add(direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('slider__block-active', direction);
	});
}

function showItem(direction) {

	items[currentItem].classList.add('slider__block-next', direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('slider__block-next', direction);
		this.classList.add('slider__block-active');
		isEnabled = true;
	});
}

function previousItem(n) {
	hideItem('to-right');
	changeCurrentItem(n - 1);
	showItem('from-left'); 
}

function nextItem(n) {
	hideItem('to-left');
	changeCurrentItem(n - 1);
	showItem('from-right'); 
}

prevBtn.addEventListener('click', function() {
	if (isEnabled) {
		previousItem(currentItem);
	}
});

nextBtn.addEventListener('click', function() {
	if (isEnabled) {
		nextItem(currentItem);
	}
});






