let button1 = document.querySelector('#elem');
let button = document.querySelector('#elem1');

console.log(elem.innerHTML)
elem.innerHTML = '<i> Hello </i>'

function func(){
	console.log(elem.innerHTML)
}
button1.addEventListener('click', func)


