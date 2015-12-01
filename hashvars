function URLHash(hash) {
	if (!hash) {
		this._fragment = location.hash;
	}
	else {
		this._fragment = hash;
	}
	this._values = {};
	this._loaded = false;
	this.load = function(sectionDelim, valueDelim) {
		if (this._loaded) {
			return;
		}
		if (!sectionDelim) {
			sectionDelim = "/";
		}
		if (!valueDelim) {
			valueDelim = ":";
		}
		var hash = this._fragment;
		while (hash.startsWith("#") || hash.startsWith(sectionDelim) || hash.startsWith(valueDelim)) {
			hash = hash.substring(1);
		}
		var pieces = hash.split(sectionDelim);
		for (var i = 0; i < pieces.length; i++) {
			var values = pieces[i].split(valueDelim);
			var key = values[0];
			this._values[key] = [];
			for (var n = 1; n < values.length; n++) {
				this._values[key].push(values[n]);
			}
		}
		this._loaded = true;
	};
	this.unload = function() {
		this._loaded = false;
	};
	this.reload = function(sectionDelim, valueDelim) {
		this.unload();
		this.load(sectionDelim, valueDelim);
	};
	this.value = function(keyword) {
		this.load();
		return this._values[keyword];
	};
}
