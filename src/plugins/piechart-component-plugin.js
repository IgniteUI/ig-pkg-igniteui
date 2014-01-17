define (function (require, exports, module) {
	var ComponentPlugin = require("ide-component-plugin");
	var IgniteUIComponentPlugin = IgniteUIComponentPlugin || ComponentPlugin.extend({
		init: function (options) {
			this._super(options);
		}		
	});
	return IgniteUIComponentPlugin;
});
