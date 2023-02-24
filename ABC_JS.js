let button = document.querySelector('#button');
let num = 0;
button.addEventListener('click', func);

function func() {
	num++;
	console.log(num);
	if (num === 10){
		this.removeEventListener('click', func);
	}
	
}