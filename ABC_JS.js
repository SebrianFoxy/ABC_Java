let elem = document.querySelector('#elem');
let button = document.querySelector('#but')

button.addEventListener('click', function func(){
	elem.disabled = !elem.disabled
})


