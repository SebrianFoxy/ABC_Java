let elem = document.querySelector('#elem');

elem.addEventListener('click', function() {
	let input = document.createElement('input');
	input.value = elem.textContent;
	
	input.addEventListener('blur', function() {
		elem.textContent = this.value;
		this.remove();
	});
	
	elem.parentElement.appendChild(input);
});