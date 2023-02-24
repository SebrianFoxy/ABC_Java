let button1 = document.querySelector('#elem');
let button2 = document.querySelector('#but');

button2.addEventListener('click', function func(){
	if (button1.style.color == 'black'){
		button1.style.color = 'red';
		console.log('red')
	}
	else{
		button1.style.color = 'black';
		console.log('black')
	}
})



