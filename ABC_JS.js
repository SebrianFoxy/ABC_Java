let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let button3 = document.querySelector('#button3');
let but = document.querySelector('#but');

button1.addEventListener('click', func);
button2.addEventListener('click', func);
button3.addEventListener('click', func);
but.addEventListener('click', function func1(){
	button1.value += '!'
})

function func() {
	console.log(this.value);
}