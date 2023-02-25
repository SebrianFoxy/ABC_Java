let elem = document.querySelector('#elem');
let button = document.querySelector('#but')
let button1 = document.querySelector('#but1')
let changing = document.querySelector('p')

button.addEventListener('click', function func(){
	elem.disabled = !elem.disabled
})

button1.addEventListener('click', function func1(){
	elem.checked = !elem.checked
	if (elem.checked == true){
		changing.textContent = 'Hello'
	}
	else{
		changing.textContent = 'Bye'
	}
})




