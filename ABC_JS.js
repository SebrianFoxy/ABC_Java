let elems = document.querySelectorAll('li');

for (let elem of elems) {
	elem.addEventListener('click', func);
}

function func() {
	console.log(this.textContent);
	this.textContent++;
}