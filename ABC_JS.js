let button1 = document.querySelector('#elem');
let button = document.querySelector('#elem1');

button1.addEventListener('mouseover', function() {
	console.log('1');
});
button.addEventListener('mouseout', function() {
	console.log('2');
});
button.addEventListener('dblclick', function() {
	console.log('22');
});


