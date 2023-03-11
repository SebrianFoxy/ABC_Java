let buttons = document.querySelectorAll('button');

for (let button of buttons) {
	button.addEventListener('click', function() {
		this.previousElementSibling.classList.toggle('hidden');
	});
}