;(function() {
	let module = {};
	
	module.func1 = function() {
		alert('функция модуля');
	}
	module.func2 = function() {
		alert('функция модуля');
	}
	module.func3 = function() {
		alert('функция модуля');
	}
	
	window.module = module;
})();