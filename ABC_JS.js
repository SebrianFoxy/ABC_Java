let elem = document.querySelector('#elem');
elem.addEventListener('blur', parent);

function parent() {
	console.log(this.value); // выведет 'text'
	
	let child = () => {
		console.log(this.value); // выведет 'text'
	}
	child();
}