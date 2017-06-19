define (["./_default-component-plugin"], function (DefaultPlugin) {
	var IgniteUISpreadsheetPlugin = IgniteUISpreadsheetPlugin || DefaultPlugin.extend({
		initComponent: function (descriptor) {
			var name = this._getWidgetName(descriptor.type);

		    if (window.frames[0].$(descriptor.placeholder)[name]) {

		        window.frames[0].$(descriptor.placeholder)[name](descriptor.options);
				var workbook = null;
				var xhr = new XMLHttpRequest();
				xhr.open('GET', '../js/FormattingData.xlsx', true);
				xhr.responseType = 'arraybuffer';

				xhr.onload = function (e) {
					// response is unsigned 8 bit integer
					var responseArray = new Uint8Array(this.response);
					window.frames[0].$.ig.excel.Workbook.load(responseArray, function () {
						workbook = arguments[0];
						window.frames[0].$(descriptor.placeholder)[name]("option", "workbook", workbook);
					}, function () {
						console.log("fail");
					})
				};
				xhr.send();
		    }
		}
	});
	return IgniteUISpreadsheetPlugin;
});
