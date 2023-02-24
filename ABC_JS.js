function func() {
	this.value = '!!!';
}

let elem = document.querySelector('#elem');

elem.addEventListener('blur', func);