let elem = document.querySelector('#elem');

function func(param1, param2) {
	console.log(this.value + param1 + param2);
}

func.call(elem, " Hello", " MyFriend");