// Callback signature: element, index, whole, isArray
// When the target is neither an array nor an object:
// element === whole && index === -1 && isArray === false
// An example is available at http://jsfiddle.net/PrincessRTFM/m5uy6kuz/
function foreach(target, callback) {
	'use strict';
	if (typeof target != 'object') {
		callback(target, -1, target, false);
	}
	else {
		let arrayp = Object.prototype.toString.call(target) == '[object Array]';
		for (let index in target) callback(target[index], index, target, arrayp);
	}
}
