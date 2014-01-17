define (["./grid-component-plugin"], function (DefaultPlugin) {
	var IgniteUIHierarchicalGridPlugin = IgniteUIHierarchicalGridPlugin || DefaultPlugin.extend({
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
			var lineCount = 7;
			var xtraMarkup = ",\n\t\t\t\t\tfeatures: [\n" + "\t\t\t\t\t]";
			//A.T. - we can either drop with no features in the code editor
			// or an empty array - empty arr makes it easier to manage with markers
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
		},
		render: function (container, descriptor) {
			debugger
		}
	});
	return IgniteUIHierarchicalGridPlugin;
});
