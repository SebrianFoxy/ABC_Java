let elem = document.querySelector('#elem');

elem.addEventListener('click', function(event) {
	console.log(event);
	if (event.ctrlKey == true){
		console.log('Ctrl Clicked')
	}
});