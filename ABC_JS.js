let elems = document.querySelectorAll('.www');
let but = document.querySelector('#but')

but.addEventListener('click', function func(){
	for (let elem of elems) {
		elem.textContent = elem.textContent + ' text';
		console.log(elem.textContent)
	}
})

