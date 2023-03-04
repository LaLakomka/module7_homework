//3.(7.3) Написать функцию, которая создает пустой объект, но без прототипа.


function createObj(obj) {
	let staples = {};
	
	return obj = staples;
}

let object = createObj('obj')
console.log((object));