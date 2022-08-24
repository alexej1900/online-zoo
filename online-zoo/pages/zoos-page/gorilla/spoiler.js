const spoiler = document.querySelector('.spoiler__block');
const spoilerBtn = document.querySelector('.reed-less__btn');

function btnInnerHtmlToggle() {
	if (spoiler.classList.contains('non-expanded')) {
		spoilerBtn.innerHTML = 'Reed More';
	} else if (!spoiler.classList.contains('non-expanded')) {
		spoilerBtn.innerHTML = 'Reed Less';
	}
} 
btnInnerHtmlToggle();

let heightBefore = spoiler.offsetHeight;
let offsetBefore = window.pageYOffset;

function toggleSpoiler (event) {
	spoiler.classList.toggle('non-expanded');
	let offsetNow = window.pageYOffset;
	let heightNow = spoiler.offsetHeight;
	let delta = offsetNow - (heightNow - heightBefore);
	window.scrollTo({left: 0, top: `${delta}`, behavior: 'smooth'});
	btnInnerHtmlToggle();
}

spoilerBtn.addEventListener('click', toggleSpoiler);









