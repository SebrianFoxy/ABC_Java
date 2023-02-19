let arr = ['John', 'Smit', 'development', 'programmer'];

let [name, surname, ...c] = arr;

let position;
if (arr[3] !== undefined) {
	position = arr[3];
} else {
	position = 'trainee';
}