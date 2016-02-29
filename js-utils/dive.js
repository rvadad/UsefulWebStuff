function getProperty(object, key, def) {
	'use strict';
	if (!key)
		return object;
	let prop;
	let props = key.split('.');
	let i, iLen;
	for (i = 0, iLen = props.length - 1; i < iLen; i++) {
		prop = props[i];
		let candidate = object[prop];
		if (candidate !== undefined)
			object = candidate;
		else
			return def;
	}
	return object[props[i]];
}

function setProperty(object, key, value){
	if (typeof key == 'string') key = key.split('.');
	if (key.length > 1) SetProperty(object[key.shift()] = {}, key, value);
	else object[key[0]] = value;
}