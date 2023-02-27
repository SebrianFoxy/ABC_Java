let elem = document.querySelector('#elem');
let elem1 = document.querySelector('#elem1');

elem.addEventListener('input', function func(){
	if (elem.value.length === 2){
		elem1.focus();
	}
})

elem1.addEventListener('input', function func1(){
	if (elem1.value.length === 2){
		console.log('ggg')
		elem1.blur();
	}
})