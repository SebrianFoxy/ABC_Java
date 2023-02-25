let elem = document.querySelector('#elem');

elem.addEventListener('click', function func(){
	elem.textContent += ' ' + elem.dataset.text;
})