function func1() {
	console.log('1');
}

function func2() {
	console.log('2');
}

function func3() {
	console.log('3');
}


let button1 = document.querySelector('#elem');
button1.addEventListener('click', func1)
button1.addEventListener('click', func2)
button1.addEventListener('click', func3)

