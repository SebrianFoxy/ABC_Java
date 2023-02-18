function getSum(arr) {
	let sum = arr.shift();
	
	if (arr.length !== 0) {
		sum *= getSum(arr);
	}
	
	return sum;
}

console.log(getSum([1, 2, 3, 4, 5]));