let elem = document.getElementById('#elem')
elem = parseInt(this.elem.textContent)

setInterval(function func(){
	elem = elem - 1;
	console.log(elem)
	if (elem == 1){
	alert(elem);
}
}, 30)

