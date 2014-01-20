define (["./grid-component-plugin"], function (IgniteUIGridPlugin) {
	var IgniteUIHierarchicalGridPlugin = IgniteUIHierarchicalGridPlugin || IgniteUIGridPlugin.extend({
		init: function (options) {
			this._super(options);
		},
		getName: function () {
			return "igHierarchicalGrid";
		},
		_getWidgetName: function () {
			return "igHierarchicalGrid";
		},
		getMarkup: function (descriptor) {
			return "<div style=\"display:inline-block;\" id=\"" + descriptor.id + "\"></div>";
		},
		getCodeEditorScriptSnippet: function (descriptor) {
			var code = "";
			var opts = descriptor.options;
			var lineCount = 9;
			var xtraMarkup = ",\n\t\t\t\t\tfeatures: [\n" + "\t\t\t\t\t],\n\t\t\t\t\tcolumnLayouts: [\n" + "\t\t\t\t\t]";
			code = "\t\t\t\t$(\"#" + descriptor.id + "\").igHierarchicalGrid({\n" +
				"\t\t\t\t\theight: " + opts.height + ",\n" + 
				"\t\t\t\t\twidth: " + opts.width + xtraMarkup;
				if (descriptor.data && window[descriptor.data]) {
					code += ",\n\t\t\t\t\tdataSource: " + descriptor.data;
				}
			for (var key in opts) {
				if (opts.hasOwnProperty(key) && key !== "dataSource" && key !== "height" && key !== "width") {
					code += ",\n\t\t\t\t\t" + key + ": " + opts[key];
					lineCount++;
				}
			}
			code += "\n\t\t\t\t});\n";
			return {codeString: code, lineCount: lineCount};
		}
	});
	return IgniteUIHierarchicalGridPlugin;
});
