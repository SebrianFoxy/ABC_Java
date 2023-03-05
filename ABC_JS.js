let elem = document.querySelector('#elem');

elem.addEventListener('click', func);
elem.addEventListener('dblclick', func);


function func(event) {
	if (event.type == 'click'){
		elem.style.color = 'green';
	}
	if (event.type == 'dblclick'){
		elem.style.color = 'red';
	}
}