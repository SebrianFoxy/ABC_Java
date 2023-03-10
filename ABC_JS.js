let elem = document.getElementById('elem');

function func(param1, param2) {
	console.log(this.value + param1 + param2);
}

let newFunc = func.bind(elem);
newFunc('1', '2');