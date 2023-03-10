let elem = document.querySelector('#elem');

elem.addEventListener('click', function(event) {
	event.preventDefault();
	console.log('Вы не можете перейти по этой ссылке!');
});