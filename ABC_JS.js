let elem = document.getElementById('#elem')
elem = parseInt(this.elem.textContent)

let timerID = setInterval(function func(){
	elem = elem - 1;
	console.log(elem)
	if (elem == 0){
		clearInterval(timerID)
		alert(elem);
}
}, 1000)

