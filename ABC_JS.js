let elem = document.querySelector('#elem');

elem.addEventListener('click', function(event) {
	if (event.altKey) {
		console.log('нажат Alt');
		elem.style.color = 'red';
	}
	else{
		elem.style.color = 'black';
	}
});