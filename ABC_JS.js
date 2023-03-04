let textarea = document.querySelector('textarea');
let div = document.querySelector('div');

textarea.addEventListener('blur', function() {
	div.textContent = textarea.value;
	textarea.value = '';
});