let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let result = arr.map(function(elem) {
	return elem.map(function(num) {
		return num * num;
	});
});

console.log(result);