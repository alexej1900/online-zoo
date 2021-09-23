const input = document.querySelector('.donate__amount_input-input');
const amountNums = document.querySelectorAll('.donate__amount_num-item');
const amountLine = document.querySelectorAll('.donate__amount_line-item');

amountLine.forEach(item => {
	item.checked = false;
	if (input.value === item.attributes.id.value)
		item.checked = true;
});

function setValueOnAmountLine (event) {
	if (input.value > 9999)
		input.value = input.value.slice(0, 4);
	amountNums.forEach(num => {
		num.classList.remove('donate__amount_num-item-active');
		if (event.target.value === num.textContent.slice(1))
			num.classList.add('donate__amount_num-item-active');
	amountLine.forEach(item => {
		item.checked = false;
		if (event.target.value === item.attributes.id.value)
			item.checked = true;
		});
	});
}

function setValueInInput (event) {
	event.target.checked = true;
	amountNums.forEach(num => {
		num.classList.remove('donate__amount_num-item-active');
		if (event.target.attributes.id.value === num.textContent.slice(1))
			num.classList.add('donate__amount_num-item-active');
	});
	input.value = event.target.attributes.id.value;
}




input.addEventListener('input', setValueOnAmountLine);
amountLine.forEach(lineItem => lineItem.addEventListener('click', setValueInInput));