let myInput = document.getElementById("elem");

myInput.addEventListener("input", function() {
	if (this.value.length > 5) {
    	console.log(myInput.value);
	}
});