let elem = document.querySelector('#elem');
elem.addEventListener('blur', parent);

function parent() {
	console.log(this); // выведет ссылку на наш инпут
	
	function child() {
		console.log(this); // выведет undefined
	}
	child();
}