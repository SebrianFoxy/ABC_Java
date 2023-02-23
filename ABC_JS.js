let button = document.querySelector('#elem');

let button1 = document.querySelector('#switching');

console.log(elem.id);   
console.log(elem.type);


function switcher(){
	if (elem.type == 'text'){
		elem.type = 'button';
	}
	else{
		elem.type = 'text'
		elem.textContent = 'Hello'
		
	}
}

button1.addEventListener('click', switcher)



