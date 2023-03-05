let elem = document.getElementById('elem');

document.addEventListener('mousemove', function(event) {
	elem.innerHTML = event.pageX + ' : ' + event.pageY;
});