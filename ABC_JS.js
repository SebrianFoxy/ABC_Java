let radios = document.querySelectorAll('input[type="radio"]');
let button = document.querySelector('#button');

button.addEventListener('click', function() {
	for (let radio of radios) {
		if (radio.checked) {
			console.log(radio.value);
		}
	}
});