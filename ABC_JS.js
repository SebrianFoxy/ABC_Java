function merge(...arrs) {
	return [].concat(...arrs);
}

let result = merge([1, 2, 3], [4, 5, 6], [7, 8, 9]);
console.log(result)