;(function({root, type = 'p', amount = 5}) {
	let parent = document.querySelector(root);
	
	for (let i = 1; i <= amount; i++) {
		let elem = document.createElement(type);
		parent.append(elem);
	}
})(config);

let config = {
	root:  '#parent',
	amount: 10
}