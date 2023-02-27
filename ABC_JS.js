let elem = document.querySelector('#elem');

elem.addEventListener('change', function() {
	console.log(this.value);
});