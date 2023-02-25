let elem = document.querySelector('#elem');
let text = document.querySelector('p')

elem.addEventListener('blur', function func(){
	text.textContent += ' ' + elem.value;
	elem.value = ' ';
})


